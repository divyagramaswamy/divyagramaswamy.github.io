function Projects() {
    return (
        <main>
            <h1> Projects </h1>
            <p className = "experience-intro">
                Brief Overview; more details on resume
            </p>

            <div className="experience-item">
                    <div className="experience-header">
                        <div> 
                            <h3> AI Shopping App  </h3>
                            <p className = "experience-role"> Cal Hacks Hackathon @ UC Berkeley </p>
                        </div>
                            <p className="experience-dates"> June 2024 </p>

                    </div>
                    <ul>
                        <li> Developed “tinder for clothes” web app using React Native, python backend, 
                            and web sockets for real time API communication
                        </li>
                        <li>
                                Integrated Hume API for live emotion detection, optimizing marketing algorithms for 
                                clothing recommendations based on users’ emotional outlook
                        </li>
                    </ul>
                </div>


                <div className="experience-item">
                    <div className="experience-header">
                        <div> 
                            <h3> Amazon Review Filtering   </h3>
                            <p className = "experience-role"> CS 4641 Machine Learning @ Georgia Tech </p>
                        </div>
                            <p className="experience-dates"> Fall 2024 </p>

                    </div>
                    <ul>
                        <li>  Developed machine learning model to predict star ratings based on Amazon 
                            product reviews to improve rating system
                        </li>
                        <li>
                            Processed data using PCA, Naïve Bayes, Support Vector Model, and K-Nearest Neighbors 
                            while fixing class imbalance and reducing features to maximize model output with an 
                            accuracy of 67% accuracy and 23% reviews filtered
                        </li>
                    </ul>
                </div>


                 <div className="experience-item">
                    <div className="experience-header">
                        <div> 
                            <h3>  Sarcasm Detection Model   </h3>
                            <p className = "experience-role"> CS 4650 Natural Language Processing @ Georgia Tech </p>
                        </div>
                            <p className="experience-dates"> Fall 2024 </p>

                    </div>
                    <ul>
                        <li> 
                            Built and evaluated models (BOW, LSTM, GRU, BERT) for sarcasm detection across Reddit 
                            and Twitter datasets, achieving up to 0.74 F1 score on Reddit
                        </li>
                        <li>
                            Achieved near state-of-the-art performance on Reddit with an F1 score of 0.738, 
                            improving sarcasm classification accuracy
                        </li>
                    </ul>
                </div>
        
        </main>
    )
}

export default Projects 