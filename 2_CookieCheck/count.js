// Function to get a cookie by name
function getCookie(name){
    let cookieArray = document.cookie.split(";")
    console.log("cookieArray", cookieArray)
    for (let i=0; i<cookieArray.length; i++){
        let pair = cookieArray[i].split("=")
        if (name === pair[0]){
            return pair[1]
        }
    }
    return null;
}

function setCookies(name, value){
    document.cookie = name + "=" + (value || "")
}

let views = getCookie("page_views")
if(views){
    views = parseInt(views)+1
    setCookies("page_views", views)
}else{
    views = 1
    setCookies("page_views", views)
}
document.getElementById("viewCount").textContent = views
