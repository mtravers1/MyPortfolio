const images = [
    '../images/landing-page-images/crosstrek.png',
    '../images/landing-page-images/crosstrek1.jpg',
    '../images/landing-page-images/crosstrek2.png',
    '../images/landing-page-images/crosstrek3.jpg',
    '../images/landing-page-images/crosstrek4.jpg',
    '../images/landing-page-images/crosstrek5.jpg',
    '../images/landing-page-images/crosstrek6.jpg',
    '../image/landing-page-images/crosstrek7.jpg',
    '../images/landing-page-images/crosstrek8.jpg',
    '../images/landing-page-images/crosstrek9.jpg',
    '../images/landing-page-images/crosstrek10.jpg',
    '../images/landing-page-images/crosstrek11.jpg',


  ];
  
  
  const container = document.querySelector('#background-slider');
  
  const interval = 3000; 
  
  let currentIndex = 0;
  
  function updateBackground() {
    container.style.backgroundImage = `url(${images[currentIndex]})`;
    container.style.transition = 'background-image 1s ease-in-out';
    currentIndex = (currentIndex + 1) % images.length; 
  }
  
  setInterval(updateBackground, interval);
  
  updateBackground();

  console.log("hellothere")