import './Signup.css';
function Signup()
{
    return (
        <div class="signup-container">
        <h2>Sign Up</h2>
        <form class="signup-form">
            <input type="text" placeholder="Full Name" required/>
            <input type="email" placeholder="Email Address" required/>
            <input type="password" placeholder="Password" required/>
            <input type="password" placeholder="Confirm Password" required/>
            <button type="submit">Sign Up</button>
        </form>
    </div>
    );
}
export default Signup;