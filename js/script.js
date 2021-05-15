document.addEventListener("DOMContentLoaded", function () {
  //gornji gumb - gornji red
  $("#button_top").on("click", function () {
    // kloniranje, postavljanje na kraj i sakrivanje elementa
    var $img = $("#top_row").children().eq(0).clone().hide();
    $("#top_row").append($img);
    $("#top_row").children().eq(0).hide();
    // brisanje prvog i prikazivanje skrivenog elementa
    var list = document.getElementById("top_row");
    list.removeChild(list.children[0]);
    $("#top_row").children().eq(4).show("slow");
    /* 
    izračun širine slike, funkcionalno ali nije potrebno
    var imgcontainer = document.querySelector("#top_row");
    var image = imgcontainer.querySelector("#top_row > img");
    var movewidth = image.clientWidth;
    console.log(movewidth); 
    */
  });
  // gornji gumb - donji red
  $("#button_top").on("click", function () {
    // kloniranje, postavljanje na kraj i sakrivanje elementa
    var $img = $("#bottom_row").children().eq(0).clone().hide();
    $("#bottom_row").append($img);
    $("#bottom_row").children().eq(0).hide();
    // brisanje prvog i prikazivanje zadnjeg elementa
    var list = document.getElementById("bottom_row");
    list.removeChild(list.children[0]);
    $("#bottom_row").children().eq(3).show("slow");
  });
  // donji gumb - gornji red
  $("#button_bottom").on("click", function () {
    // kloniranje, postavljanje na početak i sakrivanje elementa
    var $img = $("#top_row").children().eq(4).clone().hide();
    $("#top_row").prepend($img);
    $("#top_row").children().eq(5).hide();
    // brisanje zadnjeg i prikazivanje prvog elementa
    var list = document.getElementById("top_row");
    list.removeChild(list.children[5]);
    $("#top_row").children().eq(0).show("slow");
  });
  // donji gumb - donji red
  $("#button_bottom").on("click", function () {
    // kloniranje, postavljanje na početak i sakrivanje elementa
    var $img = $("#bottom_row").children().eq(3).clone().hide();
    $("#bottom_row").prepend($img);
    $("#bottom_row").children().eq(4).hide();
    // brisanje zadnjeg i prikazivanje prvog elementa
    var list = document.getElementById("bottom_row");
    list.removeChild(list.children[4]);
    $("#bottom_row").children().eq(0).show("slow");
  });
});
