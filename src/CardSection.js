import React, { useState, useRef, useEffect } from 'react';
import './CardSection.css';

function CardSection() {
  const [activeCard, setActiveCard] = useState(null); // State to track the active card
  const detailsRef = useRef(null); // Reference to the details section

  const handleReadMoreClick = (cardIndex) => {
    setActiveCard(cardIndex);
  };

  useEffect(() => {
    if (activeCard && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll to the details section
    }
  }, [activeCard]);

  return (
    <div className="card-section-wrapper">
      <div className="card-container">
        <div className="card-box">
          <span></span>
          <div className="content">
            <h2>Coastal Analysis</h2>
            <p>Explore how nutrient levels shape coastal ecosystems and predict environmental dynamics.</p>
            <a href="#!" onClick={() => handleReadMoreClick(1)}>Read More</a>
          </div>
        </div>
        <div className="card-box">
          <span></span>
          <div className="content">
            <h2>Climate Anomaly</h2>
            <p>Tackle climate challenges in Southeastern China through data-driven weather predictions.</p>
            <a href="#!" onClick={() => handleReadMoreClick(2)}>Read More</a>
          </div>
        </div>
        <div className="card-box">
          <span></span>
          <div className="content">
            <h2>People Analytics</h2>
            <p>Optimize HR strategies using machine learning to enhance organizational outcomes.</p>
            <a href="#!" onClick={() => handleReadMoreClick(3)}>Read More</a>
          </div>
        </div>
        <div className="card-box">
          <span></span>
          <div className="content">
            <h2>Saltwater Detection</h2>
            <p>Detect saltwater intrusion using satellite imagery for environmental protection.</p>
            <a href="#!" onClick={() => handleReadMoreClick(4)}>Read More</a>
          </div>
        </div>
      </div>

      {activeCard && (
        <div className="details-section" ref={detailsRef}>
    
        {activeCard === 1 && (
            <div className="experience-entry">
                <h2>Research Assistant for Professor Vipul Goyal</h2>
                <h3>Coastal Productivity Analysis</h3>
                <span className="date">June 2022 - September 2022</span>
                <ul>
                    <li>Engaged in a high-impact research project aimed at understanding and predicting primary productivity along the US coastline.</li>
                    <li>Managed large datasets containing environmental and oceanographic variables, applying data transformation techniques to optimize the dataset for analysis.</li>
                    <li>Developed a sophisticated Multivariate Polynomial Regression model designed to estimate primary productivity based on coastal nutrient levels.</li>
                    <li>Conducted a detailed sensitivity analysis to assess the robustness of the model and understand the relative importance of each variable.</li>
                    <li>Collaborated closely with Professor Goyal and the research team to refine the research methodology and enhance the model's accuracy.</li>
                </ul>
            </div>
        )}
    
        {activeCard === 2 && (
            <div className="experience-entry">
                <h2>Research Assistant for Professor Ichiba</h2>
                <h3>Southeastern China Temperature Anomaly Detection</h3>
                <span className="date">September 2022 - January 2023</span>
                <ul>
                    <li>Spearheaded the collection and integration of diverse datasets, including climate, geographic, demographic, and industrial data.</li>
                    <li>Applied a suite of advanced statistical and machine learning techniques to analyze the data, including Variable Correlation, Linear Regression, and Variance Inflation Factor (VIF) analysis.</li>
                    <li>Leveraged cutting-edge predictive models, such as Long Short-Term Memory (LSTM) networks and CMIP3 models, to forecast climate trends and predict future temperature anomalies with high precision.</li>
                    <li>Based on the predictive analysis, developed a series of strategic recommendations aimed at mitigating the impact of extreme weather conditions.</li>
                    <li>Presented the findings and proposed mitigation strategies to Professor Ichiba, contributing to the academic discourse on climate anomaly detection and mitigation.</li>
                </ul>
            </div>
        )}
    
        {activeCard === 3 && (
            <div className="experience-entry">
                <h2>Teaching Assistant for Professor Austin</h2>
                <h3>People Analytics</h3>
                <span className="date">January 2024 - May 2024</span>
                <ul>
                  <li>Provided extensive support to graduate students in the People Analytics course, guiding them through complex concepts in data analysis, statistical modeling, and machine learning, particularly focusing on practical applications in real-world scenarios.</li>
                  <li>Assisted students in implementing machine learning techniques using Python and Google Colab, with a focus on applying models such as neural networks, decision trees, and ensemble methods to HR analytics.</li>
                  <li>Facilitated in-person sessions to deepen students' understanding of machine learning workflows, including data preprocessing, model selection, hyperparameter tuning, and model evaluation.</li>
                  <li>Played a key role in evaluating student assignments and projects, providing detailed feedback on the application of machine learning techniques, such as feature engineering, model optimization, and result interpretation.</li>
                  <li>Collaborated closely with Professor Austin to continuously refine and enhance the course content, integrating the latest advancements in machine learning, including deep learning and predictive analytics, to ensure the curriculum remained cutting-edge and engaging.</li>
              </ul>
            </div>
        )}

        {activeCard === 4 && (
            <div className="experience-entry">
                <h2>Data+ Graduate Researcher</h2>
                <h3>Saltwater Intrusion Detection</h3>
                <span className="date">June 2023 - August 2023</span>
                <ul>
                <li>Utilized satellite imagery to detect and visualize patterns of saltwater intrusion in coastal areas, providing essential data for environmental analysis.</li>
                <li>Led the data preprocessing efforts, applying advanced techniques to clean and structure satellite imagery for accurate visualization and analysis.</li>
                <li>Developed color correction models using regression techniques to enhance the accuracy of the imagery, aiding in better identification of intrusion areas.</li>
                <li>Conducted detailed data analysis to identify trends and patterns in saltwater intrusion, focusing on improving the visualization and interpretation of the data.</li>
                <li>Collaborated with a multidisciplinary team, contributing to the preparation of research reports that documented the methodologies, findings, and implications for environmental monitoring.</li>
                </ul>
            </div>
        )}

    
        {/* Add similar blocks for other cards if needed */}
    </div>
    
      )}
    </div>
  );
}

export default CardSection;
