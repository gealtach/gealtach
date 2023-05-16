import leftArrow from '../../img/arrowLeft.svg';
import rightArrow from '../../img/arrowRight.svg';
import { useState } from 'react';
import { useEffect } from 'react';

const Slider = ({images}) => {

    const [currImg, setCurrImg] = useState(0);
    const length = images?.length;

    const nextImg = () => {
        setCurrImg(currImg === length -1 ?
            0 : currImg +1)
    }

    const preImg = () => {
        setCurrImg(currImg === 0 ?
            length -1 : currImg -1)
    }

    useEffect(() => {
        setTimeout(nextImg, 5000)
    }, [nextImg]);

    return(
        <div className='flex w-fit h-fit p-8 m-8 border-2 border-white rounded-lg'>
            <button className='w-16' onClick={preImg}><img src={leftArrow} alt="LA" /></button>
            {images.map((imagen, index) => {
                return(
                    <div key={index}>
                        {currImg === index &&
                            <img className='w-96 m-10 rounded-lg h-fit hover:scale-150' key={index} src={imagen} alt='cesar' />
                        }
                    </ div>
                )
            })}
            <button className='w-16' onClick={nextImg}><img src={rightArrow} alt="RA" /></button>
        </div>
    )
}

export default Slider;
