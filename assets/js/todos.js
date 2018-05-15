
$("ul").on("click", "li", function(){
  $(this).toggleClass("complete");
})

$("ul").on("click", "span", function(e){
  $(this).parent().fadeOut(400, function(){
    $(this).remove();
  });
  e.stopPropagation();
})

$("input").keypress(function(e){
  if (e.which === 13){
    let todoText = $(this).val();
    $(this).val("");
    $("ul").prepend(`<li><span><i class="fa fa-trash" aria-hidden="true"></i></span>${todoText}
    </li>`);
  };
})

$(".fa-plus").click(function(){
  $("input").fadeToggle(250);
})
