import About from "../components/aboutInf/About";
//@ts-ignore
import McDuck from '../resources/gif/McDuck.gif';

const AboutUs = () => {
    return (
        <>
        <About/>
        <div style={{textAlign: 'start'}}> 
        <img style={{width: '10%',position: 'fixed',bottom: 0}} src={McDuck}/>
        </div>
        </>
    )
}

export default AboutUs;
