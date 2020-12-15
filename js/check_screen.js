function add_mini(selector)
{   
    let temp = Array.from($(selector));

    for (let i = 0; i < temp.length; i++)
    {
        if (temp[i].src.indexOf('_mini') == -1)
        {
            temp[i].src = temp[i].src.replace('.jpg', '_mini.jpg')
        }
    }
}

function remove_mini(selector)
{
    let temp = Array.from($(selector));

    for (let i = 0; i < temp.length; i++)
    {
        if (temp[i].src.indexOf('_mini') != -1)
        {
            temp[i].src = temp[i].src.replace('_mini.jpg', '.jpg')
        }
    }
}
