import React from "react";
import './resume.css'
import Footer from './components/footer'
const Itresume = ()=>{
    return(
        <div id='resume'>
            <div style={{padding:'20px'}}>
            <h1 style={{textAlign:'center'}}>IT Resume</h1>
           <div id='r'> <p style={{marginBottom:"30px"}}><b>MICHAEL TRAVERS
       <p>Contact: 202-288-0295 | Email: miketravers94@gmail.com</p>
      Location: Washington, DC<br/><br/>
      Github: <a style={{textDecoration:"none"}} href="https://github.com/mtravers1">https://github.com/mtravers1</a><br/>
LinkedIn: <a href="linkedin.com/in/michael-travers1">linkedin.com/in/michael-travers1</a></b></p></div> 
        <p>    
{/*            
<p style={{marginBottom:"30px"}}>
<br/>
<h2 >PROFESSIONAL SUMMARY</h2> 


Experienced full-stack developer with a strong foundation in front-end and back-end technologies. Proficient in JavaScript, React, Node.js, Spring Boot, and various databases. Formally trained in knowledge and skills related to network fundamentals, network access, IP connectivity, IP services, security fundamentals, and automation and programmability. Seeking opportunities to contribute technical expertise to a dynamic team.
</p> */}
<div id='ts'>
<h2>TECHNICAL SKILLS</h2>


<p><i>Technical Skills</i>: JavaScript, HTML, CSS, Java, C++, Python, SQL</p>
<p><i>Networking</i>: ReactJs, NextJs, ExpressJs, Spring boot, JQuery</p>
<p><i>Software</i>: PostgreSQL, MongoDB, Oracle</p>
<p><i>Communication</i>: Git, Docker, AWS, Postman</p>
</div>
<div id='c'>
<h1>Certification</h1>
            <p>Cisco Certified Support Technician(CCST) Certification </p>
            <p>Completed: April 2024</p>
</div>

 
<div id='work'>
<h2>WORK EXPERIENCE</h2>
<div>
<h3>Network Engineer |  DC Office of Employment Services (DOES)  | November 2023- May 2024</h3>
<ul>
    <li>
    Analyzed and implemented the TCP/IP and OSI models for efficient communication between devices.    </li>
<li>
Set up network topologies and configured both end-user and intermediate devices.</li>
<li>
Incorporated protocols like DHCP, VLAN, Trunking, Routing, and EtherChannels into network infrastructure.</li>
<li>
Troubleshoot LAN connectivity, physical, and addressing issues to ensure optimal network performance.</li>
</ul>
</div>
<div>
<h3>Web Developer | Alliance Software Development | May 2022 - Present</h3>
<ul>
    <li>
    Developed front-end applications using React.js and supported the maintenance of client web applications, ensuring high-quality performance and user satisfaction.
</li>
<li>
Conducted API testing with Postman to optimize application functionality and participated in code reviews and version control management with GitHub.
</li>
<li>
Collaborated with clients to understand their needs and deliver tailored web applications, contributing to all stages of the development lifecycle.
</li>
<li>
Actively engaged in Agile stand-up meetings, managing tasks and providing project updates through Zoom and Zenhub.
</li>
</ul>
</div>


</div>

<div id='ed'>


<h2>EDUCATION</h2>


<p><i>Bachelor of Science in Computer Science</i>, University of the District of Columbia, Washington, DC | May 2022</p>
</div>


<h2>Expierence</h2>

<div>
    <h3>Troubleshooting Network Issues  </h3>
    <ul>
        <li>
        Diagnosed and resolved network communication issues across different networks using command-line tools to inspect device configurations and identify connectivity problems.
        </li>
    <li>
    Analyzed routing paths to detect connectivity failures and reconfigured router interfaces via console access.</li>
    <li>
    Successfully restored network connectivity and verified functionality through device pinging.
    </li>
   
    </ul>

</div>
<div>
    <h3>Implementing VLAN, DHCP, and EtherChannel  							  January 2024</h3>
    <ul>
        <li>
        Created VLANs on switches and enabled trunking on ports to enhance data transfer efficiency.
        </li>
        <li>
        Facilitated seamless communication between VLANs by setting up inter-VLAN routing on routers.</li>
<li>
Configured EtherChannel for trunking and implemented DHCPv4 for automated IP address assignment.</li>

    </ul>
</div>
<div>
    <h3>LAN Setup and Configuration  								            November 2023</h3>
    <ul>
        <li>
        Established a LAN by connecting end and intermediate devices, configuring interfaces, and setting up IP addressing via console ports on routers and switches.        </li>
        <li>
        Verified network connectivity by successfully pinging all devices on the network.        </li>


    </ul>
</div>



</p>
        </div>
        <Footer/>

        </div>
    )
}

export default Itresume