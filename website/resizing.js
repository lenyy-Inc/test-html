window.onload = initial_sizing;

window.onresize = resize_after_loading;

function initial_sizing()
{

    window.initial_game_space_width = window.screen_width * 0.7;
    window.initial_game_space_height = window.initial_game_space_width * window.game_space_width_height_ratio;

    window.initial_sidebar_width = window.screen_width * 0.2;

    window.game_space.style.minWidth = window.initial_game_space_width/2
    window.game_space.style.minHeight = window.initial_game_space_height/2

    window.sidebar.style.minHeight = window.initial_sidebar_width
    window.sidebar.style.minWidth = window.initial_sidebar_width

    window.tab_holder.style.minHeight = window.initial_game_space_width/2 * window.tab_holder_height_ratio;
    window.tab_holder.style.minWidth = window.initial_game_space_width/2;

    set_game_space_to_default()
    window.sidebar.style.width = window.initial_sidebar_width + "px";

    resize_after_loading();

}

function resize_tabs()
{

    if (window.tab_container.length > 7)
    {

        let new_tab_width = window.tab_holder.getBoundingClientRect().width / window.tab_container.length;

        for (let i in window.tab_container) 
        {
            let close_button = window.tab_container[i].getElementsByClassName("close_button")[0]
            let open_page_button = window.tab_container[i].getElementsByClassName("open_page_button")[0]
    
            window.tab_container[i].style.width = new_tab_width + "px";
            open_page_button.style.width = new_tab_width + "px";

            if (close_button.style.width > new_tab_width)
            {

                close_button.style.width = new_tab_width + "px";

            }
            else
            {

                close_button.style.width = 0.3 * window.tab_height;

            }
    
        };

    }

}

function resize_game_area(width, height)
{

    window.game_space.style.height = height;
    window.game_space.style.width = width;

    //converts any given percentages into px, and strips the "px" from them
    window.game_space_width = window.game_space.getBoundingClientRect().width;
    window.game_space_height = window.game_space.getBoundingClientRect().height;

    window.tab_holder_height = window.game_space_height * window.tab_holder_height_ratio;

    window.game_height = window.game_space_height - window.tab_holder_height;

    window.tab_width = window.game_space_width * window.tab_holder_height_ratio;
    window.tab_height = window.game_space_height * window.tab_holder_height_ratio;

    window.close_height = window.tab_height * 0.3;
    window.close_width = window.tab_height * 0.3;


    window.game_space.style.height = window.game_space_height + "px";
    window.game_space.style.width = window.game_space_width + "px";


    window.tab_holder.style.height = window.tab_holder_height + "px";
    window.tab_holder.style.width = window.game_space_width + "px";


    window.game.style.height = window.game_height + "px";
    window.game.style.width = window.game_space_width + "px";


    let close_button
    let open_page_button
    let iframe_holder
    let tab

    for (let i in window.tab_container)
    {

        tab = window.tab_container[i]
        close_button = window.tab_container[i].getElementsByClassName("close_button")[0]
        open_page_button = window.tab_container[i].getElementsByClassName("open_page_button")[0]
        iframe_holder = window.tab_container[i].getElementsByClassName("iframe_holder")[0]

        tab.style.height = window.tab_height + "px";
        tab.style.width = window.tab_width + "px";

        iframe_holder.style.height = window.game_height + "px";
        iframe_holder.style.width = window.game_space_width + "px";

        close_button.style.height = window.close_height + "px";
        close_button.style.width = window.close_width + "px";

        open_page_button.style.height = window.tab_height + "px";
        open_page_button.style.width = window.tab_width + "px";
    }

    resize_tabs()

    console.log("makes it to the end of the resize game function")

}

function set_game_space_to_default()
{

    resize_game_area(window.initial_game_space_width + "px", window.initial_game_space_height + "px")

}

function resize_after_loading()
{

    let page_too_narrow = window.matchMedia("(max-width: " + (window.initial_game_space_width + window.initial_sidebar_width) + "px)");

    //default case listen im working on it
    set_game_space_to_default()
    window.sidebar.style.width = window.initial_sidebar_width + "px";
    window.sidebar.style.height = "100%";

    if (page_too_narrow.matches)
    {

        resize_game_area("100%", (window.innerHeight - (window.initial_sidebar_width/2)) + "px")

        window.sidebar.style.height = window.initial_sidebar_width/2  + "px";
        window.sidebar.style.width = "100%";

    }

    console.log(window.sidebar.style.height)

    let page_too_tall = window.matchMedia("(max-aspect-ratio: 2/3)")

    if (page_too_tall.matches)
    {

        resize_game_area("100%", (window.innerHeight - (window.initial_sidebar_width/2)) + "px")

        window.sidebar.style.height = window.initial_sidebar_width/2  + "px";
        window.sidebar.style.width = "100%";

    }
}

export {resize_tabs}
