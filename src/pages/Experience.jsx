function Experience () {


    return (

        <main>
            <h1>Work Experience</h1>

            <p className = "experience-intro">
                Brief Overview; more details on resume
            </p>

            <section className="experience-section">
                <h2>Internships</h2>
                <div className="experience-item">
                    <div className="experience-header">
                        <div> 
                            <h3>  Amazon Health AI </h3>
                            <p className = "experience-role"> Machine Learning SDE Intern </p>
                        </div>
                            <p className="experience-dates"> May 2026 - August 2026 </p>

                    </div>
                    <ul>
                        <li> Architected a distributed full-stack LLM observability platform
                            using React, Python, and AWS, reducing applied scientist workflows
                            from ~30 minutes to under 1 minute. 
                        </li>
                        <li> Developed a longitudinal memory system using LangGraph, Bedrock
                                embeddings, and NLP to analyze patient profiles over time.
                        </li>
                        <li> Built automated testing and A/B evaluation infrastructure for
                            memory formation across LLM variants.
                        </li>
                    </ul>
                </div>


                <div className="experience-item">
                    <div className="experience-header">
                        <div> 
                            <h3>  Amazon Pharmacy </h3>
                            <p className = "experience-role"> Software Development Engineering Intern </p>
                        </div>
                            <p className="experience-dates"> May 2025 - August 2025 </p>

                    </div>
                    <ul>
                        <li> Designed and implemented DynamoDB stack to track changes to Amazon PharmacyProfile, 
                                enabling on-call engineers to resolve Sev-2 issues with severe customer impact 
                                efficiently
                        </li>
                        <li> Build restAPI to retrieve and sort profile history audit by timestamp with asynchronous update 
                                thread to automatically capture every profile-changing operation in real time
                        </li>
                        <li> Reduced average time spent per ticket from 20min to 1min (~95 min saved across 5 weekly Sev-2 tickets)
                        </li>
                    </ul>
                </div>

                <div className="experience-item">
                    <div className="experience-header">
                        <div> 
                            <h3>  CharmHealth </h3>
                            <p className = "experience-role"> ML/AI R&D Intern </p>
                        </div>
                            <p className="experience-dates"> May 2024 - August 2024 </p>

                    </div>
                    <ul>
                        <li> Spearheaded development of Swift-based mobile app to import health data from 
                                Apple Healthkit and sync with electronic health records (EHR) via Charm API, 
                                improving data accuracy and accessibility for physicians
                        </li>
                        <li> Reduced manual data entry by 70%, patient intake processing times by 20 mins/patient (est.)
                        </li>
                        <li> Contributed to automating EHR population from audio input, using NVIDIA Jetson GPUs/RIVA software
                        </li>
                    </ul>
                </div>




            </section>

            <section className="experience-section">
                <h2>Teaching</h2>

                <div className="experience-item">
                    <div className="experience-header">
                        <div> 
                            <h3>Computer Vision (Prof James Hayes) </h3>
                            <p className = "experience-role"> Teaching Assistant </p>
                        </div>
                            <p className="experience-dates"> December 2026 - Present </p>

                    </div>
                    <ul>
                        <li> Develop projects, refine assessments, and mentor students in computer vision topics 
                                including convolution, filtering, feature extraction, deep learning, classification, 
                                semantic segmentation, PointNet, NeRF, and 3D reconstruction
                        </li>
                    </ul>
                </div>
                <div className="experience-item">
                    <div className="experience-header">
                        <div> 
                            <h3>  Computer Systems and Networks CS 2200 (Prof Kishore/Forsyth) </h3>
                            <p className = "experience-role"> Teaching Assistant </p>
                        </div>
                            <p className="experience-dates"> January 2025 - December 2026 </p>

                    </div>
                    <ul>
                        <li> Teach computer architecture and systems concepts including pipelining, multiprocessors, 
                                memory hierarchies, networking, C, and assembly programming
                        </li>
                        <li> Lead labs with 65+ students, provide technical debugging support and office hours, and improve course materials
                        </li>
                    </ul>
                </div>


            </section>


            <section className="experience-section">
                <h2>Research</h2>
                <div className="experience-item">
                    <div className="experience-header">
                        <div> 
                            <h3>  Animal-Computer Interaction Lab (Prof Melody Jackson) </h3>
                            <p className = "experience-role"> Research Assistant  </p>
                        </div>
                            <p className="experience-dates"> August 2025 - Present </p>

                    </div>
                    <ul>
                        <li> Published paper discussing experiments on data analysis, unsupervised TICC clustering for obstacle 
                            labelling, and automatic synchronization between wearable (collar-worn) IMU data and GoPro videos of 
                            dogs performing fast paced agility obstacles in ACI conference (ACM digital library)
                        </li>
                        <li> Utilized SAM3 and YOLO11 to extract apparent acceleration from video data and automatically cross correlated
                                with collected acceleration to reduce manual data labelling effort 
                        </li>
                        <li>    
                            Ran experiments utilizing dynamic time warping, HMM clustering, and ruptures changepoint detection
                        </li>
                    </ul>
                </div>
            </section>

        </main>
    )




}
export default Experience