function createHeader() {
    let header = document.createElement("header");
    header.innerHTML = `
    <img src="/Imagenes/NELogo.png">
    <nav>
        <a href="./main.html"> HOME</a>
        <a href="./market.html"> TIENDA</a>
        <a href="./blog.html"> BLOG</a>
        <a href="./log-in.html"> 
            <img src="/Imagenes/log-in-button.png" id="log-in-btn">
        </a>

        <a href="./register.html"> 
            <img src="/Imagenes/register-button.png" id="register-button">
        </a>
    </nav>
    
    `;

    
    return header;
}

document.body.appendChild(createHeader());


