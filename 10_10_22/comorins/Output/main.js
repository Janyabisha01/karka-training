let news={};
function add(key,value,index=null){
    if(key=="news_type" || key=="category")
    {
        if(!news[key])
        {
            news[key]=[];
        }
        news[key][index]=value;
    }else{
        news[key]=value;
    }
//     console.log(news)
}
function display(){
    document.getElementById("datas").innerHTML=JSON.stringify(news);
    if(!localStorage.getItem('news'))
    {
        localStorage.setItem('news',JSON.stringify([]))
    }
    let newscontent=JSON.parse(localStorage.getItem('news'));
    newscontent.push(news);
    localStorage.setItem('news',JSON.stringify(newscontent));
    newsdisplay()
}

function newsdisplay(){
    let element=""
    let newsindex=JSON.parse(localStorage.getItem('news'))
    console.log(newsindex)
    for(let i=0;i<newsindex.length;i++){
        element=element+"<li> <a href='view.html?id="+newsindex[i].id +"'target='_blank'>"+newsindex[i].id+"</a></li>"
    }
    document.getElementById("newslist").innerHTML=element;
}
newsdisplay()



