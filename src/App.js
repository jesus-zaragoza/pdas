import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png"
import CortanaImage from "./images/cortana.png"
import SiriImage from "./images/siri.png"

function App() {
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistants</p>
                </div>
            </section>
            
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-3">
                            <ProfileCard 
                                title="Alexa" 
                                handle="@alexa99" 
                                imageURL={AlexaImage} 
                                description="Alexa was created by Amazon and helps you buy things." 
                            />
                        </div>
                        <div className="column is-3">
                            <ProfileCard 
                                title="Cortana" 
                                handle="@cortana32" 
                                imageURL={CortanaImage}
                                description="Cortana was created by Microsoft. Who knows?"
                            />
                        </div>
                        <div className="column is-3">
                            <ProfileCard 
                                title="Siri" 
                                handle="@siri69" 
                                imageURL={SiriImage}
                                descrption="Siri was created by Apple and it is being phased out"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;