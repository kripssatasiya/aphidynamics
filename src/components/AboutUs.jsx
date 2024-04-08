import React from 'react';
import './about.css';
import { Link } from 'react-router-dom';

export default function AboutUs(props) {

    const additionalCont = [
        {
            title: "Our Mission", des: "At AphiDynamics IT Solutions, our mission is to deliver innovative and high-quality digital solutions that empower businesses to thrive in the digital age. We strive to exceed our clients' expectations by providing personalized services tailored to their unique needs."
        },
        {
            title: "Our Vision", des: "Our vision is to become a global leader in digital innovation, known for our commitment to excellence, integrity, and customer satisfaction. We aspire to create lasting partnerships with our clients and contribute to their success through our cutting-edge technology solutions."
        }
    ];

    return (
        <>
            <div className="about">
                <div className="jumbotron-about" style={{ backgroundColor: 'white' }}>
                    <h3 className='mt-4 display-4' style={{ fontFamily: "initial" }}>{props.title}</h3>
                    <p>
                        “Innovation Ignites Our Imagination, Fueling Passionate <span>Web & App Development</span>
                    </p>
                    <p>Welcome to AphiDynamics IT Solutions, where innovation meets excellence in the digital realm.At AphiDynamics, we embark on a journey to shape the digital landscape, offering a comprehensive uite of services tailored to elevate your online presence.As the proud owner of AphiDynamics IT Solutions, I am thrilled  to lead a team of dedicated professionals who share a passion for creating impactful digital solutions.</p>

                    {/* <img classname="aboutimg" src="" alt="img"/> */}

                    <p className="lead">
                        <Link className="btn btn-primary btn-lg" to="/contact" role="button">Contact Us</Link>
                    </p>
                </div>

            </div>

            <div className="additional-content-about">
                <div className="container">
                    <div className="row">
                        {additionalCont.map((ele, ind) => (
                            <div key={ind} className="col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h2 className="card-title">{ele.title}</h2>
                                        <p className="card-text">{ele.des}</p>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </div>

        </>

    );
}