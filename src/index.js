import * as home from "./home";
import * as contact from "./contact";
import * as menu from "./menu";

const _content = document.querySelector("#content");
let _src = "home";

function context_switch_buttons() {
    const div = document.createElement("div");

    const home_btn = document.createElement("button");
    home_btn.textContent = "Home";
    home_btn.addEventListener("click", (e) => {
        _src = "home";
        load_page();
    });

    const contact_btn = document.createElement("button");
    contact_btn.textContent = "Contact";
    contact_btn.addEventListener("click", (e) => {
        _src = "contact";
        load_page();
    });

    const menu_btn = document.createElement("button");
    menu_btn.textContent = "Menu";
    menu_btn.addEventListener("click", (e) => {
        _src = "menu";
        load_page();
    });

    div.append(home_btn, contact_btn, menu_btn);
    return div;
}

function load_page() {
    _content.textContent = "";

    switch (_src) {
        case "home":
            _content.appendChild(home.get_page());
            break;
        case "menu":
            _content.appendChild(menu.get_page());
            break;
        case "contact":
            _content.appendChild(contact.get_page());
            break;
    }

    _content.appendChild(context_switch_buttons());
}

load_page();
