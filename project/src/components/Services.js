
import Image1 from '../assests/Instant_Consultation.jpg';
import Image2 from '../assests/Book_Appointment.jpg';
import Image3 from '../assests/Self_Checkup.jpg';
import Image4 from '../assests/Health_Tips.jpg';
function Services(){
    
    const img_div={
        height:"250px",
        width:"250px"
    }

    const parent_div= {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        paddingLeft:"200px",
        paddingRight:"200px",
        
        backgroundColor:"#f9f9f9"
    }
    const child_div ={
        margin: "5px",        
        border: "10px solid hsla(0,0%,100%,.5)",
        backgroundColor: "#e3f2fd",
        textAlign: "center",
        borderRadius:"100"
    }
    return(
        <div>
            
            <h4 style={{textAlign:"center"}}>Best Services</h4>
            <p tyle={{textAlign:"center"}}>Love yourself enough to live a healthy lifestyle.</p>
            
            <div style={parent_div}>
            <div style={child_div} >
                <img src={Image1} alt="Instant Consultation" style={img_div}/>
                <p style={{fontWeight:"bold"}}>Instant Consultation</p>
            </div>
            <div style={child_div} >
                <img src={Image2} alt="Book Appointment" style={img_div}/>
                <p style={{fontWeight:"bold"}}>Book Appointment</p>
            </div>
            <div style={child_div} >
                <img src={Image3} alt="Self Checkup" style={img_div}/>
                <p style={{fontWeight:"bold"}}>Self Checkup</p>
            </div>
            <div style={child_div} >
                <img src={Image4} alt="Health Tips and Guidance" style={img_div}/>
                <p style={{fontWeight:"bold"}}>Health Tips and Guidance</p>
            </div>
            </div>
        </div>
    );
};

export default Services;