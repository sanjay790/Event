import './login.css';
function Login()
{
    return (
        <div class="login-container">
            <form name="myform" action="#" method="post" class="login-form input" onsubmit="return validateform()">
                <h2> Login </h2>
                <input type="text" placeholder="Username" name="name" required/>
                <input type="password" placeholder="Password" name="pwd" required/>
                <button type="submit" value="register">Login</button>
                <p class="message">Don't have an account <a href="#"> Sign Up</a></p>
            </form>
        </div>
    );
}
export default Login;