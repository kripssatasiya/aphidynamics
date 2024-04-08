import React from 'react';
import './testimonials.css';

export default function Testimonials(props) {

  const testimoni = [
    {
      p: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta leo auctor nisi consequat, quis hendrerit mi venenatis."', img: "./trainingImg/one.avif", alt: "Avatar", name: "John Doe", company: "CEO, Company Name"
    },
    {
      p: ' "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."', img: " ./trainingImg/two.avif", alt: "Avatar", name: "Jane Smith", company: "Marketing Manager, Company XYZ"
    },
    {
      p: '"Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed."', img: "./trainingImg/three.avif", alt: "Avatar", name: "Alice Johnson", company: "Creative Director, Design Studio"
    }
  ]

  return (
    <>
      <h6 className='testimonial-header  text-center'>WHAT OTHERS SAY</h6>
      <h3 className='testimonial-header text-center  mt-1 display-6' style={{ fontFamily: "initial" }}>{props.title}</h3>
       
   
      <div className="testimonial-container">
      {testimoni.map((ele , ind) => (
        <div  key={ind} className="testimonial-card">
          <div className="testimonial-card-content">
            <p className="testimonial-card-text">
              {ele.p}
            </p>
            <div className="testimonial-card-author">
              <img src={ele.img} alt={ele.alt} className="testimonial-card-avatar" />
              <div className="testimonial-card-author-info">
                <h3 className="testimonial-card-author-name">{ele.name}</h3>
                <p className="testimonial-card-author-designation">{ele.company}</p>
              </div>
            </div>
          </div>
        </div>
    ))}
      </div>

    </>
  );
}
