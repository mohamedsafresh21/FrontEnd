const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateinput();
})

function validateinput(){
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();

    if(usernameVal===''){
        seterror(username,'username is required')
    }
    else{
        setsuccess(username)
    }

    if(emailVal===''){
        seterror(email,'email is required')
    }
    else if(!validateemail(emailVal)){
        seterror(email,'please enter a valid email')
    }
    else{
        setsuccess(email)
    }

    if(passwordVal===''){
        seterror(password,'password is requied')
    }
    else if(passwordVal.length<8){
        seterror(password,'password must be atleast 8 characters long')
    }
    else{
        setsuccess(password)
    }

    }

function seterror(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    errorElement.innerText = message;
    inputGroup.classList.add('.error')
    inputGroup.classList.remove('.success')
}
function setsuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    errorElement.innerText = '';
    inputGroup.classList.add('.error')
    inputGroup.classList.remove('.success')
}

const validateemail = (email) => {
    return String(email)
    .toLowerCase()
    .match(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/);
}

