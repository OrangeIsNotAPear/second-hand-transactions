/* 留言框部分 */
// 将事件绑定在父元素ul上
$("ul.card_ul").click(function(e){
    e.preventDefault();
    //用e.target代替this获得目标元素
    var $a=$(e.target);
    //只有$a有data-toggle属性且属性值为tab时
    if($a.is("[data-toggle=tab]")==true){
      //才给当前$a的爹加active
      $a.parent().addClass("active")
      //return $a.parent()
      //然后给$a的爹的其余兄弟们都去掉active
      .siblings().removeClass("active");
    }
    $("div.content1").addClass("active").siblings().removeClass("active");
  })
