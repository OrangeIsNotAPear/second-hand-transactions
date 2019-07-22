$(function(){
    $.ajax({
        url:"header.html",
        type:"",
        success:function(result){
            console.log(result);
            $(result).replaceAll("#header");
            $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head");
        }
    })
})