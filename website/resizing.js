
window.onload = initial_sizing;

window.onresize = resize_after_loading;

function initial_sizing()
{

    initial_game_space_width = screen_width * 0.7;
    initial_game_space_height = initial_game_space_width * game_space_width_height_ratio;

    initial_sidebar_width = screen_width * 0.2;

    game_space.style.minWidth = initial_game_space_width/2
    game_space.style.minHeight = initial_game_space_height/2

    sidebar.style.minHeight = initial_sidebar_width
    sidebar.style.minWidth = initial_sidebar_width

    tab_holder.style.minHeight = initial_game_space_width/2 * tab_holder_height_ratio;
    tab_holder.style.minWidth = initial_game_space_width/2;

    set_game_space_to_default()

    sidebar.style.width = initial_sidebar_width + "px";

    resize_after_loading();

}

function resize_tabs()
{

    if (tab_container.length > 7)
    {

        let new_tab_width = tab_holder.getBoundingClientRect().width / tab_container.length;

        for (let i in tab_container) 
        {
            close_button = tab_container[i].getElementsByClassName("close_button")[0]
            open_page_button = tab_container[i].getElementsByClassName("open_page_button")[0]
    
            tab_container[i].style.width = new_tab_width + "px";
            open_page_button.style.width = new_tab_width + "px";

            console.log("got here")
            if (close_width > new_tab_width)
            {

                close_button.style.width = new_tab_width + "px";
                console.log("should have resized close button")

            }
            else
            {

                close_button.style.width = close_width + "px";

            }
    
        };

    }

}

function resize_game_area(width, height)
{

    game_space.style.height = height;
    game_space.style.width = width;

    //converts any given percentages into px, and strips the "px" from them
    game_space_width = game_space.getBoundingClientRect().width;
    game_space_height = game_space.getBoundingClientRect().height;

    tab_holder_height = game_space_height * tab_holder_height_ratio;

    game_height = game_space_height - tab_holder_height;

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
    let iframe_holder

    for (let i in tab_container)
    {

        tab = tab_container[i]
        close_button = tab_container[i].getElementsByClassName("close_button")[0]
        open_page_button = tab_container[i].getElementsByClassName("open_page_button")[0]
        iframe_holder = tab_container[i].getElementsByClassName("iframe_holder")[0]

        tab.style.height = tab_height + "px";
        tab.style.width = tab_width + "px";

        iframe_holder.style.height = game_height + "px";
        iframe_holder.style.width = game_space_width + "px";

        close_button.style.height = close_height + "px";
        close_button.style.width = close_width + "px";

        open_page_button.style.height = tab_height + "px";
        open_page_button.style.width = tab_width + "px";
    }

    resize_tabs()

    console.log("makes it to the end of the resize game function")

}

function set_game_space_to_default()
{

    resize_game_area(initial_game_space_width + "px", initial_game_space_height + "px")

}

function resize_after_loading()
{

    let game_space = document.getElementById("game_space");
    let sidebar = document.getElementById("sidebar");

    let page_too_narrow = window.matchMedia("(max-width: " + (initial_game_space_width + initial_sidebar_width) + "px)");

    //default case listen im working on it
    set_game_space_to_default()
    sidebar.style.width = initial_sidebar_width + "px";
    sidebar.style.height = "100%";

    if (page_too_narrow.matches)
    {

        resize_game_area("100%", (window.innerHeight - (initial_sidebar_width/2)) + "px")

        sidebar.style.height = initial_sidebar_width/2  + "px";
        sidebar.style.width = "100%";

    }

    console.log(sidebar.style.height)

    let page_too_tall = window.matchMedia("(max-aspect-ratio: 2/3)")

    if (page_too_tall.matches)
    {

        resize_game_area("100%", (window.innerHeight - (initial_sidebar_width/2)) + "px")

        sidebar.style.height = initial_sidebar_width/2  + "px";
        sidebar.style.width = "100%";

    }
}