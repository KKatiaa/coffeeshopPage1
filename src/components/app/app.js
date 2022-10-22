import {Component} from 'react';
import './app.css';
import  Header from '../header/header';
import Aboutus from '../aboutus/aboutus';
import Footer from '../footer/footer';
import Ourbest from '../ourbest/ourbest';

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:''
        }
    }

    render(){
        return(
            <div>
                <div>
                    <Header/>
                </div>
                <div>
                  <Aboutus/>
                </div>
                <div>
                   <Ourbest/> 
                </div>     
                <div>
                    <Footer/>
                </div>       

            </div>
        );
    }
}

export default App;
