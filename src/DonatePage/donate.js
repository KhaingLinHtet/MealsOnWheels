import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import './donste.css'
import donatepagePhoto from '../Images/p25.png'

function donate() {

    const onToken = (token)=> {
      console.log (token);
    }

  return (

    <div>
        <nav className="member-navbar">
            <div className="logo">Meals on Wheels</div>
            {/* <div className="nav-member">
                <h4> Member Sign Up</h4>
            </div> */}
        </nav>

        <div class="card" style={{width: '95%'}}>
              <img src={donatepagePhoto} class="card-img-top" alt="..." style={{height: '300px', width:'100%'}}/>
            <div class="card-body">
              <p class="card-text" style={{fontSize:'20px'}}>	
              "Welcome to our Donation Page, a cornerstone of the 'Meals On Wheels' initiative, where your compassion can truly shine. At MerryMeal, we are committed to delivering hot, nourishing meals to those who rely on our support. Your contributions are the lifeline of our mission, and here, you have the option to make a significant impact. Consider a daily contribution of just "  5 $  " to provide a meal each day for one, or opt for a monthly commitment of "
              100 $ " to ensure sustained support throughout the month. With your generosity, we can work together to combat hunger and improve the lives of those we serve."
              </p>
            </div>
          </div>
          

          <div class="container-text-center">
              <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                <div class="col">
                  <div class="p-3">$ 5</div>
                </div>
                <div class="col">
                  <div class="p-3">$ 50 </div>
                </div>
                <div class="col">
                  <div class="p-3">$ 100</div>
                </div>
              </div>

              <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                <div class="col">
                  <div class="p-3">$ 500</div>
                </div>
                <div class="col">
                  <div class="p-3">$ 1000 </div>
                </div>
                <div class="col">
                  <div class="p-3">$ 1500</div>
                </div>
              </div>

             
              <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                <div class="btn-col">

                <div class="dropdown">
                      <button class="dropbtn">Donate</button>
                      <div class="dropdown-content">

                      <a><StripeCheckout
                        token={onToken}
                        currency="USD"
                        amount="500"
                        stripeKey="pk_test_51O1SHOLVmwPdZFSWqK3k9CjLwY4pcxpE7ov5KbOzkpjh1zQkPLhRCHjWjOAsHhxBWQclLkw9Eb5hcjrPv7xB6xVu00FLTjVxJ4"
                      /></a>
                        <a><StripeCheckout
                        token={onToken}
                        currency="USD"
                        amount="5000"
                        stripeKey="pk_test_51O1SHOLVmwPdZFSWqK3k9CjLwY4pcxpE7ov5KbOzkpjh1zQkPLhRCHjWjOAsHhxBWQclLkw9Eb5hcjrPv7xB6xVu00FLTjVxJ4"
                      /></a>
                        <a ><StripeCheckout
                        token={onToken}
                        currency="USD"
                        amount="1000"
                        stripeKey="pk_test_51O1SHOLVmwPdZFSWqK3k9CjLwY4pcxpE7ov5KbOzkpjh1zQkPLhRCHjWjOAsHhxBWQclLkw9Eb5hcjrPv7xB6xVu00FLTjVxJ4"
                      /></a>
                        <a ><StripeCheckout
                        token={onToken}
                        currency="USD"
                        amount="5000"
                        stripeKey="pk_test_51O1SHOLVmwPdZFSWqK3k9CjLwY4pcxpE7ov5KbOzkpjh1zQkPLhRCHjWjOAsHhxBWQclLkw9Eb5hcjrPv7xB6xVu00FLTjVxJ4"
                      /></a>
                        <a ><StripeCheckout
                        token={onToken}
                        currency="USD"
                        amount="10000"
                        stripeKey="pk_test_51O1SHOLVmwPdZFSWqK3k9CjLwY4pcxpE7ov5KbOzkpjh1zQkPLhRCHjWjOAsHhxBWQclLkw9Eb5hcjrPv7xB6xVu00FLTjVxJ4"
                      /></a>
                        <a ><StripeCheckout
                        token={onToken}
                        currency="USD"
                        amount="15000"
                        stripeKey="pk_test_51O1SHOLVmwPdZFSWqK3k9CjLwY4pcxpE7ov5KbOzkpjh1zQkPLhRCHjWjOAsHhxBWQclLkw9Eb5hcjrPv7xB6xVu00FLTjVxJ4"
                      /></a>
                      </div>
                 </div>

                    {/* Stipe checkout  */}
             {/* <StripeCheckout
                token={onToken}
                stripeKey="pk_test_51O1SHOLVmwPdZFSWqK3k9CjLwY4pcxpE7ov5KbOzkpjh1zQkPLhRCHjWjOAsHhxBWQclLkw9Eb5hcjrPv7xB6xVu00FLTjVxJ4"
              />  */}

              
                </div>
               
              </div>

            </div>

            

    </div>



  )
}

export default donate
