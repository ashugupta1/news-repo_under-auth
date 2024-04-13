import React from "react";
import './dib.css';
import image from '../assets/news.jpg'

const NewsIcon = ({title, description, src, url}) => {
  return (
      <div className="card bg-dark text-light mb-3 d-inline-block mx-3 mx-3 px-2 py-2 " style={{maxWidth:"345px"}}>
        {src? <img className="card-img-top"  src={src} alt="Card image cap" />:<img className="card-img-top" src={image} />
        
        }
       
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,50)}</h5>
          <p className="card-text">
            {description?description.slice(0,120):"he Congress hopes Dalit and minority votes of the VBA, BSP, and AIMIM will swing in its favour and Kunbi anger over Maratha quota issue will dent BJP."}
          </p>
          <a href={url} className="btn btn-primary" target="_blank">
            Read More
          </a>
        </div>
      </div>
  );
};

export default NewsIcon;
