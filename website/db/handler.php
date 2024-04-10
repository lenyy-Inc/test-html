<?php
class userDB extends SQLite3
{

    private static ?userDB $userDB = NULL;

    private function __construct()
    {

        $this->open("./user_data.db");

    }

    public static function get_userDB(): userDB
    {
 
        if (self::$userDB == NULL)
        {

            self::$userDB = new userDB();

        }

        return self::$userDB;

    }

}

$DB_instance = userDB::get_userDB();

if ($_SERVER["REQUEST_METHOD"] == "GET");
{

	if ($_GET["request_type"] == "signin")
	{

		$username = $_GET["username"];
		$password = $_GET["password"];
		$password_confirm = $_GET["password_confirm"];

		if(($username == null) || ($password == null) || ($password_confirm == null))
		{

			header("Location: ../index.html?error_message=not_all_fields_filled");
			exit;

		}

		if(!($password_confirm == $password))
		{

			header("Location: ../index.html?error_message=password_and_password_confirm_do_ not_match");
			exit;

		}
	
		$select = $DB_instance->prepare("SELECT password FROM users WHERE username = :username LIMIT 1");
		$select->bindvalue(":username", $username);
	
	
		$dbpassword = $select->execute()->fetchArray(SQLITE3_ASSOC);

		if (!$dbpassword)
		{

			$insert = $DB_instance->prepare("INSERT INTO users (username, password) VALUES (:username, :password)");

		}
		else if($dbpassword["password"] == $password)
		{

			session_start();
			$_SESSION["username"] = $username;
			header("Location: ../game_page.php");
			exit;
		}

		header("Location: ../index.html?error_message=incorrect_password");
	
	}
	if ($_GET["request_type"] == "search")
	{

		$username = "%" . $_GET["username"] . "%"; 
		$offset = ($_GET["page"] - 1) * 10;
	
		$select = $DB_instance->prepare("SELECT username FROM users WHERE username LIKE :username LIMIT 10 OFFSET :offset");
		$select->bindvalue(":username", $username);
		$select->bindvalue(":offset", $offset);
		

		$fetchedArray = array();

		$selection = $select->execute();

		while($selected = $selection->fetchArray(SQLITE3_ASSOC))
		{

			array_push($fetchedArray, $selected);

		}

		echo json_encode($fetchedArray);
	
	}


}

echo "RAHHHH";