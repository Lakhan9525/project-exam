let getdata=async(url)=>{
    try{
        const res=await fetch(url);
        const data=await res.json();
        return data;
    }
    catch(err){
        console.log(err);
    }
}
const append=(data,conatiner)=>{
    conatiner.innerHTML=null;


    data.forEach(ele => {
        let box=document.createElement("div");
        box.setAttribute("id","box")
        box.addEventListener("click",function(){
            Shower(data);
        })
            
        
        let image=document.createElement("img")
        image.src=ele.urlToImage;
        image.setAttribute("id","image")
        let t=document.createElement("h2");
        t.innerText=ele.title;
        let desc=document.createElement("p")
        desc.innerText=ele.description

        box.append(image,t,desc)
        conatiner.append(box);

        
    });
}
let Shower=(x)=>{
    window.location.href="news.html";
    localStorage.setItem("news",JSON.stringify(x))
}



export {getdata,append}