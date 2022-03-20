console.log("this is form validation project");

const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const address = document.getElementById("address");
const address2 = document.getElementById("address2");
const phone = document.getElementById("phone")
const city = document.getElementById("city")
const checkout = document.getElementById("checkout")
let blank = document.getElementById("blank")

let formname = false;
let formemail = false;
let formpassword = false;
let formphone = false

firstname.addEventListener("blur", () => {
    let regex = /^[a-zA-Z]([a-zA-Z]){3,10}$/;
    let str = firstname.value;
    if (regex.test(str)) {
        console.log("your name is valid");
        console.log(regex, str);
        firstname.classList.remove('is-invalid')
        firstname.classList.add('is-valid')
        formname = true;
    }
    else {
        console.log("your name is not valid");
        firstname.classList.add('is-invalid');
        firstname.classList.remove('is-valid')
        formname = false;
    }
})

lastname.addEventListener("blur", () => {
    let regex = /^[a-zA-Z]([a-zA-Z]){3,10}$/;
    let str = lastname.value;
    if (regex.test(str)) {
        console.log("your name is valid");
        console.log(regex, str);
        lastname.classList.remove('is-invalid')
        lastname.classList.add('is-valid')
        formname = true;
    }
    else {
        console.log("your name is not valid");
        lastname.classList.add('is-invalid');
        lastname.classList.remove('is-valid')
        formname = false;
    }
})

email.addEventListener("blur", () => {
    let regex = /^([0-9a-zA-Z\_\.\-]+)@([0-9a-zA-Z\_\.\-]+)\.([a-zA-Z]){3,7}$/;
    let str = email.value;
    if (regex.test(str)) {
        console.log("your email is valid");
        console.log(regex, str);
        email.classList.remove('is-invalid')
        email.classList.add('is-valid')
        formemail = true;
    }
    else {
        console.log("your email is in-valid");
        email.classList.add('is-invalid');
        email.classList.remove('is-valid')
        formemail= false;
    }
});

password.addEventListener("blur", () => {
    let regex = /^([a-zA-z0-9]+){5,15}$/;
    let str = password.value;
    if (regex.test(str)) {
        console.log("password is valid");
        password.classList.remove('is-invalid')
        password.classList.add('is-valid')
        formpassword = true;
    }
    else {
        console.log("password is in-valid");
        password.classList.add('is-invalid');
        password.classList.remove('is-valid')
        formpassword = false;
    }
});
phone.addEventListener("blur", ()=>{
    let regex = /^([0-9]+){11}$/;
    let str = phone.value;
    if (regex.test(str)) {
        console.log("phone is valid");
        phone.classList.remove('is-invalid')
        phone.classList.add('is-valid')
        formphone = true;
    }
    else {
        console.log("phone is in-valid");
        phone.classList.add('is-invalid');
        phone.classList.remove('is-valid')
        formphone = false;
    }

})

checkout.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("you click checkout");
    let success = document.getElementById("success");
    let html ;
    if(formname && formemail && formpassword && formphone){
        html = `<div class="alert alert-success" id="success" role="alert">
                <strong>Success!</strong> You have submitted your form
                </div>`
    success.innerHTML += html;
     }
     else{
        html = `<div class="alert alert-danger" id="success" role="alert">
        <strong>Error!</strong> There is some problem please check and try again.
        </div>`
success.innerHTML += html;
         
     }
})
