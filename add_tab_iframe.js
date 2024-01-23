var tab_container = []
const tab_holder = document.getElementById("tab_holder")

function add_tab()
{
    let new_tab = document.createElement("button");
    //new_tab.classlist.add("tab"); other way to add class
    new_tab.onclick = open_tab;
    new_tab.setAttribute("class", "tab");

    let tab_close_button = document.createElement("span");
    tab_close_button.onclick = close_tab;
    tab_close_button.setAttribute("class", "close_button");
    tab_close_button.innerHTML("&times");

    tab_container.push(new_tab);
    tab_holder.appendChild(new_tab);
    new_tab.appendChild(tab_close_button);
}

function open_tab()
{

    console.log("worky");

}

function close_tab()
{



}