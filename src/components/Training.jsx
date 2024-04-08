import React from 'react';
import './training.css';

export default function Training(props) {
  return (
    <>

      <h3 className='text-center mt-4 display-6' style={{ fontFamily: "initial" }}>{props.title}</h3>
      <h4 className='text-center mt-2'>▽___ Following training will be provided by us ___▽</h4>

      <div className="container mt-3">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="./trainingImg/fullstackdev.png" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="./trainingImg/javadev.jpg" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="./trainingImg/htmlcssjs.jpg" alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="./trainingImg/reactok.jpg" alt="four slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="./trainingImg/ai.avif" alt="fifth slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="./trainingImg/machinelearn.avif" alt="six slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

    </>
  );
}
