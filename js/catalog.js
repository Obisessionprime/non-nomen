function get_card(product)
{
    let card = document.createElement("div");
    card.innerHTML = `<div class = "card"><img class="card_img" src="` + product["image"] + `"><div class="other_info"><div class="card_text"></div>
        <div class="product_name">` + product["name"] + `</div>
                <div class="colors"><img src="../src/img/products/color/golden_color.png"><img src="../src/img/products/color/rose_gold_color.png"><img src="../src/img/products/color/black_color.png"></div>
                <div class="price_and_buy"><span class="product_price">`+ product["price"]+`</span>
                    <img class="add_to make_light" src="../src/img/header/to_buy_dark.png">
                </div>
            </div>
        </div>
    </div>`
    card.className="card_wrapper " + product["cathegory"];
    return card;
}

for (let i = 0; i < products.length; i++)
{
    document.querySelector('.catalog_map').append(get_card(products["pr_" + (i + 1)]));
}

function del_on()
{
    console.log("a");
    let btn_class = $(this).attr("class");
    $(this).attr("class", "filtered_btn");
}

$(document).ready(function()
{
    $('.filtered_btn').click(function(){
        if ($(this).attr("class").indexOf("on") == -1)
        {
            $(this).attr("class", $(this).attr("class") + " on");

            if ($(this).text() == "Часы" && $("div").is(".watch"))
            {
                $('.watch').attr("class", $('.watch').attr("class") + " on_item");
            }
            else if ($(this).text() == "Кольца" && $("div").is(".rings"))
            {
                $('.rings').attr("class", $('.rings').attr("class") + " on_item");
            }
            else if ($(this).text() == "Серьги" && $("div").is(".earrings"))
            {
                $('.earrings').attr("class", $('.earrings').attr("class") + " on_item");
            }
            else if ($(this).text() == "Другое" && $("div").is(".other"))
            {
                $('.other').attr("class", $('.other').attr("class") + " on_item");
            }
            $('.card_wrapper').css("display", "none")
            $('.on_item').css("display", "flex");
        }
        else
        {
            $(this).attr("class", $(this).attr("class").replace(" on", ""));
            if ($(this).text() == "Часы" && $("div").is(".watch"))
            {
                $(".watch").attr("class", $(".watch").attr("class").replace(" on_item", ""));
            }
            else if ($(this).text() == "Кольца" && $("div").is(".rings"))
            {
                $(".rings").attr("class", $(".rings").attr("class").replace(" on_item", ""));
            }
            else if ($(this).text() == "Серьги" && $("div").is(".earrings"))
            {
                $(".earrings").attr("class", $(".earrings").attr("class").replace(" on_item", ""));
            }
            else if ($(this).text() == "Другое" && $("div").is(".other"))
            {
                $(".other").attr("class", $(".other").attr("class").replace(" on_item", ""));
            }
            if (!$("div").is(".on_item"))
            {
                $('.card_wrapper').css("display", "flex")
            }
            else
            {
                $('.card_wrapper').css("display", "none")
            }
            $('.on_item').css("display", "flex");
        }
    })
})