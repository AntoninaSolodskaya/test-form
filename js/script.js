function handleSubmit() {

    let form = document.querySelector('#signup');

    form.addEventListener('submit', function(evt) {
        evt.preventDefault();

        let formData = {
            email: document.querySelector('input[name="email"]').value,
            username: document.querySelector('input[name="username"]').value,
            password: document.querySelector('input[name="password"]').value,
        };

        let request = new XMLHttpRequest();

        request.addEventListener('load', function() {
            alert('Success!!!');
        });

        request.open('POST', '../validation/register.php', true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.send('email=' + encodeURIComponent(formData.email) + 'username=' + encodeURIComponent(formData.username) + '&password=' + encodeURIComponent(formData.password));
    })
   
}


function loginSubmit() {
    let form = document.querySelector('#auth');

    form.addEventListener('submit', function(evt) {
        evt.preventDefault();

        let formData = {
            username: document.querySelector('input[name="username"]').value,
            password: document.querySelector('input[name="password"]').value,
        };

        let request = new XMLHttpRequest();

        request.addEventListener('load', function() {
            alert('Success!!!');
        });

        request.open('POST', '../validation/login.php', true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.send('username=' + encodeURIComponent(formData.username) + '&password=' + encodeURIComponent(formData.password));
    })
}


function printError(elemId, hintMsg) {
    let error = document.getElementById(elemId);
    error.innerHTML = hintMsg;
}

function validateLoginForm() {

    let errorMsg = '<img src="../images/warning.png" />';
    let successMsg = '<img src="../images/check.png" id="success" />';
    let regex;

    const name = document.login.username.value;
    const password = document.login.password.value;
    let nameErr = passwordErr = true;

    if (name === "" || name.length < 3) {
        printError("nameErr", errorMsg);
    } else {
        regex = /^[a-zA-Z\s]+$/;                
        if (regex.test(name) === false) {
            printError("nameErr", errorMsg);
        } else {
            printError("nameErr", successMsg);
            nameErr = false;
        }
    }
    
    if (password === "" || password.length < 6) {
        printError("passwordErr", errorMsg);
    } else {
        regex = /^[A-Za-z]\w{6,14}$/;
        if (regex.test(password) === false) {
            printError("passwordErr", errorMsg);
        } else {
            printError("passwordErr", successMsg);
            passwordErr = false;
        }
    }

    if ((nameErr || passwordErr ) === true) {
       loginSubmit();
       return false;
    } 
    
};

function validateRegisterForm() {

    let errorMsg = '<img src="../images/warning.png" id="error-auth" />';
    let successMsg = '<img src="../images/check.png" id="success-auth" />';
    let regex;

    const name = document.register.username.value;
    const password = document.register.password.value;
    const email = document.register.email.value;
    
    let userErr = emailErr = passErr = true;
        
    if(name === "" || name.length < 3) {
        printError("userErr", errorMsg);
    } else {
        regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("userErr", errorMsg);
        } else {
            printError("userErr", successMsg);
            userErr = false;
        }
    }
        
    if(email === "") {
        printError("emailErr", errorMsg);
    } else {
        regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", errorMsg);
        } else{
            printError("emailErr", successMsg);
            emailErr = false;
        }
    }
    
    if (password === "" || password.length < 6) {
        printError("passErr", errorMsg);
    } else {
        regex = /^[A-Za-z]\w{6,14}$/;
        if (regex.test(password) === false) {
            printError("passErr", errorMsg);
        } else {
            printError("passErr", successMsg);
            passErr = false;
        }
    }

    if((userErr || emailErr || passErr ) === true) {
        handleSubmit();
        return false;
    } 
   
}