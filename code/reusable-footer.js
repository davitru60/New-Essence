function createFooter(){
    let footer = document.createElement("footer");
    footer.innerHTML=`
    <h1> FOOTER</h1>
    `;

    return footer;
}
document.body.appendChild(createFooter());