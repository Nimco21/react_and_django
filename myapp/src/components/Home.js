import React from 'react'
import Products from './Products'
export default function Home() {
  return (
    <div>
      
       <h1 className="text-center text-warning">Latest Products</h1>
      <div id="carouselId" class="carousel slide" data-bs-ride="carousel">
        <ol class="carousel-indicators">
          <li
            data-bs-target="#carouselId"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="First slide"
          ></li>
          <li
            data-bs-target="#carouselId"
            data-bs-slide-to="1"
            aria-label="Second slide"
          ></li>
          <li
            data-bs-target="#carouselId"
            data-bs-slide-to="2"
            aria-label="Third slide"
          ></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <img
              src="4j.png"
              class="w-50 d-block"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              src="4.png"
              class="w-50 d-block "
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              src="66.png"
              class="w-50 d-block"
              alt="Third slide"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselId"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselId"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="about-section">
        <h1> About N/S-Shop</h1>
        <p>
            Welcome to our website! We are dedicated to providing exceptional services and solutions 
            tailored to your needs. Our team of experts ensures quality, creativity, and customer 
            satisfaction in every project. Explore our offerings and discover how we can help bring 
            your ideas to life. Let’s create something amazing together!
        </p>
    </div>
      
      <footer class="bg-warning text-white text-center py-3">
        <p className='text-dark'>&copy; N/S-ONLINE-SHOP</p>
    </footer>
    </div>
  )
}
