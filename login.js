window.onload = function(){
    //si ya esta logueado, lo redirecciono
    if(localStorage.getItem('login')){
        window.location.href="dashboard.html";
    }

    let buttonSubmit = document.getElementById('button-submit');
    let inputEmail = document.getElementById("email");
    let inputPassword = document.getElementById("password");
    let loginError = document.getElementById("loginError");

    buttonSubmit.addEventListener("click", function () {
        fetch("https://basic-server-one.vercel.app/login", {
            method: "post",
            body: JSON.stringify({
            email: inputEmail,
            password: inputPassword
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.success){
                loginError.classList.add('hiddenError');
                localStorage.setItem('login',true)
                window.location.href="dashboard.html";
            }else{
                //mostrar error 
                loginError.classList.remove('hiddenError');
            }
        })
        .catch(err => console.log('ERROR', err))
    })
}