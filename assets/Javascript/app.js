$(document).ready(function () {

      // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDB8adcifVgeemcIx93qI3kk_mQWGRhmnw",
    authDomain: "portfolio-e76ef.firebaseapp.com",
    databaseURL: "https://portfolio-e76ef.firebaseio.com",
    projectId: "portfolio-e76ef",
    storageBucket: "portfolio-e76ef.appspot.com",
    messagingSenderId: "895600960467"
  };
  firebase.initializeApp(config);
  
  var dataBase = firebase.database();

  $("#send").on("click",  () => {
    event.preventDefault();
    // Grabs user input
    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var message = $("#message").val().trim();


    dataBase.ref().push({
        name: name,
        email: email,
        message: message
    })




    // Clears all of the text-boxes
    $("#name").val("");
    $("#email").val("");
    $("#message").val("");
});

$('#clear').on("click", () => {
    $("#name").val("");
    $("#email").val("");
    $("#message").val("");
})



    $('.ui.accordion').accordion();

    let once = (fn, context) => {
        var result;
        return function () {
            if (fn) {
                result = fn.apply(context || this, arguments);
                fn = null;
            }
            return result;
        };
    }


    $('.call').hover(once(function () {
        $(this).append("<p>469-247-5313</p>")
    }))
    $('.email').hover(once(function () {
        $(this).append("<p>gersoncruz91@gmail.com</p>")
    }))

 


});