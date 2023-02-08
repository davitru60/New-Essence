function createHeader() {
    let header = document.createElement("header");
    header.innerHTML = `
    <img src="/Imagenes/NELogo.png">
    <nav>
        <a href="#"> HOME</a>
        <a href="#"> TIENDA</a>
        <a href="#"> BLOG</a>
    </nav>
    `;
    return header;
}

document.body.appendChild(createHeader());

