btnTop = document.getElementById("btnTop");
window.onscroll = function() {scrollFunction()};

function scrollFunction(){
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var unavailableDates = ["04/30/2021"];
const setDateFormat = "mm/dd/yy";
function disableDates(date) {
    // Sunday is Day 0, disable all Sundays

      if($("#bf1").is(":checked") || $("#br1").is(":checked") || $("#hp1").is(":checked") ){
        if (date.getDay() === 0 || date.getDay() ===3 || date.getDay() === 6){
          return [false];
        }
      }
      else{
        if (date.getDay() === 0 || date.getDay() === 6){
          return [false];
        }
      }

    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) === -1 ];
}

$(document).ready(function(){
  $("#appointButton").click(function() {
    $("#credit_card").show();
    $("#ccMenu").show();
  });

  $("#flexCheckDefault").click(function () {
    if($(this).is(":checked")){
      $("#hpOptions").show();
    }
    else if($(this).is(":not(:checked)")){
      $("#hpOptions").hide();
    }
  });
  $("#flexCheckDefault2").click(function () {
    if($(this).is(":checked")){
      $("#brOptions").show();
    }
    else if($(this).is(":not(:checked)")){
      $("#brOptions").hide();
    }
  });
  $("#flexCheckDefault3").click(function () {
    if($(this).is(":checked")){
      $("#nailOptions").show();
    }
    else if($(this).is(":not(:checked)")){
      $("#nailOptions").hide();
    }
  });
  $("#flexCheckDefault4").click(function () {
    if($(this).is(":checked")){
      $("#bfOptions").show();
    }
    else if($(this).is(":not(:checked)")){
      $("#bfOptions").hide();
    }
  });
  $("#flexCheckDefault5").click(function () {
    if($(this).is(":checked")){
      $("#fitOptions").show();
    }
    else if($(this).is(":not(:checked)")){
      $("#fitOptions").hide();
    }
  });

  $("#tel").blur(function () {
    var tel = $("#tel").val();
    var isValid = false;
    var telReg = /^(\(([0-9]{3})\)[0-9]{3}-[0-9]{4})$/;
    if(telReg.test(tel)){
      isValid = true;
    }

    if(isValid == false && tel != "") {
     alert("Please provide a valid telephone number: (XXX)XXX-XXXX");
     $("#tel").val("(XXX)XXX-XXXX");
    }
    
  });

  $("#cCard").blur(function () {
    var card = $("#cCard").val();
    var isValid = false;
    if($('#radioVisa').is(':checked')||$('#radioAmex').is(':checked')||$('#radioMaster').is(':checked')){
      var cardReg = /^([0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4})$/;
      if (cardReg.test(card)) {
        isValid = true;
      }
    }
    /*if($('#radioVisa').is(':checked')){
      var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
      if (visaRegEx.test(card)) {
        isValid = true;
      }
    }
    else if ($('#radioAmex').is(':checked')) {
      var amexRegEx = /^(?:3[47][0-9]{13})$/;
      if(amexRegEx.test(card)) {
        isValid = true;
      }
    }
    else if ($('#radioMaster').is(':checked')) {
      var mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
      if(mastercardRegEx.test(card)) {
        isValid = true;
      }
    }*/
    else{
      isValid =false;
    }
    if(isValid == false && card != "") {
      alert("Please provide a valid card number: XXXX XXXX XXXX XXXX");
      $("#cCard").val("XXXX XXXX XXXX XXXX");
    }

  });


  $( "#dateInput" ).datepicker(
        {
            dateFormat:setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }
    );

});
