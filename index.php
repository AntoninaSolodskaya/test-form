<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Test</title>
</head>
<body>
    <main>
        <div class="wrap-title">
            <div class="title">Login To Your Account / Register New</div>
        </div>
        <div class="wrap">
            <div class="form-section">
                <div class="container">
                    <div class="block">
                        <div class="form-block">
                            <div class="form-header">
                                <div class="round">
                                    <img src="../images/img.png" class="image" />
                                </div>
                                <p class="header-title">Login To Your Account / Register New</p>
                            </div>
                            <div class='form-wrapper'>
                                <div class='row'>
                                    <div class='column'>
                                        <div class='left-column'>
                                            <div class="block-img">
                                                <div class="circle-section">
                                                    <div class="line"></div>
                                                    <div class="circle">
                                                        <div class="vertical-line"></div>
                                                    </div>
                                                    <div class="line"></div>
                                                </div>  
                                            </div>
                                            <form 
                                                name="login" 
                                                class="login-form" 
                                                id="auth" 
                                            >
                                                <div class="form-group">
                                                    <input 
                                                        type="text" 
                                                        name="username" 
                                                        class="form-control" 
                                                        id="name"  
                                                        placeholder="User Name"
                                                    >
                                                    <div class="error" id="nameErr"></div>
                                                </div>
                                                <div class="form-group">
                                                    <input 
                                                        type="password" 
                                                        name="password" 
                                                        id="password"
                                                        class="form-control" 
                                                        placeholder="Password"
                                                    >
                                                    <div class="error" id="passwordErr"></div>
                                                </div>
                                                <div class="text-color btn">
                                                    <div class="poster">
                                                            <label>Remember Me password</label>
                                                            <input type="checkbox" class="regular-checkbox" name="remember" />
                                                            <div class="descr">
                                                                <p>You no longer need to enter <br/> a password every time you use the site</p>
                                                            </div>
                                                    </div>
                                                    <button 
                                                        type="submit" 
                                                        name="submit" 
                                                        value="submit" 
                                                        class="login-btn"
                                                    >
                                                        Login
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class='column'>
                                        <div class='right-column'>
                                            <p class="item">Register</p>
                                            <form
                                                name="register" 
                                                id="signup" 
                                                class="register-form" 
                                            >
                                                <div class="form-group text-color">
                                                    <label for="email">Email</label>
                                                    <input type="text" name="email" id="email">
                                                    <div class="error-auth" id="emailErr"></div>
                                                </div>
                                                <div class="form-group text-color">
                                                    <label for="username">User Name</label>
                                                    <input type="text" name="username" id="username">
                                                    <div class="error-auth" id="userErr"></div>
                                                </div>
                                                <div class="form-group text-color">
                                                    <label for="pass">Password</label>
                                                    <input type="password" name="password" id="pass">
                                                    <div class="error-auth" id="passErr"></div>
                                                </div>
                                                <div class="btn-wrap">
                                                    <button type="submit" name="submit" value="submit" class="reg-btn">Register</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main> 
    <script src="./js/script.js"></script> 
</body>
</html>