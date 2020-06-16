function printError(elemId, hintMsg) {
    let error = document.getElementById(elemId);
    error.innerHTML = hintMsg;
}

let form = document.getElementById('signup');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let errorMsg = '<img src="../images/warning.png" id="error-auth" />';
    let successMsg = '<img src="../images/check.png" id="success-auth" />';
    let regex;

    const name = document.getElementById('username').value;
    const password = document.getElementById('pass').value;
    const email = document.getElementById('email').value;
    
    let userErr = emailErr = passErr = true;
        
    if(name.trim().length < 3) {
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
    
    if (password.trim().length < 6) {
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

    let formData = {
        email: document.getElementById('email').value,
        username: document.getElementById('username').value,
        password: document.getElementById('pass').value
    };

    let request = new XMLHttpRequest();

    request.addEventListener('load', function() {
        if((userErr = emailErr = passErr) === true){
            alert('Not Submit!!!');
        } else {
            alert('Success!!!');
        }
    });

    request.open('POST', '../validation/register.php');
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.send('email=' + encodeURIComponent(formData.email) + '&username=' + encodeURIComponent(formData.username) + '&password=' + encodeURIComponent(formData.password));

    if(userErr || emailErr || passErr) {
        return true; 
    }

    return false;
})


let formElem = document.getElementById('auth');

formElem.addEventListener('submit', function(e) {
    e.preventDefault();
    let errorMsg = '<img src="../images/warning.png" />';
    let successMsg = '<img src="../images/check.png" id="success" />';
    let regex;

    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    
    let nameErr = passwordErr = true;
        
    if (name.trim().length < 3) {
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
    
    if (password.trim().length < 6) {
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

    let formData = {
        username: document.getElementById('name').value,
        password: document.getElementById('password').value
    };

    let request = new XMLHttpRequest();

    request.addEventListener('load', function() {
        if((nameErr = passwordErr) === true){
            alert('Not Submit!!!');
        } else {
            alert('Success!!!');
        }
    });

    request.open('POST', '/validation/login.php', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.send('username=' + encodeURIComponent(formData.username) + '&password=' + encodeURIComponent(formData.password));

    if (nameErr || passwordErr) {
        return true;
    } 

    return false;
});