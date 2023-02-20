function createHeader() {
    let header = document.createElement("header");
    header.innerHTML = `
    <img src="/images/NELogo.png">
    <nav>
        <a href="./main.html"> HOME</a>
        <a href="./market.html"> TIENDA</a>
        <a href="./blog.html"> BLOG</a>
        <a href="./log-in.html"> 
            <img src="/images/log-in-button.png" id="log-in-btn">
        </a>

        <a href="./register.html"> 
            <img src="/images/register-button.png" id="register-button">
        </a>
    </nav>
    
    `;

    
    return header;
}

document.body.appendChild(createHeader());


