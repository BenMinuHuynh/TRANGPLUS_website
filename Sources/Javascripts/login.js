document.addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.querySelector("#email").value.trim();
    let password = document.querySelector("#password").value.trim();
    if(email=="" && password==""){
        alert("Please enter email and passwords");
    }
    else{
        console.log(email, password);
        firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
            console.log(userCredential)
            Swal.fire({
                title: "Horray!",
                text: "You logged in successfully",
                icon: "success",
                timer: 1000,
                didClose: function () {
                    window.location.href = "template.html";
                }
            });
        }).catch((error) => {
            Swal.fire({
                title: "Something went wrong!",
                text: "Look like your email or password was incorrect",
                icon: "error",
            });
        });
    };
});