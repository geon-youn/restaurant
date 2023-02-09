import Logo from "../assets/logo.png";

export function get_page() {
    const header = document.createElement("header");

    const img = new Image();
    img.src = Logo;
    header.appendChild(img);

    const h1 = document.createElement("h1");
    h1.textContent = "One of Canada's most research-intensitive restaurants";
    header.appendChild(h1);

    return header;
};
