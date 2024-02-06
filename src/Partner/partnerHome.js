import React from 'react'
import './partnerHome.css'
import partnerImage from '../Images/p24.png'
import menuImageOne from '../Images/p16.png'
import menuImageTwo from '../Images/p17.png'
import menuImageThree from '../Images/p18.png'
import menuImageFour from '../Images/21.png'
import menuImageFive from '../Images/fzImage1.png'
import menuImageSix from '../Images/fzImage2.png'

const imageheight = '400px'
function partnerHome() {
  return (
    <div>
       <nav className="partnerHome-navbar">
            <div className="logo">Meals on Wheels</div>
            <div className="nav-partnerHome">
              <a className="nav-button" href='/partnerProfilePage'> Profile</a>
            </div>
        </nav>
        <div class="card" style={{width: '95%'}}>
              <img src={partnerImage} class="card-img-top" alt="..." style={{height: imageheight, width:'100%'}}/>
        </div>

        <div className="menu-container">
          <table className='menu-table'>
            <thead>
              <tr className='menu-first-role'>
                <th>Menu No</th>
                <th>Menu Image</th>
                <th>Menu </th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody className='menu-second-role'>
            <tr>
              <td>No.1</td>
              <td><img src={menuImageOne} alt='' style={{height:'80px', width: '100px'}}/></td>
              <td>Chicken Bowl</td>
              <td>0</td>
             </tr>
             <tr>
              <td>No.2</td>
              <td><img src={menuImageTwo} alt='' style={{height:'80px', width: '100px'}}/></td>
              <td>Chicken Soup</td>
              <td>0</td>
             </tr>
             <tr>
              <td>No.3</td>
              <td><img src={menuImageThree} alt='' style={{height:'80px', width: '100px'}}/></td>
              <td>Pork & Beans</td>
              <td>0</td>
             </tr>
             <tr>
              <td>No.4</td>
              <td><img src={menuImageFour} alt='' style={{height:'80px', width: '100px'}}/></td>
              <td>Potato Mix</td>
              <td>0</td>
             </tr>
             <tr>
              <td>No.5</td>
              <td><img src={menuImageFive} alt='' style={{height:'80px', width: '100px'}}/></td>
              <td>Hotpot</td>
              <td>0</td>
             </tr>
             <tr>
              <td>No.6</td>
              <td><img src={menuImageSix} alt='' style={{height:'80px', width: '100px'}}/></td>
              <td>Meat Spicy</td>
              <td>0</td>
             </tr>
             
                        

            </tbody>
            </table>
        </div>


    </div>
  )
}

export default partnerHome
