let app=document.querySelector("app-main");
console.log(app);
// app.setAttribute("name","Sunit");

setTimeout(()=>{
    app.setAttribute("name",(Math.random() + 1).toString(36).substring(7));
},1000);