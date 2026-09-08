import profile from '../assets/zoomedprofile.png'
import headshot from '../assets/headshot2.jpg'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import devpost from '../assets/devpost.png'

function Home() {

    return  (
        <main>
            
            <div className="intro">
                <img src={headshot} alt="Divya" className="headshot"/>
                <div> 
                    <h1>Divya Ramaswamy</h1>
                    <p className = "subtitle"> Computer Science @ Georgia Tech</p>
                    <p> 
                        Hi! I'm a master's student in Computer Science at Georgia Tech interested in computer vision, robotics, and building technology that solves real world problems. 
                    </p>
                    <div className = "socials">
                        <a href="https://www.linkedin.com/in/divyagramaswamy/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn" className="social-icon"/>
                        </a>
                        <a href="https://github.com/divyagramaswamy" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="GitHub" className="social-icon"/>
                        </a>
                        <a href="https://devpost.com/divyagramaswamy?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" rel="noopener noreferrer">
                            <img src={devpost} alt="Devpost" className="social-icon"/>
                        </a>
                    </div>    

                </div>
                
                <img src={profile} alt="Divya" className="profile-photo"/>

                
            </div>
            
        </main>
    )


}

export default Home