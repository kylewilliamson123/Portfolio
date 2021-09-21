import React from 'react'
import emailjs from 'emailjs-com';
import Button from 'react-bootstrap'



function Contact () {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('Gmail', 'template_zf6fjnq', e.target, 'user_eLvZJto2Wc9htquw6ehEr')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }

    return(
        <div className=" container-c">
        <div className="contact" id='ContactMe'>
            
            <div className="email-container">
            <h1>Email Me</h1>
                <form onSubmit={sendEmail}>
                    <div className="name">
                        <input type="text" className="form-control" placeholder="Name" name="name"/>
                    </div>
                    <div className="emailAdress">
                        <input type="email" className="form-control" placeholder="Your Email" name="email"/>
                    </div>
                    <div className="eSubject">
                        <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                    </div>
                    <div className="message">
                        <textarea type="text" className="form-control" cols="30" rows="8" placeholder="Your message" name="message"/>
                    </div>
                    <div className="submit">
                    
                        <input type="submit" id="button" className="btn" value="Send Email"/>
                    </div>
                </form>
            </div>
            
        </div>
        </div>
    );
}
export default Contact;