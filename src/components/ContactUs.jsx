import React from 'react';
import './contact.css';
export default function ContactUs(props) {
    return (
      
        <div className="contactform">
        <div className="container  mt-4">
            <div className="row">
                <div className="col-md-2">
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <img src="./img/contactbg.png" alt="contact" className='img' /> 
                    {/* <h3 className='text-center mt-4 display-6' style={{fontFamily : "initial"}}>{props.title}</h3> */}
                        <h4 className='text-center mt-2'>We'd love to hear from you!</h4>
                    </div>
                    
                    <form  id="contactForms" className="contact-form form-validate" method="post" >
                        <div className="row">
                            <div className="col-sm-12 mb-3">
                                <div className="form-group">
                                    <label className="required-field" htmlFor="firstName">Full Name</label>
                                    <input type="text" className="form-control" id="firstName" name="full_name" placeholder="Full Name" />
                                </div>
                            </div>
                    
                            <div className="col-sm-6 mb-3">
                                <div className="form-group">
                                    <label className="required-field" htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" placeholder="Email" />
                                </div>
                            </div>
                    
                            <div className="col-sm-6 mb-3">
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" className="form-control" id="phone" name="phone_number" placeholder="Phone Number" />
                                </div>
                            </div>
                    
                            <div className="col-sm-12 mb-3">
                                <div className="form-group">
                                    <label className="required-field" htmlFor="message">Address</label>
                                    <textarea className="form-control" id="message" name="message" rows="4" placeholder="Address…"></textarea>
                                </div>
                            </div>
                    
                            <div className="col-sm-12 mb-3 text-center">
                                <button type="submit" name="submit" className="btn btn-primary">Submit</button>
                            </div>
                    
                        </div>
                    </form>
                </div>
                <div className="col-md-2">
                </div>
                 
            </div>
        </div>
    </div>
        
    );
}
