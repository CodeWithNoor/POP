import React from 'react'
import Navbar from './Navbar'
import "../css/Home.css"


const Home = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <video id="background-video" autoPlay="true" muted loop>
          <source src="./assest/top-video1.mp4" type="video/mp4" />
        </video>
        <Navbar />


        <div className="containers">
          <div className="border-image">
            <img src="./assest/2TPRgTsb1nZ30fG1sycISg==.png" alt="" />
          </div>

          <div className="home-info">
            <div className="logo-image">
              <img src="./assest/logo.png" alt="" />
            </div>

            <div className="title-info">
              <p className='title'>Master the Race, Claim the Chase</p>
              <button>Add a Call-to-Action</button>
            </div>
          </div>
        </div>

        <div className="border_bottom">
          <img src="./assest/border_bottom.png" alt="" srcset="" />
         </div>
      </div>
    </>
  )
}

export default Home