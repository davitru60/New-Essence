function createHeader() {
    let header = document.createElement("header");
    header.innerHTML = `
    <img src="/Imagenes/NELogo.png">
    <nav>
        <a href="./main.html"> HOME</a>
        <a href="./market.html"> TIENDA</a>
        <a href="./blog.html"> BLOG</a>
    </nav>
    `;
    return header;
}

document.body.appendChild(createHeader());

