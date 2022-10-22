import '../header/header.scss';
import Vector from './Vector.png';
import Vector2 from './Vector2.png';

const Header = () => {
    return(
        <header className='backgroundPicture'>
            <div className="headerMenu">
                <img src={Vector} alt="beans" className="logo"/>
                <ul>
                    <li className='firtLeft'><a href="http://localhost:3000/">Coffee house</a></li>
                    <li className='left'><a href="http://localhost:3002/">Our coffee</a></li>
                    <li className='left'><a href="http://localhost:3001/">For your pleasure</a></li>
                </ul>             
            </div>
            <div className='centreText'>
                <h1>Everything you love about coffee</h1>
                <div className='animationForHr'>
                    <hr className='hrLeft'/>
                    <img src={Vector2} alt="beans" className='picBetweenLines'/>
                    <hr className='hrRight'/>
                </div>
                <div className='centreButton'>
                    <h2>We makes every day full of energy and taste</h2>
                    <h2>Want to try our beans?</h2>
                    <button>More</button>
                </div>
            </div>
        </header>
    )
}

export default Header;