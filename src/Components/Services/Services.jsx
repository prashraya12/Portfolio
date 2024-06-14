import React from 'react'
import "./services.css"

const Services = () => {
  return (
    <div className="services-container">
          <div className="services-list-container">
            {/* description */}
               <div className='services-desc-container'>
                    <h1>My awesome <span>Services</span></h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti rerum vitae laudantium error in eos fugit animi incidunt, quidem assumenda vero cupiditate voluptates iste ad dolorum consequatur, fuga provident maxime!
                         
                    </p>
                    
               </div>
            {/* item */}
               <div className='services-item-container'>
                    <div className='services-item'>
                         <i className='fa-solid fa-code'></i>
                    
                    
                         <div className='item-desc'>
                              <h3>Web Dev</h3>
                              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus molestiae fuga odit non. Dolores corrupti veniam possimus a, ipsa explicabo cupiditate reiciendis nulla minima perferendis. Velit fugit culpa libero veritatis!</p>
                         </div>
                    </div>

                    <div className='services-item'>
                         <i className='fa-solid fa-desktop'></i>
                    
                         <div className='item-desc'>
                              <h3>Desktop App</h3>
                              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus molestiae fuga odit non. Dolores corrupti veniam possimus a, ipsa explicabo cupiditate reiciendis nulla minima perferendis. Velit fugit culpa libero veritatis!</p>
                         </div>
                    </div>
               
          
               </div>
               

          </div>
               


     </div>

  )
}

export default Services