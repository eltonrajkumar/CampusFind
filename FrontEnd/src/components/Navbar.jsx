import './Navbar.css';
function Navbar(){
 return(
    <nav className = "navbar">
        <div className = "nav-container">


        <a href = "/" className = "logo">
            Campus<span>Find</span>
        </a>
        <div className = "nav-links">
            <a href = "/">Home</a>
            <a href = "/browse">Browse Items</a>
            <a href = "/report-lost">Report Lost</a>
            <a href = "/report-found">Report Found</a>

        </div>
        <div className = "nav-actions">
            <a href = "/login" className = "login-btn">Login</a>
            <a href = "/signup" className = "signup-btn">Sign Up</a>
        </div>

        </div>



    </nav>
 );


}

export default Navbar;
