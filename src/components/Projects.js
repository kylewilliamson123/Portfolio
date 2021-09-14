import React from 'react'
import shop from '/portfolio/src/shop.png';
import bayer from '/portfolio/src/bayer1.PNG';
import music from '/portfolio/src/musicplayer.PNG';
import weather from '/portfolio/src/weather1.PNG';

function Projects () {
    return(
        <div className="projects" id='Projects'>
            <h1>projects</h1>
                <div className="project-container">
                    <div className='project1' style={{ backgroundImage:`url(${shop})`}}>
                        
                        
                    </div>
                    

                    <div className='project2'  style={{ backgroundImage:`url(${bayer})`}}>
                        
                        
                    </div>

                    <div className='project3' style={{ backgroundImage:`url(${music})`}}>
                        
                        
                    </div>

                    <div className='project4' style={{ backgroundImage:`url(${weather})`}}>
                        
                        
                    </div>
                    

                </div>
        </div>
    );
}
export default Projects;