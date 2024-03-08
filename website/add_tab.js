//let screen_height = window.screen.availHeight;
//let screen_width = window.screen.availWidth;

function add_tab(grid_height, grid_width, mine_number, username)
{

    let new_tab_index = tab_container.length 

    let new_tab = document.createElement("div");
    new_tab.setAttribute("class","tab");
    new_tab.style.height = tab_height + "px";
    new_tab.style.width = tab_width + "px";

    let open_page_button = document.createElement("div");
    open_page_button.onclick = open_tab;
    open_page_button.setAttribute("class", "open_page_button");
    open_page_button.innerHTML = "tab_open_page" + (tab_container.length + 1);
    open_page_button.style.height = tab_height + "px";
    open_page_button.style.width = tab_width + "px";

    let close_button = document.createElement("span");
    console.log("i_value " + tab_container.length)
    close_button.onclick = function () { close_tab(new_tab_index); };
    close_button.setAttribute("class", "close_button");
    close_button.innerHTML= "&times";
    close_button.style.height = close_height + "px";
    close_button.style.width = close_width + "px";

    tab_container.push(new_tab);
    tab_holder.appendChild(new_tab);
    new_tab.appendChild(open_page_button);
    open_page_button.appendChild(close_button);

    reorganise_tabs()

}

function add_tab_iframe(mode)
{

    add_tab()

    let latest_added_tab = tab_container[tab_container.length - 1];

    console.log(latest_added_tab)

    let iframe_holder = document.createElement("div");
    iframe_holder.setAttribute("class", "iframe_holder");
    iframe_holder.style.height = game_height + "px";
    iframe_holder.style.width = game_space_width + "px";

    console.log(iframe_holder.style.height)
    console.log(iframe_holder.style.width)

    let game_iframe = document.createElement("iframe")
    game_iframe.setAttribute("class","game_iframe");
    game_iframe.src = "game_files/iframe_test.html?username=" + username + "&game_mode=" + mode

    latest_added_tab.appendChild(iframe_holder);
    iframe_holder.appendChild(game_iframe);

    console.log("here")

}

function redeclare_ids()
{

    for (let i in tab_container)
    {

        tab_container[i].setAttribute("id", "tab_" + i);  

    };

}

function redeclare_indexes()
{

    for (let i in tab_container)
    {

        let close_button = tab_container[i].getElementsByClassName("close_button")[0];
        close_button.onclick = function () { close_tab(i); };


    };

}

function resize_tabs()
{

    if (tab_container.length > 7)
    {

        let new_tab_width = tab_holder.getBoundingClientRect().width / tab_container.length;

        for (let i in tab_container)
        {
    
            tab_container[i].style.width = new_tab_width + "px";
    
        };

    }

    console.log("resized")

}

function reorganise_tabs()
{

    redeclare_ids()

    redeclare_indexes()

    resize_tabs()

}

function open_tab()
{

    console.log("");

}

function close_tab(i)
{
    console.log(i)
    tab_container[i].remove();
    /*
    for (let j in tab_container)
    {

        console.log("iteration" + j)
        console.log(tab_container[j])

    }
    */
    tab_container.splice(i, 1);

    reorganise_tabs()

}