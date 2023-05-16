import iconHtml from '../../img/htmlRow.svg';
import iconCss from '../../img/cssRow.svg';
import iconJs from '../../img/jsRow.svg';
import iconReact from '../../img/reactRow.svg';
import iconRedux from '../../img/reduxRow.svg';
import iconEx from '../../img/exRow.svg';
import iconNode from '../../img/nodeRow.svg';
import iconPost from '../../img/postgreRow.svg';
import iconSeq from '../../img/seqRow.svg';
import iconGit from '../../img/gitRow.svg';
import iconGitHub from '../../img/githubRow.svg';
import iconMock from '../../img/mockittRow.svg';
import iconTail from '../../img/tailwindcss-icon.svg';
import iconBootstrap from '../../img/bootstrap-5-1.svg';

const Skills = () => {
    return(
        <div className='w-full flex justify-center'>
        <div className='flex w-fit h-fit p-8 m-8 border-4 border-white rounded-lg'>
            <h1 className='text-white text-5xl m-4'>S k i l l s</h1>
            <div className=''>
                <div className='flex rounded-lg m-4 bg-gradient-to-r from-indigo-900 via-purple-700 to-pink-700'>
                    <p className='text-3xl text-white m-4'>Front</p>
                    <a href="https://www.html.com" target='_blank' className='hover:bg-pink-700'>
                        <img className='w-24 m-4 p-2' src={iconHtml} alt="Html" />
                    </a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target='_blank' className='hover:bg-pink-700'>
                        <img className='w-24 m-4 p-2' src={iconCss} alt="Html" />
                    </a>
                    <a href="https://react.dev/" target='_blank' className='hover:bg-pink-700'>
                        <img className='w-24 m-4 p-2' src={iconReact} alt="Html" />
                    </a>
                    <a href="https://redux.js.org/" target='_blank' className='hover:bg-pink-700'>
                        <img className='w-24 m-4 p-2' src={iconRedux} alt="Html" />
                    </a>
                    <a href="https://tailwindcss.com/" target='_blank' className='hover:bg-pink-700'>
                        <img className='w-24 m-4 p-2' src={iconTail} alt="Html" />
                    </a>
                    <a href="https://getbootstrap.com/" target='_blank' className='hover:bg-pink-700'>
                        <img className='w-24 m-4 p-2' src={iconBootstrap} alt="Html" />
                    </a>
                </div>
                <div className='flex rounded-lg m-4 bg-gradient-to-r from-indigo-900 via-purple-700 to-pink-700'>
                    <p className='text-3xl text-white m-4'>Back</p>
                    <a href="https://nodejs.org/en" target='_blank' className='hover:bg-pink-700'>
                        <img className='w-24 m-4 p-2' src={iconNode} alt="Html" />
                    </a>
                    <a href="https://expressjs.com/" target='_blank' className='hover:bg-pink-700'>
                        <img className='w-24 m-4 p-2' src={iconEx} alt="Html" />
                    </a>
                    <a href="https://sequelize.org/" target='_blank' className='hover:bg-pink-700'>
                        <img className='w-24 m-4 p-2' src={iconSeq} alt="Html" />
                    </a>
                    <a href="https://www.postgresql.org/" target='_blank' className='hover:bg-pink-700'>
                        <img className='w-24 m-4 p-2' src={iconPost} alt="Html" />
                    </a>
                </div>
                <div className='flex rounded-lg m-4 bg-gradient-to-r from-indigo-900 via-purple-700 to-pink-700'>
                    <p className='text-3xl text-white m-4'>Tools</p>
                    <a href="https://www.javascript.com/" target='_blank' className='hover:bg-pink-700'>
                        <img className='w-24 m-4 p-2' src={iconJs} alt="Html" />
                    </a>
                    <a href="https://git-scm.com/" target='_blank' className='hover:bg-pink-700'>
                        <img className='w-24 m-4 p-2' src={iconGit} alt="Html" />
                    </a>
                    <a href="https://github.com/" target='_blank' className='hover:bg-pink-700'>
                        <img className='w-24 m-4 p-2' src={iconGitHub} alt="Html" />
                    </a>
                    <a href="https://mockitt.wondershare.com/" target='_blank' className='hover:bg-pink-700'>
                        <img className='w-24 m-4 p-2' src={iconMock} alt="Html" />
                    </a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Skills;