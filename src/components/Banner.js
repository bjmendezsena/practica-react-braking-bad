import React,{Component} from 'react';
import cloud1 from './assets/cloud1.png';
import cloud2 from './assets/cloud2.png';
import cloud3 from './assets/cloud3.png';
import cloud4 from './assets/cloud4.png';
import cloud5 from './assets/cloud5.png';
import logo from './assets/logo.png';


class Banner extends Component {
    render() { 
        return <div className = "banner">
            <img id="text" src={logo}/>
            <div className="clouds">
                <img id='1' src={cloud1}/>
                <img id='2' src={cloud2}/>
                <img id='3' src={cloud3}/>
                <img id='4' src={cloud4}/>
                <img id='5' src={cloud5}/>
                <img id='6' src={cloud1}/>
                <img id='7' src={cloud2}/>
                <img id='8' src={cloud3}/>
                <img id='9' src={cloud4}/>
                <img id='10' src={cloud5}/>
            </div>
        </div>;
    }
}
 
export default Banner;