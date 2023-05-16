import iconMail from '../../img/gmail.svg';
import iconWs from '../../img/whatsapp.svg';
import iconGh from '../../img/github.svg';
import iconLinked from '../../img/iconmonstr-linkedin-3.svg';

const Contact = () => {
    return(
        <div className='flex justify-center'>
        <div className='flex-col w-fit h-fit p-8 m-8 border-4 border-white rounded-lg'>
            <h1 className="text-white text-5xl">We can be in touch here:</h1>
            <div className="flex w-fit h-fit p-8 m-8 border-4 border-white rounded-lg bg-gradient-to-r from-indigo-900 via-purple-700 to-pink-700">
                <a href="mailto:cleivaj93@gmail.com" target='_blank' className='hover:bg-pink-700'>
                    <img className='w-24 m-4 p-2' src={iconMail} alt="Html" />
                </a>
                <a href="https://api.whatsapp.com/send/?phone=56923625470&text&app_absent=0" target='_blank' className='hover:bg-pink-700'>
                    <img className='w-24 m-4 p-2' src={iconWs} alt="Html" />
                </a>
                <a href="https://github.com/gealtach/" target='_blank' className='hover:bg-pink-700'>
                    <img className='w-24 m-4 p-2' src={iconGh} alt="Html" />
                </a>
                <a href="https://www.linkedin.com/in/cesar-leiva/" target='_blank' className='hover:bg-pink-700'>
                    <img className='w-24 m-4 p-2' src={iconLinked} alt="Html" />
                </a>
            </div>
        </div>
        </div>
    )
}

export default Contact;