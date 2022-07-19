import React from "react";
import monalisa from "./images/monalisa.png";
import Mail from "./images/Mail.png";
import linkedinicon1 from "./images/linkedinicon1.png";
import MailTo from "./MailTo";





function Info() {
    return(
        <div className="info">

            <img src= {monalisa} alt="monalisa" className="info-monalisa" />

            

            <h2 className="info-name">Mona Lisa</h2>
            <h3 className="info-job">Full Stack Developer</h3>
            <a href="https://tr.wikipedia.org/wiki/Mona_Lisa" target="_" rel="noopener noreferrer">
            <h4 className="info-website">monalisa,website</h4></a>
            

        <div className="info--buttons">

            <div>
            <MailTo email = "mailto:monalisa@gmail.com" target="_" rel="noopener noreferrer"> </MailTo>
            <img src = {Mail}  alt="mail" className="info--buttons--mail" /> 

            

            <a href="https://www.linkedin.com/company/mona-lisa/" target="_" rel="noopener noreferrer">
            <img src = {linkedinicon1}  alt="linkedin" className="info--buttons--linkedin" /> </a>
            </div>     
            
                
        

            
        </div>

        </div>

        
    
    

       

    )
    

        
}

export default Info;
