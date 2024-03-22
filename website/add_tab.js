//let screen_height = window.screen.availHeight;
//let screen_width = window.screen.availWidth;

import { resize_tabs } from "./resizing.js";

function add_tab(grid_height, grid_width, mine_number, username)
{

    if (window.tab_container.length > 49)
    {

        return

    }

    let new_tab_index = window.tab_container.length 

    let new_tab = document.createElement("div");
    new_tab.setAttribute("class","tab");
    new_tab.style.height = window.tab_height + "px";
    new_tab.style.width = window.tab_width + "px";

    let open_page_button = document.createElement("div");
    open_page_button.onclick = function () { open_tab(new_tab)};
    open_page_button.setAttribute("class", "open_page_button");
    open_page_button.innerHTML = "tab_open_page" + (tab_container.length + 1);
    open_page_button.style.height = window.tab_height + "px";
    open_page_button.style.width = window.tab_width + "px";

    let close_button = document.createElement("span");
    close_button.onclick = function () { close_tab(new_tab_index); };
    close_button.setAttribute("class", "close_button");
    close_button.innerHTML= "&times";
    close_button.style.height = window.close_height + "px";
    close_button.style.width = window.close_width + "px";

    window.tab_container.push(new_tab);
    window.tab_holder.appendChild(new_tab);
    new_tab.appendChild(open_page_button);
    open_page_button.appendChild(close_button);

    reorganise_tabs()

}

export function add_tab_iframe(mode)
{

    add_tab()

    let latest_added_tab = window.tab_container[window.tab_container.length - 1];

    let iframe_holder = document.createElement("div");
    iframe_holder.setAttribute("class", "iframe_holder");
    iframe_holder.style.height = window.game_height + "px";
    iframe_holder.style.width = window.game_space_width + "px";

    let game_iframe = document.createElement("iframe")
    game_iframe.setAttribute("class","game_iframe");
    game_iframe.src = "game_files/iframe_test.html?username=" + window.username + "&game_mode=" + mode

    latest_added_tab.appendChild(iframe_holder);
    iframe_holder.appendChild(game_iframe);

}

function redeclare_ids()
{

    for (let i in window.tab_container)
    {

        window.tab_container[i].setAttribute("id", "tab_" + i);  

    };

}

function redeclare_indexes()
{

    for (let i in window.tab_container)
    {

        let close_button = window.tab_container[i].getElementsByClassName("close_button")[0];
        close_button.onclick = function () { close_tab(i); };


    };

}

/*
function resize_tabs()
{

    if (tab_container.length > 7)
    {

        let new_tab_width = tab_holder.getBoundingClientRect().width / tab_container.length;

        for (let i in tab_container) 
        {
            let close_button = tab_container[i].getElementsByClassName("close_button")[0]
            let open_page_button = tab_container[i].getElementsByClassName("open_page_button")[0]
    
            tab_container[i].style.width = new_tab_width + "px";
            open_page_button.style.width = new_tab_width + "px";

            if (close_button.style.width > new_tab_width)
            {

                close_button.style.width = new_tab_width + "px";

            }
            else
            {

                close_button.style.width = 0.3 * tab_height;

            }
    
        };

    }

}
*/
function reorganise_tabs()
{

    redeclare_ids()

    redeclare_indexes()

    resize_tabs()

}

function open_tab(parent)
{

    for (let i in window.tab_container)
    {

        let iframe_holder = tab_container[i].getElementsByClassName("iframe_holder")[0] 
        iframe_holder.style.display = "none";

    }

    let child_iframe_holder = parent.getElementsByClassName("iframe_holder")[0]
    child_iframe_holder.style.display = "block";



}

function close_tab(i)
{
    console.log(i)
    window.tab_container[i].remove();
    window.tab_container.splice(i, 1);

    reorganise_tabs()

}