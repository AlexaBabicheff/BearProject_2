const root = document.querySelector('#root')
const body=document.querySelector('body')

const bodyContainerHeader= document.createElement('div')
bodyContainerHeader.classList.add('bodyContainerHeader')
body.append(bodyContainerHeader)

const buttonHeader = document.createElement('button')
buttonHeader.id='toggleButton';
buttonHeader.classList.add('register-dark');
buttonHeader.innerText = 'Register-light';
bodyContainerHeader.append(buttonHeader);

const marginLeft = window.getComputedStyle(buttonHeader).marginLeft; 

let isDarkMode = true;

buttonHeader.addEventListener('click', () => {
    const inputs = document.querySelectorAll('.input');
    if (isDarkMode) {
        body.style.backgroundColor = 'black';
        bodyContainerHeader.style.backgroundColor = 'black';
        toggleButton.style.backgroundColor = 'black';
        toggleButton.style.borderColor = 'white';
        toggleButton.style.color = 'white';
        fbIcon.style.color = 'white';
        twitterIcon.style.color = 'white';
        googleIcon.style.color = 'white';
        bodyContainer.style.backgroundColor = 'black';
        formContainer.style.backgroundColor = 'black';
        formContainer.style.boxShadow = 'white';
        nameInput.style.backgroundColor = 'grey';
        emailInput.style.backgroundColor = 'grey';
        passwordInput.style.backgroundColor = 'grey';
        passwordConfirmInput.style.backgroundColor = 'grey';
        // textNode.style.color = 'white';
        // privacyLink.style.color = 'white';
        form.style.backgroundColor = 'black';
        headerText.style.color = 'white';
        underlineText.style.color = 'white';
        formBody.style.color = 'white';
        nameContainer.style.color = 'white';
        emailContainer.style.color = 'white';
        passwordContainer.style.color = 'white';
        passwordConfirmContainer.style.color = 'white';
        formBody.style.color = 'white';
        divider.style.backgroundColor = 'white';
        body.style.color = 'white';
        buttonHeader.innerText = 'Register Light';
        buttonHeader.classList.remove('register-dark');
        buttonHeader.classList.add('register-light');
    } else {
        body.style.backgroundColor = '#fcf6f6';
        bodyContainerHeader.style.backgroundColor = '#fcf6f6';
        toggleButton.style.backgroundColor = 'white';
        toggleButton.style.borderColor = '#0A55C6';
        toggleButton.style.color = '#414344';
        fbIcon.style.color = 'black';
        twitterIcon.style.color = 'black';
        googleIcon.style.color = 'black';
        bodyContainer.style.backgroundColor = '#fcf6f6';
        formContainer.style.backgroundColor = 'white';
        formContainer.style.boxShadow = '#ccc';
        nameInput.style.backgroundColor = 'white';
        emailInput.style.backgroundColor = 'white';
        passwordInput.style.backgroundColor = 'white';
        passwordConfirmInput.style.backgroundColor = 'white';
        form.style.backgroundColor = 'white';
        headerText.style.color = '#414344';
        underlineText.style.color = '#676767';
        formBody.style.color = '#414344';
        nameContainer.style.color = '#414344';
        emailContainer.style.color = '#414344';
        passwordContainer.style.color = '#414344';
        passwordConfirmContainer.style.color = '#414344';
        formBody.style.color = '#414344';
        divider.style.backgroundColor = '#ccc';
        // termsLink.style.color = '#B0B0B0';
        // privacyLink.style.color = '#B0B0B0';
        document.body.style.color = 'black';
        buttonHeader.innerText = 'Register Dark';
        buttonHeader.classList.remove('register-light');
        buttonHeader.classList.add('register-dark');
    }
    isDarkMode = !isDarkMode;
});

const bodyContainer = document.createElement('div')
bodyContainer.classList.add('bodyContainer')
body.append(bodyContainer)

// const bear = document.createElement('div')
// bear.classList.add('bear')
// bodyContainer.append(bear)

const bearImg = document.createElement('img')
bearImg.src='./Rectangle 10.svg';
bearImg.alt='bear';
bearImg.classList.add('bearImg');
bearImg.style.left = marginLeft;
body.append(bearImg);

const formContainer = document.createElement('div')
formContainer.classList.add('formContainer')
bodyContainer.append(formContainer)

const form = document.createElement('form')
form.classList.add('form')
formContainer.append(form)

const formHeader = document.createElement('div')
formHeader.classList.add('formHeader')
form.append(formHeader)

const header = document.createElement('div')
header.classList.add('header')
formHeader.append(header)

const headerText = document.createElement('h1')
headerText.classList.add('headerText')
headerText.innerText='Create account'
header.append(headerText)

const underlineText = document.createElement('p')
underlineText.classList.add('underlineText')
underlineText.innerText='Or register using email & password'
header.append(underlineText)

const fbIcon = document.createElement('i');
fbIcon.classList.add('fa-solid', 'fa-f');
formHeader.append(fbIcon);

const twitterIcon = document.createElement('i');
twitterIcon.classList.add('fab', 'fa-twitter');
formHeader.append(twitterIcon);

const googleIcon = document.createElement('i');
googleIcon.classList.add('fab', 'fa-google');
formHeader.append(googleIcon);

const divider = document.createElement('div');
divider.classList.add('divider');
form.append(divider);

const formBody = document.createElement('div')
formBody.classList.add('formBody')
form.append(formBody)

const nameLabel = document.createElement('label');
nameLabel.innerText = 'Full name';

const nameInput = document.createElement('input');
nameInput.id='input';
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('placeholder', 'John Rambo');

const nameContainer = document.createElement('nameContainer');
nameContainer.classList.add('nameContainer')

nameContainer.appendChild(nameLabel);
nameContainer.appendChild(nameInput);
formBody.append(nameContainer);

const emailLabel = document.createElement('label');
emailLabel.innerText = 'Email address';

const emailInput = document.createElement('input');
emailInput.setAttribute('type', 'text');
emailInput.setAttribute('placeholder', 'hello@hey.com');

const emailContainer = document.createElement('emailContainer');
emailContainer.classList.add('emailContainer')
emailContainer.appendChild(emailLabel);
emailContainer.appendChild(emailInput);
formBody.append(emailContainer);

const passwordLabel = document.createElement('password');
passwordLabel.innerText = 'Create password';

const passwordInput = document.createElement('input');
passwordInput.setAttribute('type', 'text');
passwordInput.setAttribute('placeholder', '............');

const passwordContainer = document.createElement('passwordContainer');
passwordContainer.classList.add('passwordContainer')
passwordContainer.appendChild(passwordLabel);
passwordContainer.appendChild(passwordInput);
formBody.append(passwordContainer);

const passwordConfirmLabel = document.createElement('passwordConfirm');
passwordConfirmLabel.innerText = 'Confirm password';

const passwordConfirmInput = document.createElement('input');
passwordConfirmInput.setAttribute('type', 'text');
passwordConfirmInput.setAttribute('placeholder', '............');

const passwordConfirmContainer = document.createElement('passwordConfirmContainer');
passwordConfirmContainer.classList.add('passwordConfirmContainer')
passwordConfirmContainer.appendChild(passwordConfirmLabel);
passwordConfirmContainer.appendChild(passwordConfirmInput);
formBody.append(passwordConfirmContainer);

// const checkbox = document.createElement('div')
// checkbox.classList.add('checkbox')
// form.append(checkbox)

// const termsCheckbox = document.createElement('input');
// termsCheckbox.setAttribute('type', 'checkbox');
// termsCheckbox.setAttribute('checked', 'checked');
// checkbox.append(termsCheckbox);

// const termsLabel = document.createElement('label');
// termsLabel.innerHTML = 'I agree to <a href=#>the terms</a> & <a href=#>privacy policy</a>';
// checkbox.append(termsLabel);

//
const checkbox2 = document.createElement('label');
checkbox2.classList.add('container');
form.append(checkbox2);

const termsCheckbox2 = document.createElement('input');
termsCheckbox2.setAttribute('type', 'checkbox');
termsCheckbox2.setAttribute('checked', 'checked');
checkbox2.append(termsCheckbox2);

const checkmark = document.createElement('span');
checkmark.classList.add('checkmark');
checkbox2.append(checkmark);

const textNode = document.createTextNode('I agree to ');
const termsLink = document.createElement('a');
termsLink.setAttribute('href', '#');
termsLink.textContent = 'the terms';
checkbox2.append(textNode, termsLink);

const andText = document.createTextNode(' & ');
checkbox2.append(andText);

const privacyLink = document.createElement('a');
privacyLink.setAttribute('href', '#');
privacyLink.textContent = 'privacy policy';
checkbox2.append(privacyLink);

const registerButton = document.createElement('button');
registerButton.classList.add('registerButton')
registerButton.innerText = 'Register';
form.append(registerButton);

const saveDataToLocalStorage = () => {
    const isTermsAgreed = termsCheckbox2.checked;

    if (isTermsAgreed) {
        localStorage.setItem('fullName', nameInput.value);
        localStorage.setItem('emailAddress', emailInput.value);
        localStorage.setItem('password', passwordInput.value);
        localStorage.setItem('passwordConfirm', passwordConfirmInput.value);
        console.log('Data saved in localStorage');
    } else {
        console.log('Please agree to the terms and privacy policy to save the data.');
    }
};

registerButton.addEventListener('click', () => {
    saveDataToLocalStorage();
    loadDataFromLocalStorage();
});

const loadDataFromLocalStorage = () => {
    const savedName = localStorage.getItem('fullName');
    const savedEmail = localStorage.getItem('emailAddress');
    const savedPassword = localStorage.getItem('password')

    if (savedName) {
        nameInput.value = savedName;
    }

    if (savedEmail) {
        emailInput.value = savedEmail;
    }

    if (savedPassword){
        passwordInput.value = savedPassword;
    } 
    console.log('Data uploaded from localStorage');
};


const loadCheckboxState = () => {
    const isTermsAgreed = localStorage.getItem('termsAgreed') === 'true';
    if (isTermsAgreed) {
        termsCheckbox2.checked = true;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    loadCheckboxState();
    loadDataFromLocalStorage();
});

