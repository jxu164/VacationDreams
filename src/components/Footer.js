import React from 'react';

const Footer = () => {
  return (
    <div className = "main-footer">
        <div className = "container">
            <div className = "row">
                {/*Column 1*/ }
                <div className = "col">
                    <br></br>
                    <h4> Contact Us</h4>
                    <ul className = "list-unstyled"> 
                        <li>416-123-4567</li>
                        <li>123 Bay Street</li>
                        <li>Toronto, Canada</li>
                    </ul>
                </div>
                {/*Column 2*/ }
                <div className = "col">
                    <h4> Community</h4>
                    <ul className = "list-unstyled"> 
                        <li>Connect with Others</li>
                        <li>Become a partner</li>
                        <li>Join the Conversation</li>
                    </ul>
                </div>
                {/*Column 3*/ }
                <div className = "col">
                    <h4> Our Company</h4>
                    <ul className = "list-unstyled"> 
                        <li>Mission Statement</li>
                        <li>Satisfaction Guarantee</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className = "row">
                < p className = "col-sm">
                    &copy;2022 Dream Vacationers
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer