import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xl">
          <div className='row justify-content-center d-flex align-items center'>

            <div className="col-6 d-flex justify-content-end">
              <div className="main-banner position-relative">
                <img src="images/main-banner-1.jpg"
                  className='img-fluid rounded-3' alt="main banner" />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.02/mo.</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>


            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-start gap-10  align-items-center">

                <div className="small-banner position-relative">
                  <img src="images/catbanner-01.jpg"
                    className='img-fluid rounded-3' alt="small banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>best sale</h4>
                    <h5>Laptops Max</h5>
                    <p>From $1999.00 or<br /> $41.02/mo.</p>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img src="images/catbanner-02.jpg"
                    className='img-fluid rounded-3' alt="small banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>New arrival</h4>
                    <h5>Buy IPad Air</h5>
                    <p>From $699.00 or <br />$41.02/mo. for 12 mo.</p>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img src="images/catbanner-03.jpg"
                    className='img-fluid rounded-3' alt="small banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>15% off</h4>
                    <h5>Smartwatch 7</h5>
                    <p>Shop the latest band<br /> sttyles and colors.</p>
                  </div>
                </div>


                <div className="small-banner position-relative">
                  <img src="images/catbanner-04.jpg"
                    className='img-fluid rounded-3' alt="small banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>free engraving</h4>
                    <h5>Airpodes Max</h5>
                    <p>High-fidelity playback & <br /> Ultra-low distortion.    </p>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xl">
          <div className="row">

            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service.png" alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From all orders over $7</p>
                  </div>
                </div>
               
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-02.png" alt="services" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className='mb-0'>Save Upto 25% off</p>
                  </div>
                </div>

                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-03.png" alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop with en Expert</p>
                  </div>
                </div>

                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-04.png" alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className='mb-0'>Get Factory Default Price</p>
                  </div>
                </div>

                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-05.png" alt="services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className='mb-0'>100% protected</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">

                <div className='d-flex align-items-center gap-30'>
                  <div>
                    <h5>Music $ Gming</h5>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>

                <div className='d-flex align-items-center gap-30'>
                  <div>
                    <h5>Smart T.V.</h5>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>


                <div className='d-flex align-items-center gap-30'>
                  <div>
                    <h5>Smart Watches</h5>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>


                <div className='d-flex align-items-center gap-30'>
                  <div>
                    <h5>Cameras</h5>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>


                <div className='d-flex align-items-center gap-30'>
                  <div>
                    <h5>Music $ Gming</h5>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>

                <div className='d-flex align-items-center gap-30'>
                  <div>
                    <h5>Smart T.V.</h5>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>


                <div className='d-flex align-items-center gap-30'>
                  <div>
                    <h5>Smart Watches</h5>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>


                <div className='d-flex align-items-center gap-30'>
                  <div>
                    <h5>Cameras</h5>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>



              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marquee-wrapper py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className='d-flex'>
                <div className='w-25 mx-5'>
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className='w-25 mx-5'>
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className='w-25 mx-5'>
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className='w-25 mx-5'>
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className='w-25 mx-5'>
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className='w-25 mx-5'>
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className='w-25 mx-5'>
                  <img src="images/brand-07.png" alt="brand" />
                </div>
              </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="section-heading">
                <h3>Our Latest Blogs </h3>
              </div>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home
