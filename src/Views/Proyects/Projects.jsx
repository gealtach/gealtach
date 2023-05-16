import Slider from "../../components/Slider/Slider";
import img1 from '../../img/img1.png';
import img2 from '../../img/img2.png';
import img3 from '../../img/img3.png';
import img4 from '../../img/img4.png';
import img5 from '../../img/coder1.png';
import img6 from '../../img/coder2.png';
import img7 from '../../img/coder3.png';
import img8 from '../../img/coder4.png';
import img9 from '../../img/coder5.png';

const imgArray = [img1, img2, img3, img4];
const imgArray2 = [img5, img6, img7, img8, img9]

const Projects = () => {
    return(
        <div className="flex justify-center">
        <div className='flex w-fit h-fit p-8 m-8 border-4 border-white rounded-lg'>
            <div className='flex w-fit h-fit p-8 m-8 border-4 border-white rounded-lg flex-col bg-gradient-to-r from-indigo-900 via-purple-700 to-pink-700'>
                <h1 className="text-white text-4xl">Pokemon project</h1>
                <Slider images={imgArray} />
            </div>
            <div className='flex w-fit h-fit p-8 m-8 border-4 border-white rounded-lg flex-col bg-gradient-to-r from-indigo-900 via-purple-700 to-pink-700'>
                <h1 className="text-white text-4xl">Coder Game</h1>
                <Slider images={imgArray2} />
            </div>
        </div>
        </div>
    )
}

export default Projects;