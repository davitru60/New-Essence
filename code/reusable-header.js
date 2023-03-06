function createHeader() {
    let header = document.createElement("header");
    header.innerHTML = `


    <a href="index.html"> 
        <img src="./images/Logo_2.png" id="logo-1">
    </a>
    <nav>
        <a href="index.html" class="menu-option op1"> HOME</a>
        <a href="../html-files/market.html" class="menu-option op2"> TIENDA</a>
        <a href="../html-files/blog.html" class="menu-option op3"> BLOG</a>
        <a href="../html-files/log-in.html" class="menu-option op4"> 
            <img src="../images/log-in-button.png" id="log-in-btn">
        </a>

        <a href="../html-files/register.html"  class="menu-option op5"> 
            <img src="../images/register-button.png" id="register-button">
        </a>
    </nav>
    
    `;

    return header;
}


document.body.appendChild(createHeader());


