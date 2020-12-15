let navigation = `<ul class = "nav_links">
    <li><a href="catalog.html">каталог</a></li>
    <li><a href="about.html">о нас</a></li>
    <li><a href="contacts.html">контакты</a></li>
    <li><form class="search_form"><input type = "text" class="search_field"></form></li>
    <li><a class="search_in"><img src = "../src/img/header/loop_dark_ico.png" class = "make_light search"><img src = "../src/img/header/close_dark_ico.png" class = "make_light search_close"></a></li>
    <li><a href = "cart.html"><img src = "../src/img/header/to_buy_dark.png" class = "make_light to_buy"></a><li>
</ul>`

let mini_menu = `<div class = "drop">
<div class = "drop_btn"><a href = "#"><img class = "menu_ico make_light" src='../src/img/header/menu_ico_dark.png'></a></div>`

function define_header()
{
    let head = '<a href = "index.html"><img src = "../src/img/header/logo.png" class = "logo"></a>\n'
    head += '<div>'
    head += mini_menu;
    head += '<nav class = "bigger_menu">' + navigation + '</nav>';
    return head;
}

function createHeader()
{
    var header = document.createElement("header");
        header.innerHTML = define_header() + "</div>";
        header.className = "head";
        return header;
}

document.querySelector('.main').append(createHeader());

$('.menu_ico').hover(function()
{
    this.src = this.src.replace('dark', 'light');
})
$('.menu_ico').mouseleave(function()
{
    this.src = this.src.replace('light', 'dark');
})

$(document).ready(
    function()
    {
        var mini = document.createElement("div");
            mini.innerHTML = `<a href=""><img class = "close_icon make_light" src = "../src/img/header/close_dark_ico.png"></a>
            <ul class = "submenu">
                <li>
                    <form class="search_form"><input type = "text" class="search_field"></form>
                    <div class="search_in"><img src = "../src/img/header/loop_dark_ico.png" class = "make_light search"><img src = "../src/img/header/close_dark_ico.png" class = "make_light search_close"></div>
                </li>
                <li class="submenu_row"><a href="catalog.html">каталог</a></li>
                <li class="submenu_row"><a href="about.html">о нас</a></li>
                <li class="submenu_row"><a href="contacts.html">контакты</a></li>
                <li class="submenu_row"><a href="cart.html">корзина</a></li>
            </ul>`
            mini.className = "mini_navigation"
            document.querySelector('.main').after(mini);
    }
)