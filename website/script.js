/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

function signOut()
{
    window.location.replace("/map.html");
}

function signedIn()
{
    if(user)
    {
        return true;
    }
    else
    {
        return false;
    }
}