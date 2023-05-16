// import style from './Landing.module.css';
import { Link } from 'react-router-dom';
import dektop from '../../img/deskt.svg';
import icon1 from '../../img/icon1.png';
import icon2 from '../../img/icon2.png';
import icon3 from '../../img/icon3.png';

const Landing = () => {
    return(
        <div className='flex w-fit h-fit p-8 m-8 border-4 border-white rounded-lg'>
            <div className='w-fit h-fit p-8 m-20 border-4 border-white rounded-lg'>
                <h1 className='text-5xl text-white m-5 '>Hi there!... I'm Cesar, I am a Full Stack  Web Developer.</h1>
                <p className='text-3xl text-white ml-10'>focused on crafting the Tools you are looking for. </p>
                <Link to='/about' className='flex flex-col shadow-purple-500/50 shadow-lg w-fit p-8 m-20 border-4 hover:opacity-50 border-white rounded-lg bg-gradient-to-r from-indigo-900 via-purple-700 to-pink-700'> 
                    <h1 className='text-5xl text-white'>Let's to know about me!!</h1>
                    <div className='flex'>
                        <img className='m-5 p-3' src={icon1} alt="icon1" />
                        <img className='m-5 p-3' src={icon2} alt="icon2" />
                        <img className='m-5 p-3' src={icon3} alt="icon3" />
                    </div>
                </Link>
            </div>
            <div className='ml-40 mr-96 mt-56'><img src={dektop} alt="Cesar" /></div>
        </div>
    )
}

export default Landing;