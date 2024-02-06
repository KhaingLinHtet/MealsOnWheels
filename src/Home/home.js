import React from 'react'
import './home.css';
function home () {
  return (
    <div className="landing-container">
      <nav className="navbar">
        <div className="logo">Meals on Wheels</div>
          <div className="nav-buttons">
            <a className="nav-button" href='/roles'> Sign Up</a>
            <a className="nav-button" href='/signinPage'> Sign In</a>
          </div>
      </nav>
    <div className='full-section'>
        <div className="content">
            <div className="left-section">
                <header>
                   <h1>Welcome to Meals On Wheels</h1>
                </header>
                <p>
                Welcome to MerryMeal, where we are dedicated to preparing and delivering hot noon meals to qualified adults in need, ensuring they receive the nourishment and care they deserve. Our services are available from Monday through Friday, and for those outside our immediate reach, we provide frozen meals with weekend support, thanks to our partnerships with food service providers across in our region.
                </p>
            </div>
            <div className="right-section">
                <button className="btn btn-success donate-button"><a href='donatePage'>Donate Now</a></button>
                <p>Your generous donation helps us continue our mission of providing hot meals to those in need. Your generous donation will make a meaningful difference in the lives of those we serve at MerryMeal, helping us continue our mission of providing hot meals to vulnerable adults unable to cook for themselves due to age, disease, or disability.</p>
            </div>
        </div>
    </div>
  </div>
  )
}

export default home
