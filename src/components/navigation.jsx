import brand_logo from "../assets/images/brand_logo.png"


const Navigation =()=>{
return(

<nav className="container">
<div className="logo">
<img src={brand_logo}/>
</div>
<ul>
<li href="#">Menu</li>
<li href="#">Location</li>
<li href="#">About</li>
<li href="#">Contact</li>
</ul>
<button>Log in</button>
</nav>




)

}

export default Navigation;
