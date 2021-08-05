function toggleScrollBar()
{
    var checkbox = document.getElementById('nav-toggle').checked;
    if(checkbox)
    {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
}

function hideNav()
{
    document.getElementById('nav-toggle').checked = false;
    document.body.style.overflow = "auto";
}