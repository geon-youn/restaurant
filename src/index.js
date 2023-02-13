import "./index.css";
import * as home from "./home";
import * as contact from "./contact";
import * as menu from "./menu";
import Logo from "../assets/logo.png";

const _content = document.querySelector("#content");
let _src = "home";

function main_header() {
    const main = document.createElement("div");
    main.classList.add("header");

    const img = new Image();
    img.src = Logo;

    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.textContent = "McDonald's Restaurant";
    const h2 = document.createElement("h2");
    h2.textContent = "One of the Most Research-Intensive Restaurants";
    div.append(h1, h2);
    main.append(img, div);

    return main;
}

function context_switch_buttons() {
    const div = document.createElement("div");
    div.classList.add("context-switch-buttons");

    const home_btn = document.createElement("button");
    home_btn.textContent = "HOME";
    home_btn.addEventListener("click", (e) => {
        _src = "home";
        load_page();
    });

    const contact_btn = document.createElement("button");
    contact_btn.textContent = "CONTACT";
    contact_btn.addEventListener("click", (e) => {
        _src = "contact";
        load_page();
    });

    const menu_btn = document.createElement("button");
    menu_btn.textContent = "MENU";
    menu_btn.addEventListener("click", (e) => {
        _src = "menu";
        load_page();
    });

    switch (_src) {
        case "home":
            home_btn.classList.add("active");
            break;
        case "menu":
            menu_btn.classList.add("active");
            break;
        case "contact":
            contact_btn.classList.add("active");
            break;
    }

    div.append(menu_btn, home_btn, contact_btn);
    return div;
}

function load_page() {
    _content.textContent = "";

    _content.append(main_header());
    _content.appendChild(context_switch_buttons());

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
}

load_page();
