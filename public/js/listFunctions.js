
function hideItem() {
$('.item').hide();
}

function toggleNewItemForm() {
if($("#newItemDisplay").is(":visible")){$("#newItemDisplay").fadeOut();}
else{$('#newItemDisplay').fadeIn();}

}


function toggleSettings(){
if($("#remove").is(":visible")){$("#remove").fadeOut();}
else{$("#remove").fadeIn();}
}

function toggleSuggestedItems(){
alert("The milk has gone bad! please buy a new one before due day!");
if($("#suggestedContainer").is(":visible"))
  {
    $("#suggestedContainer").fadeOut();
    $(".suggestedItems").fadeOut();
  }
else
  {
    $("#suggestedContainer").fadeIn();
    $(".suggestedItems").fadeIn();
  }

}

$( document ).ready(function() {
  initializePage();
  // $("#newItemForm").submit(function(e) {
  //   e.preventDefault();
  //   alert("The item has been added");
  //   //app.get('/add', add.addItem);
  // });
  $("#remove").click(function(e) {
    console.log('click the remove');
    e.preventDefault();

  });

  $("#newLinkForm").submit(function(e) {
    e.preventDefault();
      /* Get the text field */
    var copyText = document.getElementById("link");

    /* Select the text field */
    copyText.select();

    /* Copy the text inside the text field */
    document.execCommand("Copy");

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  });

  var list = document.querySelectorAll('.item');
  for (var i=0; i<list.length; i++) {
    list[i].addEventListener('click', function(ev) {
<<<<<<< Updated upstream
      if (ev.target.tagName === 'DIV') {
        ev.target.classList.toggle('checked');
        $(this).find("#remove").toggle();
      }
    }, false);
  };
=======
    if (ev.target.tagName === 'DIV') {
      ev.target.classList.toggle('checked');
      $(this).find("#remove").toggle();
    }
  }, false);

    // //click remove hide the item
    // list[i].addEventListener('click', function(er) {
    //   if(er.target.tagName === 'BUTTON'){
    //     $(this).find(".item").toggle();
    //   }
    // }, false);
    //   $("#itemList .item").click(function(e){
    //     e.preventDefault();
    //     $(this).remove();
    //   });
};
>>>>>>> Stashed changes
});

function initializePage() {
  console.log("hi");
  $(".test").click(buttonUsed);
}

function buttonUsed(e) {
  console.log("test");
  e.preventDefault();
  gtag('event', 'buttonUsed');
}