import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer mt-auhref py-3 bg-dark bottom">
          <div className="row justify-content-center mb-3 w-100" >
          <div className="col-auto">
            <span className="text-white">Thankyou for use Our Services</span>
          </div>
          </div>
          <div className="row justify-content-center w-100">
          <div className="col-auto">
            <a href="https://www.facebook.com/"><i className="fa fa-facebook" style={{fontSize:20, color:"white"}}></i>  </a>
          </div>
          <div className="col-auto">
            <a href="https://www.youtube.com/"><i className="fa fa-youtube-play" style={{fontSize:20, color:"white"}}></i>  </a>
            </div>
          <div className="col-auto">
            <a href="https://www.twitter.com/"><i className="fa fa-twitter" style={{fontSize:20, color:"white"}}></i>  </a>
            </div>
          <div className="col-auto">
            <a href="https://www.instagram.com/"><i className="fa fa-instagram" style={{fontSize:20, color:"white"}}></i></a>
            </div>
          <div className="col-auto">
            <a href="https://www.whatsapp.com/"><i className="fa fa-whatsapp" style={{fontSize:20, color:"white"}}></i>  </a>
            </div>
            </div>
      </footer>
    </>
  );
}

export default Footer;
