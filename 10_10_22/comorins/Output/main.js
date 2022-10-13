let news=[
    {
id:1,
title:"Iran protester: 'You know that you might never come back'",
country:"Iran",
catagory:"General",
short_content:"",
news_type:"National",
author:"By Dawid Brown",
image:"images/protest.webp",
date:"09.10.2022",
},
{
id:2,
title:"Elon Musk denies he spoke to Putin about Ukraine war",
country:"Russia",
catagory:"General",
short_content:"",
news_type:"National",
author:"By Dawid Brown",
image:"images/elon.webp",
date:"10.10.2022",
},
{
id:3,
title:"China's Communist Party Congress: A really simple guide",
country:"China",
catagory:"General",
short_content:"",
news_type:"International",
author:"By Dawid Brown",
image:"images/china.webp",
date:"12.10.2022",
},
{
id:4,
title:"Kerala murders: Two women killed in suspected human sacrifice",
country:"India",
catagory:"General",
short_content:"",
news_type:"National",
author:"By Dawid Brown",
image:"images/kerala.webp",
date:"08.10.2022",
},
{
id:5,
title:"Karnataka: Female Dalit coffee workers accuse boss of locking them up",
country:"India",
catagory:"General",
short_content:"",
news_type:"National",
author:"By Dawid Brown",
image:"images/coffee.webp",
date:"11.10.2022",
},
{
id:6,
title:"Recession risk rises as economy unexpectedly shrinks",
country:"UK",
catagory:"Business",
short_content:"",
news_type:"International",
author:"By Imran",
image:"images/recession.webp",
date:"10.10.2022",
},
{
id:7,
title:"Uber and Lyft shares slump on US 'gig' economy plan",
country:"USA",
catagory:"Business",
short_content:"",
news_type:"National",
author:"By Imran",
image:"images/uber.webp",
date:"12.10.2022",
},
{
id:8,
title:"Record numbers not looking for work due to long-term illness",
country:"UK",
catagory:"Business",
short_content:"",
news_type:"National",
author:"By Imran",
image:"images/record.webp",
date:"08.10.2022",
},
{
id:9,
title:"Asia chipmaker shares slide after US curbs on China",
country:"India",
catagory:"Business",
short_content:"",
news_type:"International",
author:"By Imran",
image:"images/chipmaker.webp",
date:"11.10.2022",
},
{
id:10,
title:"Deontay Wilder wants to fight Anthony Joshua in Africa",
country:"Africa",
catagory:"Sports",
short_content:"",
news_type:"National",
author:"By Lora",
image:"images/deontay.jpg",
date:"08.10.2022",
},
{
id:11,
title:"England in Australia: Dawid Malan and Sam Curran shine to help seal T20 series",
country:"England",
catagory:"Sports",
short_content:"",
news_type:"International",
author:"By Lora",
image:"images/cricket.jpg",
date:"10.10.2022",
},
{
id:12,
title:"Manchester United: Sir Jim Ratcliffe told by Glazers club not for sale",
country:"USA",
catagory:"Sports",
short_content:"",
news_type:"International",
author:"By Lora",
image:"images/manchester.jpg",
date:"09.10.2022",
},
{
id:13,
title:"ATP and Davis Cup reach agreement as Tennis Australia finalises mixed team event plans",
country:"Australia",
catagory:"Sports",
short_content:"",
news_type:"National",
author:"By Lora",
image:"images/tennis.jpg",
date:"12.10.2022",
},
{
id:14,
title:"Xbox v PlayStation: Giants clash over Call of Duty",
country:"US",
catagory:"Technology",
short_content:"",
news_type:"Internatioanl",
author:"By John",
image:"images/xbox.webp",
date:"08.10.2022",
},
{
id:15,
title:"Mark Zuckerberg reveals new Quest Pro VR headset",
country:"UK",
catagory:"Technology",
short_content:"",
news_type:"Internatioanl",
author:"By John",
image:"images/mark.webp",
date:"12.10.2022",
},
{
id:16,
title:"Pacific Island Fiji aims for a high-tech future",
country:"North America",
catagory:"Technology",
short_content:"",
news_type:"National",
author:"By John",
image:"images/pacific.jpg",
date:"!0.10.2022",
},
{
id:17,
title:"China's electric car market is booming but can it last?",
country:"China",
catagory:"Technology",
short_content:"",
news_type:"National",
author:"By John",
image:"images/cars.jpg",
date:"08.10.2022",
},
{
id:18,
title:"Bafta Scotland awards: TV drama Vigil leads nominations",
country:"Scotland",
catagory:"Entertainment",
short_content:"",
news_type:"National",
author:"By Afra Fil",
image:"images/bafta.webp",
date:"08.10.2022",
},
{
id:19,
title:"Netflix signs up to ratings body Barb",
country:"USA",
catagory:"Entertainment",
short_content:"",
news_type:"International",
author:"By Afra Fil",
image:"images/netflix.webp",
date:"11.10.2022",
},
{
id:20,
title:"Dancing on Ice 2023: The Wanted's Siva Kaneswaran completes line-up",
country:"Europe",
catagory:"Entertainment",
short_content:"",
news_type:"National",
author:"By Afra Fil",
image:"images/dancing.webp",
date:"12.10.2022",
},
{
id:21,
title:"Love Island: Maya Jama to replace Laura Whitmore as host",
country:"India",
catagory:"Entertainment",
short_content:"",
news_type:"National",
author:"By Afra Fil",
image:"images/mayajama.webp",
date:"09.10.2022",
},

]    
news.forEach((element ,i)=> {
    const main=document.querySelector(".row")
    console.log(main);
    const col=document.createElement('col-3');
    col.classList='col-3 ';
    const movieCard=`
                <a href="news.html?id="${news[i].id}"target="_blank">
                <img src=${news[i].image}>
                <div class="info">
                    <h3>${news[i].title}</h3>
                </div>
                </a>
               
    `
    col.innerHTML += movieCard;
    row.appendChild(col);
    });

    // function namedisplay(){
    //     let element=""
    //     if(!localStorage.getItem('news'))
    // {
    //     localStorage.setItem('news',JSON.stringify(news))
    // }
    //     let newsindex=JSON.parse(localStorage.getItem('news'))
    //     console.log(newsindex)
    //     for(let i=0;i<newsindex.length;i++){
    //         element=element+"<a href='news.html?id="+newsindex[i].id +"'target='_blank'>"<"img src=+newsindex[i].image+>"</a>"
    //     }
    //     document.getElementById("newlist").innerHTML=element
    // }
    // namedisplay()
    


    // +newsindex[i].id+

    // if(!localStorage.getItem('news'))
    // {
    //     localStorage.setItem('news',JSON.stringify(news))
    // }
    // let general=JSON.parse(localStorage.getItem('news'));
    // let element="";
    // for(let i=0;i<general.length;i++)
    // {
    //     let category=general[i].category
    //     if(category=="General")
    //     {
    //         element+='<div class="card mt-4 col-4 p-0"><img id="url" src="'+general[i].image+'" class="card-img-top" alt="..."><div class="card-body"><a class="card-text font-weight-bold" id="content" '+general[i].id+'>'+general[i].title+'</a></div><div class="card-footer bg-white border-0"><small class="text-muted">'+general[i].date+'</small  ></div></div>'
    //         document.getElementById("section").innerHTML=element;
    //     }
    // }



// function general(){
       
//     if(!localStorage.getItem('news'))
// {
//     localStorage.setItem('news',JSON.stringify(news))
// }
// let newscontent=JSON.parse(localStorage.getItem('news'));
// console.log(newscontent)
//             let element="";

//             for(let i=0;i<newscontent.length;i++)
//             {
//                 let catagory=newscontent[i].catagory.toLowerCase(); 
//                 if(catagory=="General")
//                 {
//                     element+='  <div class="card mt-4 col-4 p-0"><img id="url" src="'+newscontent[i].image+'" class="card-img-top" alt="..."><div class="card-body"><a class="card-text font-weight-bold" id="content" '+newscontent[i].id+'>'+newscontent[i].title+'</a></div><div class="card-footer bg-white border-0"><small class="text-muted">'+newscontent[i].date+'</small  ></div></div>'
//                     document.getElementById("section").innerHTML=element
//                 }
//             }
//         }
//         general()
    //    function home(){
    //     for(let i=0;i<dataa.length;i++){
    //     catagery=dataa[i].catagery.toLowerCase();
    //     if(catagery=="home"){
    //         // element+='<div class="card col-4 content pl-0" style="width: 18rem;"><img class="img" id="url" src="'+data[i].img_url+'" class="card-img-top" alt="..."><div class="card-body"><a class="card-text font-weight-bold" id="content" href="view.html?id='+data[i].id+'">'+data[i].Title+'</a><p class="card-text"><small class="text-muted">'+data[i].date+'</small></p></div></div>';
    //         element+='  <div class="card mt-4 col-4 p-0"><img id="url" src="'+dataa[i].img_url+'" class="card-img-top" alt="..."><div class="card-body"><a class="card-text font-weight-bold" id="content" href="view.html?id='+dataa[i].id+'">'+dataa[i].Title+'</a></div><div class="card-footer bg-white border-0"><small class="text-muted">'+dataa[i].date+'</small></div></div>'
    //         document.getElementById("sec").innerHTML=element
    //     }
    //     }  
        
    // let news={};
// function add(key,value,index=null){
//     if(key=="news_type" || key=="category")
//     {
//         if(!news[key])
//         {
//             news[key]=[];
//         }
//         news[key][index]=value;
//     }else{
//         news[key]=value;
//     }
// //     console.log(news)
// }
// function display(){
//     document.getElementById("datas").innerHTML=JSON.stringify(news);
//     if(!localStorage.getItem('news'))
//     {
//         localStorage.setItem('news',JSON.stringify([]))
//     }
//     let newscontent=JSON.parse(localStorage.getItem('news'));
//     newscontent.push(news);
//     localStorage.setItem('news',JSON.stringify(newscontent));
//     newsdisplay()
// }

// function newsdisplay(){
//     let element=""
//     let newsindex=JSON.parse(localStorage.getItem('news'))
//     console.log(newsindex)
//     for(let i=0;i<newsindex.length;i++){
//         element=element+"<li> <a href='view.html?id="+newsindex[i].id +"'target='_blank'>"+newsindex[i].id+"</a></li>"
//     }
//     document.getElementById("newslist").innerHTML=element;
// }
// newsdisplay()





