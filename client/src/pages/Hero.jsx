import MaskPng from '../../public/imgs/maskPng.png'
import './pages.css'
import {Button} from '../components/ui/button'

const Hero = () => {
  return (
    <div className="bg-primary py-5 flex items-center justify-between justify-around sm:flex-col-reverse gap-0 md:flex-row leading-10">
      <div className=''>
        <h1 className='flex font-mono spanss flex-col '>
        <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Dive</span> Into The Depths <br />
        Of <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Virtual Reality</span>
        </h1>
        <p className='paragraph flex md:block sm:hidden'>
          orem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore.
        </p>
        <Button className='rounded-full buttonHero'>
          Build your world
        </Button>
      </div>
      <div className='w-auto h-auto'>
        <img src={MaskPng} alt="mask" />
      </div>
    </div>
  )
}

export default Hero
