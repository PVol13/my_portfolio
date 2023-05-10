import React, { PureComponent } from 'react';
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Footer.css";
export class Footer extends PureComponent {
  render() {
    return (
      <div className='footer'>
        <div className='socialMedia'>
        <a href="https://www.instagram.com/bread.crumbs4u/"><InstagramIcon/></a>
        <a href="https://github.com/PVol13">   <GitHubIcon/></a>
        <a href = "https://www.linkedin.com/in/shermeenu6/"><LinkedInIcon/></a>
           
        </div>
        <p>&copy; 2023 shermeen.com</p>
      </div>
    )
  }
}

export default Footer