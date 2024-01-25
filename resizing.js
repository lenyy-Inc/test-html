window.onload = initial_sizing;

function initial_sizing()
{
    
    let screen_height = window.screen.availHeight
    let screen_width = window.screen.availWidth

    let tab_holder_height = screen_height * 0.1

    let game_height = screen_height * 0.7;

    let game_space_height = screen_height * 0.8;
    let game_space_width = screen_width * 0.7;

    //let tab_height = document.documentElement.clientHeight * 0.1;
    //let tab_width = document.documentElement.clientWidth * 0.7;

    //let sidebar_height = document.documentElement.clientHeight * 1;
    let sidebar_width = screen_width * 0.2;

    
    let game_space = document.getElementById("game_space");

    game_space.style.minHeight = game_space_height + "px";
    game_space.style.minWidth = game_space_width + "px";

    let tab_holder = document.getElementById("tab_holder");

    tab_holder.style.minHeight = tab_holder_height + "px";
    tab_holder.style.minWidth = game_space_width + "px";

    let game = document.getElementById("game");

    game.style.minHeight = game_height + "px";
    game.style.minWidth = game_width + "px";

    console.log(game_height);
    console.log("worky");

    /*
    let tab = document.getElementById("tab_holder");
    tab.style.minHeight = tab_height + "px";
    tab.style.minWidth = tab_width + "px";
    */

    let sidebar = document.getElementById("sidebar");
    
    sidebar.style.minWidth = sidebar_width + "px";
}