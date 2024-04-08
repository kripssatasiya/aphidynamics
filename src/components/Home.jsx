import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './homeStyle.css';

export default function Home() {

  

  const imgContainer = [
    {
      img: "./oneNewBg.png", alt: "first"
    },
    {
      img: "./fourNewBg.png", alt: "second"
    },
    {
      img: "./threeBg.png", alt: "third"
    },
    {
      img: "./twoNewBg.png", alt: "fourth"
    }
  ];


  const newAdd = [
    {
       title:"Why Choose Us?" , des:"Discover the reasons why clients choose us for their web and mobile app development needs." , l1:"Experienced team of developers" , l2:"Customized solutions tailored to your needs" , l3:"Proven track record of success" , l4:"Excellent customer service and support"
    },
    {
       title:"Our Process" , des:"Learn about our streamlined development process and how we bring your ideas to life." , l1:"Initial consultation and project discovery" , l2:"Design and development" , l3:"Testing and quality assurance" , l4:"Deployment and ongoing support"
    }
];

const dynamicTextOptions = [
  { text: "Website Design!" },
  { text: "Mobile Applications!" },
  { text: "Web Applications!" },
  { text: "Digital Marketing!" },
  { text: "Graphics Design!" }
];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dynamicTextOptions.length);
    }, 3000); // Change the interval duration here (in milliseconds)

    return () => clearInterval(interval);
  }, [dynamicTextOptions.length]);

  return (
    <>

      <div className="container-style my-4 text-center">
        <div className="jambotron" >
          <div className="background-color">
            <h5 className="display-6 " >Unleash Your Ideas Stunning!<br /><span className="mx-5" id="dynamicText">{dynamicTextOptions[currentIndex].text}</span></h5>
            <p className="lead mt-5">Experience our outstanding Web and mobile application development services, designed to elevate your ideas to new heights.</p>
            <p className="lead">
              <a className="btn btn-primary btn-lg mx-2 my-2" href="/" role="button">GET QUOTES</a>
              <Link className="btn btn-primary btn-lg mx-2 my-2" to="/contact" role="button">CONTACT US</Link>
            </p>
            <div className="row">
              {imgContainer.map((e, i) => (

                <div key={i} className="col-3">
                  <img src={e.img} alt={e.alt} className="img-fluid small-image" />
                </div>

              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Content */}
      <section className="additional-content-home py-5">
        <div className="container">
          <div className="row">
            {newAdd.map((e,i)=>(
              <div key={i} className="col-md-6 mb-2">
              <div className="card shadow">
                <div className="card-body">
                  <h2 className="card-title">{e.title}</h2>
                  <p className="card-text">{e.des}</p>
                  <ul className="list-unstyled">
                    <li className="mb-2"><i className="fas fa-check  me-2"></i>{e.l1}</li>
                    <li className="mb-2"><i className="fas fa-check  me-2"></i>{e.l2}</li>
                    <li className="mb-2"><i className="fas fa-check  me-2"></i>{e.l3}</li>
                    <li><i className="fas fa-check me-2"></i>{e.l4}</li>
                  </ul>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>

    </>

  );
}
