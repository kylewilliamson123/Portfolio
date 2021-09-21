import React from 'react'
import {Link} from 'react-router-dom';
import Kyle from '/portfolio/src/Kyle.jpg';
import {Row, Col, Container} from 'reactstrap';

function Aboutme () {
    return(
        <div className ="AboutMe" id='AboutMe'>
            <div className="about-container">
                
                <div className='aboutme-c'>

                    <Container>
                        <Row>
                        <h1>A little bit about me</h1>
                        </Row>
                        <Row className="row">
                        
                        <Col md={6} className="contentp">
                        <p>I am a graduate from Southern Illinois University Edwardsville as of August 2021. I majored in Computer Managment and Information Systems. Throughout my undergraduate career, I learned a lot 
                             about networking, programming, project managment, and communcation. I am looking to start my career as a front-end developer. 
                             Personally and 
                             professionally I value hard work, family, and fun. </p>
                    
                            <p>Although I am a beginner at front-end development, I have created this website to showcase my skills and projects that I have completed thus far. 
                            I have spent many hours researching and learning how to create these projects and this website. I have greatly enjoyed learning and using the skills that I have accumulated. 
                            I am determined to continue to improve my skills to a point where I can contribute to a company on front-end development in the future.</p>
                        </Col>
                        <Col md={2}></Col>
                        <Col >
                            <img src={Kyle}></img>
                        </Col>
                        </Row>

                    </Container>








                {/* <h1>A little bit about me</h1>
                    <div className="aboutme-content">

                    
                    <p>I am a graduate from Southern Illinois University Edwardsville as of August 2021. I majored in Computer Managment and Information Systems. Throughout my undergraduate career, I learned a lot 
                    about networking, programming, project managment, and communcation. I am looking to start my career as a front-end developer, Java developer, or as a systems analyst. 
                    Access to my socials is located in the top right of the page, and a link to the work I have completed will be in the portfolio tab. Personally and 
                    professioanlly I value hard work, family, and fun. 
                    
                    Although I am a beginner at front-end development, I have created this website to showcase my skills and projects that I have completed thus far. 
                    I have spent many hours researching and learning how to create these projects and this website. I have greatly enjoyed learning and using the skills that I have accumulated. 
                    I am determined to continue to improve my skills to a point where I can contrubite to a company on front-end development in the future.</p>
                    
                    </div>
                    
                        <img src={Kyle}></img> */}
                    
                </div> 
            </div>
        </div>
        
    );
}
export default Aboutme;
