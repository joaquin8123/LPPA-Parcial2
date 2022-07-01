window.onload = function(){
    let buttonSubmit = document.getElementById('button-submit');
    let inputEmail = document.getElementById("email");
    let inputPassword = document.getElementById("password");
    let loginError = document.getElementById("loginError");
    let emailError = document.getElementById("emailError");

    //si ya esta logueado, lo redirecciono
    if(localStorage.getItem('login')){
        window.location.href="dashboard.html";
    }


    buttonSubmit.addEventListener("click", function () {
        if(inputEmail.validity.valid){
            emailError.classList.add('hiddenError');
            fetch("https://basic-server-one.vercel.app/login", {
                method: "post",
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
                body: JSON.stringify({
                email: inputEmail.value,
                password: inputPassword.value
                })
            })
            .then(response => {
                if(response.status == 200){
                    loginError.classList.add('hiddenError');
                    localStorage.setItem('login',true)
                    window.location.href="dashboard.html";
                }else{
                    loginError.classList.remove('hiddenError');
                }
                
            })
            .catch(err => console.log('ERROR', err))
        }else{
            loginError.classList.add('hiddenError');
            emailError.classList.remove('hiddenError');
        }
    })
}