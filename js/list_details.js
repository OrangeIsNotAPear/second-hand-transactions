(function(){
    var as=document.querySelectorAll("#card_ul>li[data-toggle=card_ul]")
    var i=10;
    for(var a of as){
        a.onclick=function(){
            var id=this.getAttribute("data-target");
            var div=document.getElementById(id);
            div.style.zIndex=i++;
            div.style.background = "#0a8494";
            div.style.color = "white";
        }
    }
})()