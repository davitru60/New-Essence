function createFooter(){
    let footer = document.createElement("footer");
    footer.innerHTML=`
        <div id="creator-information">
            <span> Cliente: Elena Rodriguez Calderón</span>
            <span> Desarrollador: David Trujillo Carrero</span>
        </div>

        <div id="social-media">
            <a href="https://www.instagram.com/" class="foot-tooltip instagram"> 
                <img src="../images/social-media/Instagram_icon.png.webp" id="social-media-icon">
            </a>
            <a href="https://es-la.facebook.com/" class="foot-tooltip facebook"> 
                <img src="/images/social-media/facebook-logo.png" id="social-media-icon">
            </a>

            <a href="https://twitter.com/?lang=es" class="foot-tooltip twitter"> 
                <img src="/images/social-media/twitter-icom.webp" id="social-media-icon">
            </a>

            <a href="mailto:newessence@example.com" class="foot-tooltip outlook"> 
                <img src="/images/social-media/outlook-icon.png" class="outlook-icon">
            </a>
        </div>

        <img id="logo-2" src="/images/NELogo.png">
    `;

    return footer;
}
document.body.appendChild(createFooter());