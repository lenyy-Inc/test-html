
window.onload = initial_sizing;

window.onresize = resize_after_loading;

function initial_sizing()
{

    console.log("initial sizing started")

    initial_game_space_width = screen_width * 0.7;
    initial_game_space_height = initial_game_space_width * game_space_width_height_ratio;

    initial_sidebar_width = screen_width * 0.2;

    set_game_space_to_default()

    sidebar.style.width = initial_sidebar_width + "px";

    console.log("initial sizing finished");
}

function resize_game_area(width, height)
{

    console.log("width " + width)
    console.log("height " + height)

    game_space.style.height = height;
    game_space.style.width = width;

    game_space_width = game_space.getBoundingClientRect().width;
    game_space_height = game_space.getBoundingClientRect().height;

    game_height = game_space_height * 0.9;

    tab_holder_height = game_space_height * tab_holder_height_ratio;

    tab_width = game_space_width * tab_holder_height_ratio;
    tab_height = game_space_height * tab_holder_height_ratio;

    close_height = tab_height * 0.3;
    close_width = tab_height * 0.3;


    game_space.style.height = game_space_height + "px";
    game_space.style.width = game_space_width + "px";


    tab_holder.style.height = tab_holder_height + "px";
    tab_holder.style.width = game_space_width + "px";


    game.style.height = game_height + "px";
    game.style.width = game_space_width + "px";


    let close_button
    let open_page_button
    let game_iframe

    for (let i in tab_container)
    {

        tab = tab_container[i]
        close_button = tab_container[i].getElementsByClassName("close_button")[i]
        open_page_button = tab_container[i].getElementsByClassName("open_page_button")[i]
        game_iframe = tab_container[i].getElementsByClassName("game_iframe")[i]

        game_iframe.style.height = game_height + "px";
        game_iframe.style.width = game_space_width + "px";

        tab.style.height = tab_height + "px";
        tab.style.width = tab_width + "px";

        close_button.style.height = close_height + "px";
        close_button.style.width = close_width + "px";

        open_page_button.style.height = tab_height + "px";
        open_page_button.style.width = tab_width + "px";
    }

    console.log("makes it to the end fo the function")

}

function set_game_space_to_default()
{

    resize_game_area(initial_game_space_width + "px", initial_game_space_height + "px")

}

function resize_after_loading()
{

    console.log("resizing started")

    let game_space = document.getElementById("game_space");
    let sidebar = document.getElementById("sidebar");

    let page_too_narrow = window.matchMedia("(max-width: " + (initial_game_space_width + initial_sidebar_width) + "px)");

    set_game_space_to_default()
    sidebar.style.width = initial_sidebar_width + "px";
    sidebar.style.height = "100%";

    if (page_too_narrow.matches)
    {

        resize_game_area("100%", (window.innerHeight - (initial_sidebar_width/2)) + "px")

        sidebar.style.height = sidebar_width + "px";
        sidebar.style.width = "100%";

    }

    let page_too_tall = window.matchMedia("(max-aspect-ratio: 2/3)")

    if (page_too_tall.matches)
    {



    }

    console.log("resizing finished")

}