// import React from "react";
// import grad from './images/grad.jpg'
// import './aboutme.css'
// import Footer from './components/footer'
// const Aboutme = ()=>{
//     return(
//         <div>
//                                     <h1 style={{textAlign:"center"}}>About Me</h1>

//         <div style={{display:"flex", justifyContent:"center"}} className="about">

//             <div id='bout'>
//                 <div>
//                     <h2>2022-2023 Full Stack Developer</h2>
//             <p><b>position as a Software Developer at Alliance Software Development, I contributed to a range of full-stack web development projects. I collaborated with senior developers to create high-quality web applications using React, Node.js, Express.js, Spring Boot and databases such as MongoDB and PostgreSQL. Additionally, I gained valuable experience in debugging and managing version control through GitHub, as well as streamlining development and deployment processes using AWS Amplify. My role also involved working in an Agile environment, where I participated in daily stand-ups, sprint planning, and continuous feedback loops to ensure that project deadlines were met.</b></p>

//                 </div>
//             <hr/>
//             <h2>2023</h2>
//             <div>

//             </div>
//             <hr/>

//             <div>
//                 <h2>2024 Network Engineer</h2>
//                 <div>
//                 My technical skills are complemented by my experience as a Network Engineer with the DC Office of Employment Services (DOES), where I designed and deployed network infrastructures using Cisco devices, managed IP addressing, and optimized network performance. I have implemented network security protocols, including firewalls and EtherChannels, ensuring smooth and secure operations across various systems. I also recently obtained my Cisco Certified Support Technician (CCST) certification, further solidifying my technical support and networking expertise.

//                 </div>
//                 <hr/>
//                 <div>2025 Graduate School</div>
//                 <div>
//                     During my time in Graduate school, for my Data Science course, I conducted a comparative analysis of machine learning models for diabetes prediction using a dataset from 2025. Python, pandas, and other libraries were implemented and used to compare different classification models, including: Support Vector Machine, Decision Trees, Linear Regression, Random Forest, and K-Nearest Neighbors to find the most effective in terms of accuracy, precision, and recall. This process included data preprocessing to clean and prepare the dataset, including handling missing values and encoding categorical features. Feature selection to identify the most influential health factors that impact diabetes prediction. And Model Training and Evaluation.



// For my CyberSecurity class, I worked with a team and developed a comprehensive cybersecurity framework for drones, integrating the NIST Cybersecurity Framework (CSF) to address critical vulnerabilities in UAV systems. This approach included implementing lightweight cryptographic protocols, secure access controls, and real-time telemetry logging, significantly enhancing the resilience of drone communication and control systems against attacks like GPS spoofing, de-authentication, and MitM attacks.

//                 </div>
//                 <div>
//                     <h2>2025 Cybersecurity intern</h2>
//                 </div>
//             </div>
//             </div>
//             <h2></h2>
//             <div className="pic">
//             <img src={grad} width={500}/>

//             </div>
      


//         </div>
//         <Footer/>

//         </div>

//     )
// }
// export default Aboutme;

import React from "react";
import grad from "./images/grad.jpg";
import "./aboutme.css";

const Aboutme = () => {
  return (
    <div className="aboutme-container">
      <h1 className="aboutme-title">About Me</h1>

      <div className="aboutme-content">
        {/* Left Section */}
        <div className="aboutme-text">
          {/* Work Experience */}
          <section className="aboutme-section">
            <h2>2022 - 2023 | Full Stack Developer</h2>
            <p>
              As a <b>Software Developer at Alliance Software Development</b>, I
              contributed to full-stack web projects using{" "}
              <b>React, Node.js, Express.js, Spring Boot, MongoDB, and
              PostgreSQL</b>. I collaborated with senior developers to deliver
              high-quality applications, applied debugging and version control
              with GitHub, and streamlined deployments through AWS Amplify. My
              work was conducted in an Agile environment, participating in
              stand-ups, sprint planning, and feedback sessions to meet
              deadlines efficiently.
            </p>
          </section>

          <hr />

          {/* Network Engineer */}
          <section className="aboutme-section">
            <h2>2024 | Network Engineer</h2>
            <p>
              I served as a <b>Network Engineer</b> with the DC Office of
              Employment Services (DOES), where I designed and deployed network
              infrastructures with <b>Cisco devices</b>, managed IP addressing,
              and optimized system performance. I implemented network security
              protocols including firewalls and EtherChannels to ensure smooth
              and secure operations. I also earned the{" "}
              <b>Cisco Certified Support Technician (CCST)</b> certification,
              enhancing my networking expertise.
            </p>
          </section>

          <hr />

          {/* Graduate School */}
          <section className="aboutme-section">
            <h2>2025 | Graduate School</h2>
            <p>
              During my graduate studies, I conducted a{" "}
              <b>comparative analysis of machine learning models</b> for
              diabetes prediction using Python, pandas, and scikit-learn. This
              involved data preprocessing, feature selection, and evaluating
              models such as SVM, Decision Trees, Random Forest, Linear
              Regression, and KNN for accuracy, precision, and recall.
            </p>
            <p>
              In my <b>Cybersecurity coursework</b>, I collaborated on a project
              to build a security framework for drones by integrating the{" "}
              <b>NIST Cybersecurity Framework (CSF)</b>. We implemented
              lightweight cryptographic protocols, secure access controls, and
              real-time telemetry logging to protect UAVs from GPS spoofing,
              de-authentication, and MitM attacks.
            </p>
          </section>

          <hr />

          {/* Cybersecurity Internship */}
          <section className="aboutme-section">
            <h2>2025 | Cybersecurity Intern</h2>
            <p>
              Currently, I am pursuing hands-on experience in a{" "}
              <b>Cybersecurity Internship</b>, applying my skills in cloud
              security, network defense, and real-world threat mitigation.
            </p>
          </section>
        </div>

        {/* Right Section - Image */}
        <div className="aboutme-image">
          <img src={grad} alt="Graduation" />
        </div>
      </div>

    </div>
  );
};

export default Aboutme;
