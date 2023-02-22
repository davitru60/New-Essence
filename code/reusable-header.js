function createHeader() {
    let header = document.createElement("header");
    header.innerHTML = `


    <a href="./main.html"> 
        <img src="/images/Logo_2.png" id="logo-1">
    </a>
    <nav>
        <a href="./main.html" class="menu-option op1"> HOME</a>
        <a href="./market.html" class="menu-option op2"> TIENDA</a>
        <a href="./blog.html" class="menu-option op3"> BLOG</a>
        <a href="./log-in.html" class="menu-option op4"> 
            <img src="/images/log-in-button.png" id="log-in-btn">
        </a>

        <a href="./register.html"  class="menu-option op5"> 
            <img src="/images/register-button.png" id="register-button">
        </a>
    </nav>
    
    `;

    
    return header;
}

document.body.appendChild(createHeader());


