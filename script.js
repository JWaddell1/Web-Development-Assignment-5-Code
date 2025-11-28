const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const email= document.getElementById('email')
const errorElement = document.getElementById('error')
const phonenumber = document.getElementById('phonenumber')


  function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email)
    }
    const specialcharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

form.addEventListener('submit', (e) => {
    let messages = []
    if(name.value === '' || name.value ==null){
        messages.push('Please enter a name');
    }
    if (!validateEmail(email.value)) {
        messages.push('Please enter a valid email address');
    }
    if(password.value.length <=8) {
        messages.push('Password must be longer than 8 characters')
    }
     if(phonenumber.value.length <=6) {
        messages.push('Invalid phone number entered')
    }
    if(!specialcharacters.test(password.value)){
        messages.push('Password must have a special character.')
    }
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
        errorElement.classList.remove('error-visivle');
    }
});