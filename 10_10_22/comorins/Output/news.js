// taking the localstorage values and assinging a variable
let new_list=JSON.parse(localStorage.getItem('news'))
// grtting the location of url
const url_string=window.location.search;
// creating new urlsearchparams
const urlParams=new URLSearchParams(url_string)
// passing the id through url
const url= urlParams.get('id')

// looping the values in the localstorage with id
for(let i=0;i<new_list.length;i++)
{
    if(url==new_list[i].id)
    {
        document.getElementById("image").src=new_list[i].image;
        document.getElementById("title").innerHTML=new_list[i].title;
        document.getElementById("date").innerHTML=new_list[i].date;
        document.getElementById("author").innerHTML=new_list[i].author;
        document.getElementById("content").innerHTML=new_list[i].short_content;
    }
}
if(!localStorage.getItem("bookmarks")){
    localStorage.setItem("bookmarks",JSON.stringify([]))
}
 let bookmarks=JSON.parse(localStorage.getItem("bookmarks"))
    function add(){
        for(let i=0;i<new_list.length;i++){
            if(url==new_list[i].id){
                bookmarks.push(new_list[i]);
            }
        }
        localStorage.setItem("bookmarks",JSON.stringify(bookmarks))
    }
    

    
 
