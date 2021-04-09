let text = "#nText";

$(".agregar").on("click", function (event) {
  event.preventDefault();
  $(".Lista").append(`<div> 
        <li class = "lis"> 
            <p class = "itemShop" style="color:gray">${$("#nText").val()}</p>
            <button id="checkButton" style="color:green"> check </button>
            <button id="deleteButton" style="color:red" > delete </button>
        </li> </div>`);
});

$(document).on("click", "#checkButton", function (event) {
  event.preventDefault();
  $(this).parent().toggleClass("chec");
});

$(document).on("click", "#deleteButton", function (event) {
  event.preventDefault();
  $(this).parent().remove();
});
