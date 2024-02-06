import React from 'react'
import './memberOrder.css'
import pOne from '../Images/p16.png'
import pTwo from '../Images/p17.png'
import pThree from '../Images/p18.png'
import pFour from '../Images/21.png'
import pFive from '../Images/fzImage1.png'
import pSix from '../Images/fzImage2.png'
function memberOrder() {
  return (
    <div className="Order-container">
          <table className='order-table'>
            <thead>
              <tr className='order-first-role'>
                <th>Menu No</th>
                <th>Menu Image</th>
                <th>Menu </th>
                <th>Order </th>
              </tr>
            </thead>
            <tbody className='order-second-role'>
            <tr>
              <td>No.1</td>
              <td><img src={pOne} alt='' style={{height:'80px', width: '100px'}}/></td>
              <td>Chicken Bowl</td>
              <td><button className='btn btn-primary'>Order</button></td>
             </tr>
             <tr>
              <td>No.2</td>
              <td><img src={pTwo} alt='' style={{height:'80px', width: '100px'}}/></td>
              <td>Chicken Soup</td>
              <td><button className='btn btn-primary '>Order</button></td>
             </tr>
             <tr>
              <td>No.3</td>
              <td><img src={pThree} alt='' style={{height:'80px', width: '100px'}}/></td>
              <td>Pork & Beans</td>
              <td><button className='btn btn-primary '>Order</button></td>
             </tr>
             <tr>
              <td>No.4</td>
              <td><img src={pFour} alt='' style={{height:'80px', width: '100px'}}/></td>
              <td>Potato Mix</td>
              <td><button className='btn btn-primary '>Order</button></td>
             </tr>
             <tr>
              <td>No.5</td>
              <td><img src={pFive} alt='' style={{height:'80px', width: '100px'}}/></td>
              <td>Hotpot</td>
              <td><button className='btn btn-primary '>Order</button></td>
             </tr>
             <tr>
              <td>No.6</td>
              <td><img src={pSix} alt='' style={{height:'80px', width: '100px'}}/></td>
              <td>Meat Spicy</td>
              <td><button className='btn btn-primary '>Order</button></td>
             </tr>                      
            </tbody>
            </table>
        </div>
  )
}

export default memberOrder

