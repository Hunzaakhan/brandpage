import React from "react"
import amazon from "../assets/images/amazon.png"
import flipkart from "../assets/images/flipkart.png"
import shoe_image from "../assets/images/shoe_image.png"
import "../App.css"
const HeroSection=()=>{

return <main className="hero container">
     <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES </p>
        <div className="hero-btn">
<button>Shop now</button>
<button className="secondary-btn">Category</button>
        </div>
        <div className="shoping">
<p>Also availible on</p>
<div className="brand-icon"> 
<img src={flipkart} alt="flipkart" />
<img src={amazon} alt="amazon" />
</div>
        </div>
     </div>
     <div className="hero-image">
        <img src={shoe_image} alt ="shoes" />

     </div>

</main>


}
export default HeroSection