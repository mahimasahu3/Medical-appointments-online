
import Image1 from '../assests/Instant_Consultation.jpg';
import Image2 from '../assests/Book_Appointment.jpg';
import Image3 from '../assests/Self_Checkup.jpg';
import Image4 from '../assests/Health_Tips.jpg';
function Services(){
    const img_div={
        height:"200px",
        width:"200px"
    }
    return(
        <div>
            <h4>Best Services</h4>
            <p>Love yourself enough to live a healthy lifestyle.</p>
            <div >
                <img src={Image1} alt="Instant Consultation" style={img_div}/>
                <p>Instant Consultation</p>
            </div>
            <div>
                <img src={Image2} alt="Book Appointment" style={img_div}/>
                <p>Book Appointment</p>
            </div>
            <div>
                <img src={Image3} alt="Self Checkup" style={img_div}/>
                <p>Self Checkup</p>
            </div>
            <div>
                <img src={Image4} alt="Health Tips and Guidance" style={img_div}/>
                <p>Health Tips and Guidance</p>
            </div>
        </div>
    );
};

export default Services;