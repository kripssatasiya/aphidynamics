import React from 'react';
import './ourport.css';

export default function OurPortfolio(props) {

  const portfolio = [
    {
      title: "Digital Marketing", des: "Explore our successful digital marketing campaigns that have helped businesses grow their online presence.", img: "./img/digital.jpg", alt: "Digital Marketing"
    },
    {
      title: "Web Development", des: "Check out our portfolio of beautifully designed and fully functional websites created for various clients.", img: "./img/webdevdes.jfif", alt: "Web Development"
    },
    {
      title: "App Development", des: "View our collection of innovative mobile applications developed for both Android and iOS platforms.", img: "./img/mobile.jpg", alt: "App Development"
    },
    {
      title: "Testing", des: "See how our rigorous testing procedures ensure the quality and reliability of software products.", img: "./img/testing.jpg", alt: "Testing"
    }
  ]

  return (
  <>
    <h2 className='text-center mt-4 display-6' style={{ fontFamily: "initial" }}>{props.title}</h2>
    <section id="portfolio">
      
      {portfolio.map((elem, index) => (


        <div key={index} className="service">

          <h3>{elem.title}</h3>
          <p>{elem.des}</p>
          <img src={elem.img} alt={elem.alt} />
        </div>
      ))}
    </section>
    </> 
  );
}
