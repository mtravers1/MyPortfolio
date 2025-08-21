// // import React from "react";
// // import ccna from '../images/logos/ccna.png'
// // import mongodb from '../images/logos/mongodb.png'
// // import './banner.css'
// // const Banner =()=>{
    
// //     return(
// //         <div class="carousel">
// //             <div class="slides">
// //                  <img class="slide" src={ccna}/>
// //             <img class="slide" src={mongodb}/>

// //             </div>

           
// //         </div>
// //     )
// // }

// // export default Banner

// import React, { useState, useEffect } from "react";
// import "./banner.css";
// import secplus from '../images/logos/plus.jpeg'
// import javascript from '../images/logos/javascript.jpg'
// import express from '../images/logos/mongodb.png'
// import reactjs from '../images/logos/react.png'
// const certifications = [
//   {
//     name: "CompTIA Security+",
//     image: secplus,
//     description: "Covers core cybersecurity concepts and best practices."
//   },
//   {
//     name: "AWS Certified Cloud Practitioner",
//     image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
//     description: "Validates foundational AWS cloud knowledge."
//   },
//   {
//     name: "CCST",
//     image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg",
//     description: "Demonstrates networking skills using Cisco devices."
//   },
//   {
//     name: "Microsoft Azure Fundamentals",
//     image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
//     description: "Covers basics of Microsoft Azure cloud services."
//   },
//    {
//     name: "Javascript",
//     image: javascript,
//     description: ""
//   },
//    {
//     name: "Javascript",
//     image: javascript,
//     description: ""
//   },
//   {
//     name: "Express",
//     image: express,
//     description: "Create a backend API using the Express web server"
//   },
//   {
//     name: "React",
//     image: reactjs,
//     description: "Use react to create a dynamic interactive front end application."
//   }
// ];

// export default function Banner() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-slide every 3 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % certifications.length);
//     }, 3000);
//     return () => clearInterval(timer);
//   }, []);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % certifications.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
//   };

//   return (
//     <div className="carousel-container">
//       <button onClick={prevSlide} className="nav-btn left">❮</button>
//       <div className="carousel-card">
//         <img src={certifications[currentIndex].image} alt={certifications[currentIndex].name} />
//         <h2>{certifications[currentIndex].name}</h2>
//         <p>{certifications[currentIndex].description}</p>
//       </div>
//       <button onClick={nextSlide} className="nav-btn right">❯</button>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import "./banner.css";
import secplus from "../images/logos/plus.jpeg";
import javascript from "../images/logos/javascript.jpg";
import express from "../images/logos/mongodb.png";
import reactjs from "../images/logos/react.png";

const certifications = [
  {
    name: "CompTIA Security+",
    image: secplus,
    description: "Covers core cybersecurity concepts and best practices."
  },
  {
    name: "AWS Certified Cloud Practitioner",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    description: "Validates foundational AWS cloud knowledge."
  },
  {
    name: "CCST",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg",
    description: "Demonstrates networking skills using Cisco devices."
  },
  {
    name: "Microsoft Azure Fundamentals",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
    description: "Covers basics of Microsoft Azure cloud services."
  },
  {
    name: "JavaScript",
    image: javascript,
    description: "Proficient in front-end development using JavaScript."
  },
  {
    name: "Express",
    image: express,
    description: "Create backend APIs with Express web server."
  },
  {
    name: "React",
    image: reactjs,
    description: "Build dynamic, interactive front-end apps with React."
  }
];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Auto-slide every 4s
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % certifications.length);
      setFade(true);
    }, 400);
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(
        (prev) => (prev - 1 + certifications.length) % certifications.length
      );
      setFade(true);
    }, 400);
  };

  return (
    <div className="carousel-container">
      {/* <button onClick={handlePrev} className="nav-btn left">
        ❮
      </button> */}
      <div className={`carousel-card ${fade ? "fade-in" : "fade-out"}`}>
        <img
          src={certifications[currentIndex].image}
          alt={certifications[currentIndex].name}
        />
        <h2>{certifications[currentIndex].name}</h2>
        {/* <p>{certifications[currentIndex].description}</p> */}
      </div>
      {/* <button onClick={handleNext} className="nav-btn right">
      
      </button> */}
    </div>
  );
}
