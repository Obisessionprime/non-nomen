function light_it(selector)
{
    $(selector).hover(function()
    {
        console.log("dksjd")
        this.src = this.src.replace('dark', 'light');
    })
    $(selector).mouseleave(function()
    {
        this.src = this.src.replace('light', 'dark');
    })
}

$(document).ready(function()
{
    light_it('.make_light');
    $('.menu_ico').click(function()
    {
        $('.main').css("display", "none")
        $('.mini_navigation').css("display", "flex")
    })

    $('.search').click(function()
    {
        $('.search_form').toggle(true)
        console.log($('.search_form').css("display"))
        $('.search').toggle(false)
        $('.search_close').toggle(true)
    })
    
    $('.search_close').click(function()
    {
        $('.search_form').toggle(false)
        $('.search').toggle(true)
        $('.search_close').toggle(false)
    })
})