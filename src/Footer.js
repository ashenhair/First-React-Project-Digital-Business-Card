import React from "react";
import GitHubIcon from "./images/GitHubIcon.png";
import TwitterIcon from "./images/TwitterIcon.png";
import FacebookIcon from "./images/FacebookIcon.png";
import InstagramIcon from "./images/InstagramIcon.png";




function footer ()
{
    return (
        <>
        <footer className="footer">
         
        <img src= {GitHubIcon} alt="github" className="footer-github" />   
        <img src= {TwitterIcon} alt="twitter" className="footer-twitter" />
        <img src= {FacebookIcon} alt="facebook" className="footer-facebook" />
        <img src= {InstagramIcon} alt="instagram" className="footer-instagram" />
    

        

        </footer>
        
        </>

    )
}

export default footer;