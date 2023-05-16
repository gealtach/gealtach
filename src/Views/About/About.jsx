import avatar from './me.png';

const About = () => {
    return(
        <div className='flex w-fit h-fit p-8 m-8 border-4 border-white rounded-lg'>
            <div className='w-1/4 p-10'>
                <img className='w-96 rounded-3xl' src={avatar} alt="cesar" />
            </div>
            <div className='p-10 flex w-3/4'>
                <p className='text-white text-3xl w-1/2 p-10'>
                    Hola, soy César, soy desarrollador web Full Stack
                    con experiencia construyendo sitios y aplicaciones web.
                    Me expecializo en JavaScript y tengo experiencia trabajando con
                    React.js Node.js, Express.js, Sequelize.js,
                    Postgre, GitHub y Scrum.
                    <br/><br/><br/>
                    Tengo experiencia en construcción y como conductor,
                    un día decidí cambiar mi vida y me sume al mundo tech,
                    donde dentro de mi busqueda encontré Henry,
                    ese día cambió mi vida, aprendí a programar y adquirí habilidades para 
                    enfrentar el mundo laboral y hacer de mi un mejor desarrollador.
                    Tengo la capacidad de automotivarme, soy autodidacta y responsable.
                </p>
                <br /><br /><br />
                <p className='text-white text-3xl w-1/2 p-10'>
                    Hi there I'm Cesar, I am a Full Stack Web developer with experience 
                    building websites and web applications. I specialize
                    in JavaScript and have experience working with 
                    React.js, Redux.js, Node.js, Express.js, Sequelize.js,
                    Postgre, GitHub and Scrum.
                    <br /><br /><br />
                    I've experience in construction and as a driver, 
                    one day I decided to change my life getting on board 
                    in tech area and looking to everywhere I find Henry, 
                    that day change my entire life, I set up my coding 
                    skills and now I'm ready to affront jobs to be a 
                    better developer and put all of me on my job.
                    I'm self motivated, autodidact and responsible.
                </p>
            </div>
        </div>
    )
}

export default About;