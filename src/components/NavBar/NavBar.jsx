import { Link } from "react-router-dom"

const NavBar = () => {
    return(

        <div className='flex p-4 border-2 justify-center border-white bg-gradient-to-r from-indigo-900 via-purple-700 to-pink-700'>
            <div className="p-4">
                <Link className="text-white text-3xl p-3 m-10 rounded-lg hover:bg-pink-900" to='/'>Home</Link>
                <Link className="text-white text-3xl p-3 m-10 rounded-lg hover:bg-pink-900" to='/about'>About</Link>
                <Link className="text-white text-3xl p-3 m-10 rounded-lg hover:bg-pink-900" to='/skills'>Skills</Link>
                <Link className="text-white text-3xl p-3 m-10 rounded-lg hover:bg-pink-900" to='/projects'>Projects</Link>
                <Link className="text-white text-3xl p-3 m-10 rounded-lg hover:bg-pink-900" to='/contact'>Contact</Link>
            </div>
        </div>
    )
}

export default NavBar;