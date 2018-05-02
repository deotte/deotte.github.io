$(document).ready(function () {

    $("#js-rotating").Morphext({
        animation: "fadeIn",
        separator: ",",
        speed: 3000,
        complete: function () {
            // Called after the entrance animation is executed.
        }
    });

    firebase.initializeApp(FIREBASE_CONFIG);
    const firestore = firebase.firestore();


        $("#contactForm").submit(function (e) {

            e.preventDefault();
            firestore.collection("messages").add({
                email: $("#email").val(),
                name: $("#name").val(),
                message: $("#title").val(),
                title: $("#message").val()
            })
                .then(function() {
                    swal({ title: "Thanks!", text: "Your message has been sent.", type: "success" },
                        function(){ window.location.reload(); });
                })
                .catch(function(error) {
                    console.error("Error adding document: ", error);
                });
        });





});