import React from 'react';
import './services.css';


export default function Services(props) {
    

    const servicesObj = [
        {
            img: "./img/webAppDev.avif", cardTitle: "Web Application Development", cardText: "Transform your business processes with our bespoke web application development services. Our expert team leverages cutting-edge technologies to build scalable, intuitive,and high-performance web applications tailored to your unique needs.", link: "https://en.wikipedia.org/wiki/Web_application"
        },
        {
            img: "./img/ecommerce.jpg", cardTitle: "eCommerce Development", cardText: "Step into the world ofonline commerce with our eCommerce development solutions.From user-friendly interfaces to secure payment gateways, we create seamless and visually appealing online stores enhance customer's need also. eCommerce is trending sector.", link: "https://en.wikipedia.org/wiki/E-commerce"
        },
        {
            img: "./img/digital.jpg", cardTitle: "Digital Marketing", cardText: "Elevate your online presence and reach your target audience with our comprehensive digital  marketing strategies. From SEO and social media management to content creation and analytics, we craft campaigns that drive ngagement and also deliver measurable results more.", link: "https://en.wikipedia.org/wiki/Digital_marketing"
        },
        {
            img: "./img/websitenew.webp", cardTitle: "Website Development", cardText: "Our website development services go beyond the ordinary. We design and develop websites that not only look stunning but also function seamlessly. Whether it's a corporate site or a creative portfolio, we bring your vision to life on the digital canvas.Web development is the work.", link: "https://en.wikipedia.org/wiki/Web_development"
        },
        {
            img: "./img/mobile.jpg", cardTitle: "Mobile Application Development", cardText: "Stay ahead in the mobile era with our mobile application development services. We create dynamic and user-friendly mobile apps that cater to diverse platforms, providing your audience with a seamless.", link: "https://en.wikipedia.org/wiki/Mobile_app_development"
        },
        {
            img: "./img/testing.jpg", cardTitle: "testing", cardText: "Protect your digital assets with our robust security solutions. Our team employs the latest security measures to safeguard your websites, applications, and data, ensuring a secure online environment for both you and your users.", link: "https://en.wikipedia.org/wiki/Software_testing"
        } 

    ]
    return (
        <>
<div class="card-container" id="cardContainer">
<div className="services">
<h3 className='text-center mt-2 display-6' style={{ fontFamily: "initial" }}>{props.title}</h3>
<div className="services">
    <div className="row text-center">
        {servicesObj.map((elem, index) => (
            <div key={index} className="col-12 col-md-4 my-4">
                <div className="card" style={{ width: "20rem" }}>
                    <img src={elem.img} className="card-img-top" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">{elem.cardTitle}</h5>
                        <p className="card-text">{elem.cardText}</p>
                        <a href={elem.link} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>
</div>
</div>
        </>

    );
}
    