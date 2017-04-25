$(document).ready(function() {

  $("li").click(function(){
    $(this).next().slideToggle();
  });

  $("button#show").click(function(){
    $("img").show("hidden");

    // $("img").addClass("hidden");

  });

  $("button#show").click(function(){
    $("img").hide();
  });

  $("button#add").click(function() {
    $("body").append("<img src= \"img/download.jpeg\">");
  });


  // $(".clickable#1").click(function() {
  //   $("#java1").slideToggle();
  // });
  // $(".clickable#2").click(function() {
  //   $("#oper2").slideToggle();
  // });
  // $(".clickable#3").click(function() {
  //   $("#var3").slideToggle();
  // });
  // $(".clickable#4").click(function() {
  //   $("#met4").slideToggle();
  // });
  // $(".clickable#5").click(function() {
  //   $("#fun5").slideToggle();
  // });

  // var ids = ["java1", "oper2"];
  // var idP = ["java1", "oper2"];
  // for (var i = 0; i < ids.length; i++) {
  //   console.log(".clickable#"+ids[i]);
  //   var str = ""+ids[i];
  //   console.log(str);
  //   console.log(idP[i]);
  //   if (str===idP[i]) {
  //     $("#"+str).click(function(){
  //       $(idP[i]).slideToggle();
  //       });
  //     }
  //   };
  });
