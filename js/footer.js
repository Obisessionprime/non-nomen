function createFooter()
{
    var footer = document.createElement("footer");
        footer.innerHTML = `<div class = location><h1>location</h1><p>Russian Federation</p><p>Moscow</p><p>South-West</p></div>
        <div class = links><h1>links</h1>
        <div class = "links_logo>
            <a href = "https://vk.com/hammersmarkk"><img class = "mini_logo make_light" src = "../src/img/footer/vk_dark_logo.png"></a>
            <a href = ""><img class = "mini_logo make_light" src = "../src/img/footer/inst_dark_logo.png"></a>
            <a href = ""><img class = "mini_logo make_light" src = "../src/img/footer/telegram_dark_logo.png"></a>
            <a href = ""><img class = "mini_logo make_light" src = "../src/img/footer/discord_dark_logo.png" ></a>
            <a href = ""><img class = "mini_logo make_light" src = "../src/img/footer/github_dark_logo.png" ></a>
            <a href = ""><img class = "mini_logo make_light" src = "../src/img/footer/linkedin_dark_logo.png" ></a>
        </div>
        </div>
        <div class = license><h1>license</h1><p><h3>2019</h3></p><p>all rights reserved</p></div>`
    footer.className = "foot";
    return footer;
}

$(document).ready(function(){document.querySelector('.mini_navigation').after(createFooter());})