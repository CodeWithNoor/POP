import React from 'react'
import Navbar from './Navbar'
import video_1 from "../assest/top-video.mp4"
import Image_1 from "../assest/neon-bor.png"
import Image_2 from "../assest/border_bottom.png"
import Image_3 from "../assest/top-border.png"
import Image_4 from "../assest/bWo4zI-qhM2LTamGiSdEdg==.png"
import Image_5 from "../assest/FAf_tuSU5LNHncWuXIDO-Q==.png"
import Image_6 from "../assest/IMWeHiCdCFcXl1PVEuDPpw==.png"
import Image_7 from "../assest/tVn5HuFayfFC7iP0jVX9HA==.png"
// import Image_8 from "../assest/stop-image.png"
import Image_9 from "../assest/New Project (5).png"
import Image_10 from "../assest/image-10.png"
import video_2 from "../assest/section-2.mp4"
import Image_11 from "../assest/08d08dad90.gif"
import Image_12 from "../assest/image-12.png"
import video_3 from "../assest/section-3.mp4"
import video_4 from "../assest/racing-rec.mp4"
import Logo from "../assest/logo.png"
import Image_13 from "../assest/plate_2.png"
import Image_14 from "../assest/plate_3.png"
import Image_15 from "../assest/plate_4.png"
import Image_16 from "../assest/plate_5.png"
import Image_17 from "../assest/plate_6.png"
import Image_18 from "../assest/plate_8.png"
import Image_19 from "../assest/plate_9.png"
import Image_20 from "../assest/plate_1.png"
import Image_21 from "../assest/plate_7.png"
import Image_22 from "../assest/plate_10.png"
import Image_23 from "../assest/drop-image.png"
import Image_24 from "../assest/New Project (6).png"
import video_5 from "../assest/section-4.mp4"
import video_6 from "../assest/wheel.mp4"
import video_7 from "../assest/car.mp4"
import video_8 from "../assest/gold.mp4"
import video_9 from "../assest/section-5.mp4"
import "../css/Home.css"

const Home = () => {
  return (
    <>
      <section className='container'>
        <video className='bg-video' src={video_1} autoPlay="true" loop />
        <div id='navbar'><Navbar /></div>
        <div className='home-info row'>
          <div className="col">
            <img className='image-1' src={Image_1} alt='image-1' />
            <img className='logo' src={Logo} alt='logo' />
            <p className='title'>Master the Race, Claim the Chase</p>
            <button className='btn' type='button'>Add a call-to-action</button>
          </div>
        </div>

        <div className="border-bottom"><img src={Image_2} alt="" /></div>
      </section>

      <section className='container_1'>
        <video className='bg-video' src={video_2} autoPlay="true" loop />
        <div className="border-top"><img src={Image_3} alt="" /></div>

        <div className="secret-sauce">
          <div className="secret-sauce-info">
            <h1 className='title'>The Secret Sauce!</h1>
            <h1 className='unity'>WEB 3.0 + UNITY + INFLU3NCE</h1>
            <p className='gaming-info'>Join the ONLY actually thrilling gameplay on chain. <br />
              Payout Pursuit will be THE MULTICHAIN racing game of the GameFi universe. <br /> Gamers will have opportunities to win cryptocurrency prizes in daily, weekly, and monthly race events, as well as in special events.</p>
          </div>

          <div className="unity_col">
            <div className="col-1">
              <img src={Image_4} alt="" />
              <img src={Image_5} alt="" />
            </div>
            <div className="col-2">
              <img src={Image_6} alt="" />
              <img src={Image_7} alt="" />
            </div>
          </div>
        </div>

        <div className="border-bottom"><img src={Image_9} alt="" /></div>
      </section>

      <section className='container_2'>
        <video className='bg-video' src={video_3} autoPlay="true" loop />
        <video className='bg-video' src={video_3} autoPlay="true" loop />

        <div className="skills-meet">
          <div className="col-1">
            <img src={Image_10} alt='' />
            <h1 className='skills-title'>Where Skill</h1>
            <h1 className='skills-title'>Meets Thrill</h1>
            <p className='skills-info'>Payout Pursuit was conceived by a true gaming enthusiast, born with a passion for thrilling adventures in the digital realm. <br /><br />

              At Payout Pursuit, we're committed to delivering an unparalleled level of competitiveness, ensuring that everyone has a fair shot at success. Whether you're a seasoned gamer or just getting started, you can develop your skills and vie for the chance to win instant, substantial crypto payouts. This is not just another game; it's a thrilling journey where skill, strategy, and a dash of luck can lead to massive rewards.
            </p>
            <button className='btn'>Play Now</button>
          </div>
          <div className="col-2">
            <img src={Image_12} alt='' />
            <div className="recording-game">
              <img src={Image_11} />
              <video className='racing-video' src={video_4} autoPlay="true" loop controls />
            </div>
          </div>
        </div>

        <div className="border-bottom-plate">
          <img src={Image_13} alt="" />
          <img src={Image_14} alt="" />
          <img src={Image_15} alt="" />
          <img src={Image_16} alt="" />
          <img src={Image_17} alt="" />
          <img src={Image_18} alt="" />
          <img src={Image_19} alt="" />
          <img src={Image_20} alt="" />
          <img src={Image_21} alt="" />
          <img src={Image_22} alt="" />
        </div>
      </section>

      <section className='container_3'>
        < video className='bg-video' src={video_5} autoPlay="true" loop />

        <div className="core-vision">
          <div className="border-top"><img src={Image_23} alt="" /></div>
          <h1 className='core-vision-title'>Core Vision</h1>

          <div className="core-vision-info">
            <div className="col-1">
              < video className='video-circle' src={video_6} autoPlay="true" loop />
              <h1 className='drift-racing'>Drift Racing Game</h1>
              <p className='drift-racing-info'>To create an engaging, browser-friendly, skill-based game that seamlessly integrates cryptocurrency stakes.</p>
            </div>
            <div className="col-2">
              < video className='video-circle' src={video_7} autoPlay="true" loop />
              <h1 className='game-assests'>Ownable in-game assets</h1>
              <p className='game-assests-info'>Payout NFTs you own become playable assets within the game, enhancing your gameplay experience</p>
            </div>
            <div className="col-3">
              < video className='video-circle' src={video_8} autoPlay="true" loop />
              <h1 className='win-mechanism'>UNFATHOMABLE WIN MECHANISM</h1>
              <p className='win-mechanism-info'>To give a fair chance of becoming The Drift King, who seizes the lion's share of the winnings. </p>
            </div>
          </div>
        </div>

        <div className="border-bottom"><img src={Image_24} alt=''/></div>
      </section>

      <section className='container_4'>
      < video className='bg-video' src={video_9} autoPlay="true" loop />

      </section>
    </>
  )
}

export default Home