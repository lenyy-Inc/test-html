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

if (1==1)//($_SERVER["REQUEST_METHOD"] == "GET")
{

	if (1==1)//($_GET["request_type"] == "signin")
	{

		$username = "guest";//$_GET["username"];
		//$password = $_GET["password"];
	
		$select = $DB_instance->prepare("SELECT username, password FROM users WHERE username = :username LIMIT 1");
		$select->bindvalue(":username", $username);
	
	
		$dbpassword = $select->execute()->fetchArray(SQLITE3_ASSOC);
	
		echo json_encode($dbpassword);
	
	}
	if (1==1)//($_GET["request_type"] == "search")
	{

		$username = "*" . "guest" . "*"; //$_GET["username"];
		//$password = $_GET["password"];
		$offset = 0;//$_GET["page"] * 10;
	
		$select = $DB_instance->prepare("SELECT username, password FROM users WHERE username LIKE :username LIMIT 1");
		$select->bindvalue(":username", $username);
		//$select->bindvalue(":offset", $offset);

		echo $select->execute();
	
		$dbpassword = $select->execute()->fetchArray(SQLITE3_ASSOC);

		echo json_encode($dbpassword);
	
	}


}