import React from 'react'
import '../App.scss';
import BannerImg from '.././assets/images/ColoredCaptain02.png';
import CartoonMe from '.././assets/images/CartoonMe.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImagePool from '.././context/ImagePool'

const Index = () =>{
    return(
        <div className="app">
            <img className="bannerImg" src={BannerImg}/>
            <div id="skills">
                <div className="col-lg-6">
                    <img className="cartoonMe pt-4" src={CartoonMe}/>
                </div>
                <div className="col-lg-6"></div>
                <div className="col-sm-12 skillImages">
                    {ImagePool.map((imgSrc, index)=> (<img src={imgSrc} key={index}/>))}
                </div>
            </div>
            <h1>Index</h1>
            <div className="testelement">
                <img/>
            </div>
        </div>
    )
}

export default Index;