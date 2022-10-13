
let new_list=JSON.parse(localStorage.getItem('news'))
const url_string=window.location.search;
const urlParams=new URLSearchParams(url_string)
const url= urlParams.get('id')
alert(url)

// for(let i=0;i<new_list.length;i++)
// {
//     if(url==new_list[i].id)
//     {
//         document.getElementById("image").src=new_list[i].image;
//         document.getElementById("title").innerHTML=new_list[i].title;
//         document.getElementById("country").innerHTML=new_list[i].country;
//         document.getElementById("date").innerHTML=new_list[i].date;
//         document.getElementById("content").innerHTML=new_list[i].short_content;
//         document.getElementById("author").innerHTML=new_list[i].author;
//     }
// }

