//let screen_height = window.screen.availHeight;
//let screen_width = window.screen.availWidth;

function add_tab(grid_height, grid_width, mine_number, username)
{

    console.log("pleaseeeee")

    console.log("close_height" + close_height)
    console.log("close_width" + close_width)

    console.log("game_height" + game_height)
    console.log("game_width" + game_space_width)

    console.log("tab_height" + tab_height)
    console.log("tab_width" + tab_width)

    let game_iframe = document.createElement("iframe")
    game_iframe.setAttribute("class","game_iframe");
    game_iframe.style.height = game_height + "px";
    game_iframe.style.width = game_space_width + "px";

    let new_tab = document.createElement("div");
    new_tab.setAttribute("class","tab");
    new_tab.style.height = tab_height + "px";
    new_tab.style.width = tab_width + "px";

    let open_page_button = document.createElement("div");
    open_page_button.onclick = open_tab;
    open_page_button.setAttribute("class", "open_page_button");
    open_page_button.textContent = "tab_open_page" + (tab_container.length + 1);
    open_page_button.style.height = tab_height + "px";
    open_page_button.style.width = tab_width + "px";

    let close_button = document.createElement("span");
    close_button.onclick = close_tab;
    close_button.setAttribute("class", "close_button");
    close_button.innerHTML= "&times";
    close_button.style.height = close_height + "px";
    close_button.style.width = close_width + "px";

    tab_container.push(new_tab);
    tab_holder.appendChild(new_tab);
    new_tab.appendChild(game_iframe);
    new_tab.appendChild(open_page_button);
    open_page_button.appendChild(close_button);

    for (let i in tab_container) /*(let i = 0; i < tab_container.length; i++)*/
    {

        tab_container[i].setAttribute("id", "tab_" + i);


    };

    if (tab_container.length > 7)
    {

        resize_tabs();

    }

}

function resize_tabs()
{

    new_tab_width = game_space_width / tab_container.length;

    for (let i in tab_container) /*(let i = 0; i < tab_container.length; i++)*/
    {

        tab_container[i].style.width = new_tab_width + "px";

    };
}

function open_tab()
{

    console.log("worky");

}

function close_tab()
{

    console.log("ZAMN");

}