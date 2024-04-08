import React from 'react';

import './footer.css';

export default function Footer() {
    
    return (
        
       <>

      <div className="footer">
       <div className="text-center-footer mt-4" >
    <div className="row-footer">
        <div className="col-md-4-footer" >
            <a className="navbar-brand-footer" href="/"><img src="./newonebg.png" style={{width: "200px"}} alt="img" /></a>
            <a className="navbar-brand-footer" href="/" style={{ fontSize: "26px"}} id="ok">APHIDYNAMICS <br /><p style={{fontSize: "10px"}} id="ok2">Development | Training | Digital Marketing</p></a>
        </div>
        <h6 className="col-md-12-footer text-center">Welcome to AphiDynamics IT Solutions, where innovation meets excellence in the digital realm.At AphiDynamics, we embark on a journey to shape the digital landscape, offering a comprehensive suite of services tailored to elevate your online presence.</h6>

        <div className="col-md-4-footer-two">

            <h2 className='text-center mt-4'>Services</h2>
            <ul>
                <li>
                    <i className="fa fa-check-square" aria-hidden="true"></i>
                    <a href="/">  Web Design and Development</a>
                </li>
                <li>
                    <i className="fa fa-check-square" aria-hidden="true"></i>
                    <a href="/">  Mobile App Development</a>
                </li>
                <li>
                    <i className="fa fa-check-square" aria-hidden="true"></i>
                    <a href="/">  Digital Marketing</a>
                </li>
                <li>
                    <i className="fa fa-check-square" aria-hidden="true"></i>
                    <a href="/">  Social Media Marketing</a>
                </li>
                <li>
                    <i className="fa fa-check-square" aria-hidden="true"></i>
                    <a href="/">  Graphics Design</a>
                </li>
            </ul>
        </div>

        <div className="col-md-4-footer-three">

            <h2 className='text-center mt-4'>Get in touch</h2>

            <ul>
                <li>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <a href="https://maps.google.com?q=Surywanshi Nagar, Cidco Waluj Mahanagar-1, Chhatrapti Sambhjinagar - 431136" target="_blank" rel="noopener noreferrer"> Surywanshi Nagar, Cidco Waluj Mahanagar-1, Chhatrapti Sambhjinagar - 431136.</a>
                </li>
                <li>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <a href="mailto:info@aphidynamics.in"> info@aphidynamics.in</a></li>
                <li>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <a href="/"> Tel:+91 820 895 6648</a>
                </li>
            </ul>
            <div className="footericon">
                <i className="fab fa-facebook mx-2" aria-hidden="true"></i>
                <i className="fab fa-instagram mx-2" aria-hidden="true"></i>
                <i className="fab fa-linkedin mx-2" aria-hidden="true"></i>
                <i className="fab fa-google-plus mx-2" aria-hidden="true"></i>
            </div>
        </div>
         
    </div>
    
</div>
      </div>


       </>

    );
}

