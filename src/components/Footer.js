import React from 'react';
import { Link } from 'react-router-dom';
import {BsLinkedin,BsYoutube,BsGithub,BsInstagram} from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className="container-xl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img srcSet='images/newsletter.png' alt='newsletter' />
                <h3 className='text-white mb-0'>Sign Up for Newsletter</h3>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email"
                  aria-label="Your Email"
                  aria-describedby="basic-addon2" />
                <span className="input-group-text p-1 " id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className='py-3'>
        <div className="container-xl">
          <div className="row">
            <div className="col-4">
              <h5 className='text-white mb-3'>Contact Us</h5>
              <div>
                <address className='text-white py-1 fs-9'>
                  Home No. : 554, Near HighSchool<br />
                  Mahadevpara, Bhader.<br />
                  Pincode: 365645
                </address>
                <a href='tel:+91 6355942455' className='text-white d-block mb-0 mt-2'>
                  +91 6355942455
                </a>
                <a href='email:dishantshiroya35050@gmail.com' className='text-white d-block mb-0'>
                dishantshiroya35050@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30">
                  <a href="">
                    <BsLinkedin className='text-white fs-4' />
                  </a>
                  <a href="">
                    <BsGithub className='text-white fs-4'/>
                  </a>
                  <a href="">
                    <BsYoutube className='text-white fs-4'/>
                  </a>
                  <a href="">
                    <BsInstagram className='text-white fs-4'/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h5 className='text-white mb-3'>Information</h5>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-1'>Privacy Policy</Link>
                <Link className='text-white py-1'>Refund Policy</Link>
                <Link className='text-white py-1'>Shipping Policy</Link>
                <Link className='text-white py-1'>Terms & conditions</Link>
                <Link className='text-white py-1'>Blogs</Link>
              </div>
              <div></div>
            </div>
            <div className="col-3">
              <h5 className='text-white mb-3'>Account</h5>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-1'>About us</Link>
                <Link className='text-white py-1'>FAQ</Link>
                <Link className='text-white py-1'>Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h5 className='text-white mb-3'>Quick Links</h5>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-1'>Laptops</Link>
                <Link className='text-white py-1'>Headphones</Link>
                <Link className='text-white py-1'>Tablates</Link>
                <Link className='text-white py-1'>Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className='py-3'>
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <p className='text-center mb=0 text-white'>&copy; {new Date().getFullYear()}: Powered by Dishant Shiroya
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
