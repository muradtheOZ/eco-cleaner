import React from "react";
import './Footer.css'
import logo from '../../../resources/images/logo.png'

export function FooterContainer() {
  return (
    <div className="">
    <footer className="footer-bs">
        <div className="row">
        	<div className="col-md-3 footer-brand animated fadeInLeft">
            	<img src={logo} alt="" />
                <p>Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam porttitor vitae orci nec ultricies. Curabitur vehicula, libero eget faucibus faucibus, purus erat eleifend enim, porta pellentesque ex mi ut sem.</p>
                <p>© 2022 Eco clean</p>
            </div>
        	<div className="col-md-4 footer-nav animated fadeInUp">
            	<h4>Menu —</h4>
            	<div className="col-md-6">
                    <ul className="list">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contacts</a></li>
                        <li><a href="#">Terms & Condition</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        	<div className="col-md-2 footer-social animated fadeInDown">
            	<h4>Follow Us</h4>
            	<ul>
                	<li><a href="#">Facebook</a></li>
                	<li><a href="#">Twitter</a></li>
                	<li><a href="#">Instagram</a></li>
                </ul>
            </div>
        	<div className="col-md-3 footer-ns animated fadeInRight">
            	<h4>Newsletter</h4>
                <p>All thing about eco cleaning</p>
                <p>
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Search for..."/>
                      <span className="input-group-btn">
                        <button className="btn btn-default" type="button"><span className="glyphicon glyphicon-envelope"></span></button>
                      </span>
                    </div>
                 </p>
            </div>
        </div>
    </footer>
    <section className="section-style-of-footer"><p>Developed by <a href="https://muradtheoz.netlify.app/">Murad Ahmed</a></p></section>

</div>
  );
}
