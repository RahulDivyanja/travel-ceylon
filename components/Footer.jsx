import React from "react";

function Footer() {
    return (
        <div className="footer">
            <div className="logo-section">
                <img src="src/assets/logo.svg" alt="traveCeylon" />
                <div className="socials">
                    <a href=""><img src="src/assets/fb.svg" alt="facebook" /></a>
                    <a href=""><img src="src/assets/whatsapp.svg" alt="whatsapp" /></a>
                    <a href=""><img src="src/assets/mail.svg" alt="mail" /></a>
                    <a href=""><img src="src/assets/instergram.svg" alt="instergram" /></a>
                </div>
            </div>
            <div className="footer-links">
                <p className="footer-title">Our Activities</p>
                <ul className="footer-list">
                    <li><a href="">Sigiriya Rock Climbing</a></li>
                    <li><a href="">Whale Watching</a></li>
                    <li><a href="">Surfing & Water Sports</a></li>
                    <li><a href="">Wildlife Safari</a></li>   
                </ul>
            </div>
            <div className="footer-links">
                <p className="footer-title">Travel Blogs</p>
                <ul className="footer-list">
                    <li><a href="">Colombo City Guide</a></li>
                    <li><a href="">Exploring Sigiriya & Dambulla</a></li>
                    <li><a href="">Best Beaches in Sri Lanka</a></li>
                    <li><a href="">Cultural Heritage of Kandy</a></li>   
                </ul>
            </div>
            <div className="footer-links">
                <p className="footer-title">About Us</p>
                <ul className="footer-list">
                    <li><a href="">Our Story</a></li>
                    <li><a href="">Work with us</a></li> 
                </ul>
            </div>
            <div className="footer-links">
                <p className="footer-title">Contact Us</p>
                <ul className="footer-list">
                    <li><a href="">Support & Help</a></li>
                    <li><a href="">Partner with Us</a></li> 
                </ul>
            </div>
        </div>
    );      
}

export default Footer;