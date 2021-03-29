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
{/* ============ SKILLS =========== */}
            <div id="skills">
                <div className="col-lg-6">
                    <img className="cartoonMe pt-4" src={CartoonMe}/>
                </div>
                <div className="col-lg-6"></div>
                <div className="col-sm-12 row skillImage">
                    {ImagePool.map((img, index)=> (
                        <div className="col-md-2 pl-5">
                            <img src={img.src} key={index} className={"skillImage"+index}/>
                            <p>{img.text}</p>
                        </div>      
                    ))}
                </div>
            </div>
{/* ================= PROJECTS =================== */}
            <div className="projects row">
                <div className="project1 col-md-6">
                    <div className="projectImage1"></div>
                </div>
                <div className="project2 col-md-6">
                    <div className="projectImage2"></div>
                </div>
                {/* <div className="project3 col-md-6">
                    <div className="projectImage3"></div>
                </div> */}
            </div>
{/* ================= FOOTER =================== */}
            <div>
                
            </div>
            <h1>Index</h1>
            <div className="testelement">
                <img/>
            </div>
        </div>
    )
}

export default Index;