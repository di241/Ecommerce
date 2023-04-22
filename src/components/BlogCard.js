import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = () => {
  return (
    <>
      <div className="col-3">
        <div className="blog-card">
          <div className="card-image">
            <img src="images/blog-1.jpg" className='img-fluid' alt="blog" />
          </div>
          <div className="blog-content">
            <p className="date">31March 2023</p>
            <h5 className="title">
              A Beautiful Sunday Morning Renaissance
            </h5>
            <p className="dec"> Reprehenderit adipisci voluptatibus impedit quasi sequi dolorem, eum esse distinctio deserunt commodi? Praesentium quasi nostrum officiis minima optio quod ullam. Eligendi, incidunt?</p>
            <Link to='/' className='button'>
              Read More
            </Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default BlogCard
