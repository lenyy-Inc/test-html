window.onload = iframe_test;
var mine_number

function parse_query_string()
{
    console.log("parsing started")

    var params = location.href.split('?')[1].split('&');
    var data = {};
    for (x in params)
    {
        data[params[x].split('=')[0]] = params[x].split('=')[1];
    }

    console.log("string parsed")
    return data
}

function iframe_test()
{

    window.data = parse_query_string()

    window.mode = document.getElementById("mode")
    window.username = document.getElementById("username")

    username.innerHTML = data["username"]
    mode.innerHTML = data["game_mode"]

    console.log("change attempted")

}