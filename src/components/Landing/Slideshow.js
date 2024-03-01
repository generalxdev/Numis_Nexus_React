import { useState, useEffect } from "react";
import '../../css/slide-show.css'
import '../../css/project-base.css';

function ImageSlider() {
  // const [slideIndex, setSlideIndex] = useState(1);

  // function plusSlides(n) {
  //   const mySlides = document.getElementsByClassName("mySlides");

  //   if(slideIndex + n == 0)
  //     setSlideIndex(mySlides.length);
  //   else if(slideIndex + n == mySlides.length + 1)
  //     setSlideIndex(1);
  //   else
  //     setSlideIndex(slideIndex + n);

  // }

  // function currentSlide(n) {
  //   setSlideIndex(n);
  // }

  // useEffect(() => {
  //   const slides = document.getElementsByClassName("mySlides");
  //   const dots = document.getElementsByClassName("dot");

  //   let intervalId = setInterval(() => {
  //     setSlideIndex((prevIndex) =>
  //       prevIndex === slides.length ? 1 : prevIndex + 1
  //     );
  //   }, 5000);

  //   return () => clearInterval(intervalId);
  // }, []);

  // useEffect(() => {
  //   const slides = document.getElementsByClassName("mySlides");
  //   const dots = document.getElementsByClassName("dot");
  //   if (slideIndex > slides.length) {
  //     setSlideIndex(1);
  //   }    
  //   if (slideIndex < 1) {
  //     setSlideIndex(slides.length);
  //   }
  //   for (let i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";  
  //   }
  //   for (let i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" dotActive", "");
  //   }
  //   slides[slideIndex-1].style.display = "block";  
  //   dots[slideIndex-1].className += " dotActive";
  // }, [slideIndex]);

  return (
    <>
        <div className="slideshow-container">
            {/* <div className="mySlides fade" style={{backgroundImage: "url('img/1.jpg')"}}></div>
            <div className="mySlides fade" style={{backgroundImage: "url('https://www.lpc.com/wp-content/uploads/2018/04/Exterior2.jpeg')"}}></div> */}
            <div className="mySlides" style={{display: "block", backgroundImage: "url('img/1.jpg')"}}></div>

            {/* <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
            <a className="next" onClick={() => plusSlides(1)}>❯</a> */}
        </div>
        {/* <div className='absolute w-full bottom-7 fadeInUp' style={{ textAlign: "center"}}>
            <span className="dot" onClick={() => currentSlide(1)}></span> 
            <span className="dot" onClick={() => currentSlide(2)}></span> 
            <span className="dot" onClick={() => currentSlide(3)}></span> 
        </div> */}
    </>
  );
}

export default ImageSlider;
