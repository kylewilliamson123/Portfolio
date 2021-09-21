import React from 'react'
import shop from '/portfolio/src/shop.png';
import bayer from '/portfolio/src/bayer1.PNG';
import music from '/portfolio/src/musicplayer.PNG';
import weather from '/portfolio/src/weather1.PNG';
import {Row, Col, Container} from 'reactstrap';

function Projects () {
    return(
        <div className='container-p'>
        <div className="projects" id='Projects'>
            <h1>Projects</h1>
                <div className="project-container">
                    
                    <Row>
                        <Col md={3}>
                        <div className='project1' id="p1" style={{ backgroundImage:`url(${shop})`}}>
                    <a href="https://github.com/kylewilliamson123/react-shop-ex" target="blank"> <i class="fab fa-github-alt" ></i></a>
                    <a target='blank' href='https://fakeshopapi123.netlify.app/'><button> Live View</button></a>   
                    </div>
                        </Col>
                        <Col md={3}>
                        <div className='project3' style={{ backgroundImage:`url(${music})`}}>
                    <a href="https://github.com/kylewilliamson123/Js-Music-Player" target="blank"> <i class="fab fa-github-alt" ></i></a>
                    <a target='blank' href='https://jsmusicplayer123.netlify.app/'><button> Live View</button></a>   
                        
                    </div>
                        </Col>
                        <Col md={3} >
                        <div className='project4'  style={{ backgroundImage:`url(${weather})`}}>
                    <a href="https://github.com/kylewilliamson123/JS-Weather-App" target="blank"> <i class="fab fa-github-alt" ></i></a>
                    <a target='blank' href='https://simpleweatherapi.netlify.app/'><button> Live View</button></a>   
                        
                    </div>
                        </Col>
                        <Col md={3}>
                        <div className='project2'  style={{ backgroundImage:`url(${bayer})`}}>
                    <a href="https://github.com/kylewilliamson123/bayer-onboarding" target="blank"> <i class="fab fa-github-alt" ></i></a>
                      
                    </div>
                        </Col>
                    </Row>
                    
                    
                    
                    
                    
                    {/* <div className='project1' style={{ backgroundImage:`url(${shop})`}}>
                    <a href="https://github.com/kylewilliamson123/react-shop-ex" target="blank"> <i class="fab fa-github-alt" ></i></a>
                    <a target='blank' href='https://fakeshopapi123.netlify.app/'><button> Live View</button></a>   
                    </div>

                    <div className='project3' style={{ backgroundImage:`url(${music})`}}>
                    <a href="https://github.com/kylewilliamson123/Js-Music-Player" target="blank"> <i class="fab fa-github-alt" ></i></a>
                    <a target='blank' href='https://jsmusicplayer123.netlify.app/'><button> Live View</button></a>   
                        
                    </div>

                    <div className='project4' style={{ backgroundImage:`url(${weather})`}}>
                    <a href="https://github.com/kylewilliamson123/JS-Weather-App" target="blank"> <i class="fab fa-github-alt" ></i></a>
                    <a target='blank' href='https://simpleweatherapi.netlify.app/'><button> Live View</button></a>   
                        
                    </div>
                    
                    <div className='project2'  style={{ backgroundImage:`url(${bayer})`}}>
                    <a href="https://github.com/kylewilliamson123/bayer-onboarding" target="blank"> <i class="fab fa-github-alt" ></i></a>
                    </div> */}

                </div>
        </div>
        </div>
    );
}
export default Projects;