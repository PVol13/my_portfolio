import React from 'react';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";
function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hi, My Name is Shermeen</h2>
        <div className='prompt'>
          <p>Coder, Writer and Designer in a nutshell</p>
           <a href = "https://www.linkedin.com/in/shermeenu6/" style={{textDecoration:'none'}}><LinkedInIcon/> </a>
           <EmailIcon/>
           <a href = "https://github.com/PVol13" style={{textDecoration:'none'}}><GitHubIcon/></a>
          
          </div>
      </div>
      <div className='skills'>
        <h1>
          Skills
        </h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
              ReactJS, HTML, CSS, NodeJS, NPM, MaterialUI, UI/UX Design, Figma
            </span>
          </li>


          <li className='item'>
            <h2>Languages</h2>
            <span>
            Python, Java (basic), C (basic), JavaScript, SQL
            </span>
          </li>

          <li className='item'>
            <h2>Frameworks and Libraries</h2>
            <span>
            Django, BootStrap, Numpy, Pandas, Matplotlib, Seaborn, SciPy, SciKit-Learn, p5.js
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home