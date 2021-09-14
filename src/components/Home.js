import React from 'react'
import {Link} from 'react-router-dom';

function Home () {
    return(
        <div className ="home" id='Home'>
            <h1 className="title">Hello, I'm Kyle Williamson.</h1>
                <h3>Front-End Developer</h3>

                <div className="icon-container">
                    <a href="https://github.com/kylewilliamson123" target="blank"> <i class="fab fa-github-alt"></i></a>
                    <a href="https://www.linkedin.com/in/kyle-williamson-7473411a8/" target ="blank"> <i className="fab fa-linkedin-in "></i> </a>
                    <a href = "Resume.pdf" download> <i className="far fa-file "></i> </a>
                </div>
            
        </div>
    );
}
export default Home;

