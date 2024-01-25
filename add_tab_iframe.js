var tab_container = [];
const tab_holder = document.getElementById("tab_holder");

function add_tab()
{
    
    let new_tab = document.createElement("div");
    new_tab.setAttribute("class","tab");

    let tab_open_page = document.createElement("div");
    tab_open_page.onclick = open_tab;
    tab_open_page.setAttribute("class", "open_page_button");
    tab_open_page.textContent = "whadad"

    let tab_close_button = document.createElement("span");
    tab_close_button.onclick = close_tab;
    tab_close_button.setAttribute("class", "close_button");
    tab_close_button.innerHTML= "&times"

    tab_container.push(new_tab);
    tab_holder.appendChild(new_tab);
    new_tab.appendChild(tab_open_page);
    tab_open_page.appendChild(tab_close_button);
}

function open_tab()
{

    console.log("worky");

}

function close_tab()
{

    console.log("ZAMN")

}