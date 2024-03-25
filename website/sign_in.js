function check_lengths()
{

    var username = document.getElementsByName("username_box")
    var password = document.getElementsByName("password_box")
    var password_confirm = document.getElementsByName("password_confirm_box")

}

function submit(username, password)
{
    const request = new XMLHttpRequest();
    request.open("GET", "./dbthing.php?username=" + username + "&password=" + password)

}