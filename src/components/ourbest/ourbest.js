import {Component} from 'react';
import './ourbest.scss';
import Article from './article.png';
import Article1 from './article1.png';
import Article2 from './article2.png';
import UncontrolledExample from './carousel.js';

class Articles extends Component{
    constructor(props){
        super(props);
    }

    render() {
        const {description, price, img} = this.props;
        return (
            <div className='backImgSmall'>
                <img src={img} alt="goods"/>
                <h4>{description}</h4>
                <h4>{price}</h4>
            </div>
        );
    }
}

function Ourbest () {
    return (
        <div className='backImg'>
            <h4 className='title'>Our best</h4>
            <div className='goods'>
                <div className="placing"><Articles description="Solimo Coffee Beans 2 kg" price="10.73$" img={Article}/></div>
                <div className="placing"><Articles description="Presto Coffee Beans 1 kg" price="15.99$" img={Article1}/></div>
                <div className="placing"><Articles description="AROMISTICO Coffee 1 kg" price="6.99$" img={Article2}/></div>
            </div>
        </div>
    );
}

export default Ourbest;