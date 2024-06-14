import React from 'react'
import logo from "../../assets/logo.png"
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
        <div className="footer-logo">
            <img src={logo} alt="" />
        </div>

        <div className="footer-copyright">
            <p>© 2024 Prashraya Panta.All Rights Reserved</p>
        </div>

        {/* social */}

        <ul className='footer-social-media'>
            <li>
                <a href="">
                    <i className='fa-brands fa-facebook-f'></i>
                </a>
            </li>

            <li>
                <a href="">
                    <i className='fa-brands fa-instagram'></i>
                </a>
            </li>

            <li>
                <a href="">
                    <i className='fa-brands fa-twitter'></i>
                </a>
            </li>

            <li>
                <a href="">
                    <i className='fa-brands fa-linkedin'></i>
                </a>
            </li>

            <li>
                <a href="">
                    <i className='fa-brands fa-youtube'></i>
                </a>
            </li>
            

        </ul>



    </footer>
  )
}

export default Footer
