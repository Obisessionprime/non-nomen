function update_total()
{
    let prices = Array.from($('.product_price'));
    let total = 0;
    console.log(prices)
    for (let i = 0; i < prices.length; i++)
    {
        total += parseInt(prices[i].textContent)
    }

    $(".total_price").text(total.toString() + " ₽")
}

function reset(name)
{
    $('.product_row[prod="' + name + '"]').detach();
    update_total()
}
function change(digit, res)
{
    console.log(res)
    let price = $('.product_price[prod="' + res + '"]')
    let count = $('.count[prod="' + res + '"]')
    let val = parseInt(count.attr("value"))

    if (val == 1 && digit == -1)
    {
        return;
    }
    val += parseInt(digit)
    if (val < 0)
    {
        val = 0
    }
    count.attr("value", val);
    let price_one = parseInt(price.text()) / (val - digit)
    price.text((price_one*val).toString() + " ₽");
    update_total()
}

function get_mini_card(product)
{
    let card = document.createElement("div");
    console.log(product["image"])
    card.innerHTML = `<div class="product"><img class="product_img" src=` + product["image"] + `><div class="product_info">
                <div class="product_info_text">
                <div class="product_name">` + product["name"] + `</div>
                <div class="product_price" prod = "` + product["name"] + `">` + product["price"] + `</div>
                </div>
                <div class="buttons">    
                <input class="ch_count" type="button" value="-" onClick="change(-1, '`+ product["name"] +`');" ></input>
                <input class="count" id="amount" type="text" value="1" prod = "` + product["name"] + `"></input>
                <input class="ch_count" type="button" value="+" onClick="change(1, '`+ product["name"] +`');" ></input>
                </div>
            </div>   
            <div class="reset_button">
            <input class="ch_count" type="button" value="x" onClick="reset('`+ product["name"] +`');" ></input>
            </div>   
        </div>`
    card.className="product_row";
    card.setAttribute('prod', product["name"]);
    return card;
}

for (let i = 0; i < products.length; i++)
{
    document.querySelector('.products_list').append(get_mini_card(products["pr_" + (i + 1)]));
}

update_total()

