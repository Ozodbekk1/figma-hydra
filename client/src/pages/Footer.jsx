import vectorIcon from '../../public/imgs/Vector.png'
import FacebookIcon from '../assets/facebook.png'
import TwitterIcon from '../assets/twitter.png'
import InstagramIcon from '../assets/instagram.png'
import LinkedInIcon from '../assets/linkedin.png'
import telegramIcon from '../assets/telegram.png'
const Footer = () => {
  return (
    <>
    <div className='flex flex-row justify-around items-center py-7 sm:hidden md:flex outlinesContainer'> 
    <div>
      <img src={vectorIcon} alt="VectorIcon" />
    </div>
    <div>
      <h1>
        About <br />
        Services <br />
        Technology <br />
        Join HYDRA
      </h1>
    </div>
    <div>
      <h1>
      F.A.Q <br />
      Sitemap <br />
      Conditions <br />
      LIcenses 
      </h1>
    </div>
    <div>
      <h1>
        Socialize with HYDRA 
      </h1>
      <a href="http://facebook/ozodbek">Facebook</a> <br />
      <a href="http://x/ozodbek_w">X</a> <br />
      <a href="http://linkedin.com/in/ozodbekk1">LinkedIn</a> <br />
      <a href="http://instagram/ozodbek_w">Instagram</a> <br />
    </div>
    </div>
    <div className='flex flex-col justify-center sm:flex md:hidden outlinesContainer'>
    <div className='flex flex-row justify-around items-center py-7'>
      <img src={vectorIcon} alt="VectorIcon" /> 
    </div>
    <h1 className='text-center'>
        Socialize with HYDRA
      </h1>
     <div className='footerIcon flex flex-row justify-around py-5'>
      <a href="http://t.me/ozodbek_w" target="_blank" rel="noopener noreferrer">
        <img src={telegramIcon} alt="fu" />
      </a>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <img src={FacebookIcon} alt="fu" />
      </a>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <img src={TwitterIcon} alt="fu" />
      </a>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <img src={InstagramIcon} alt="fu" />
      </a>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <img src={LinkedInIcon} alt="fu" />
        </a>
     </div>
    </div>
    <hr />
    <div className='flex flex-col justify-center items-center py-5 gap-3 sm:flex md:hidden'>
      <h1>
        By A.Ozodbek
      </h1>
      <h1 className='text-center'>
        © 2025 HYDRA. All rights reserved
      </h1>
      <h1>
        Privacy Policy | Terms of Use
      </h1>
    </div>
    </>
  )
}

export default Footer
