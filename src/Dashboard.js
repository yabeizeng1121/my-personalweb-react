import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'; // Import icons
import './Dashboard.css'; // Ensure the path is correct based on your project structure

const Dashboard = () => {
  
    useEffect(() => {
        console.log('Slider initialized'); // 添加调试信息
        
        const slider = document.querySelector('.dashboard .slider');
        if (!slider) {
          console.log('Slider element not found');
        } else {
          console.log('Slider element found');
        }
      
        function activate(e) {
          const items = document.querySelectorAll('.dashboard .item');
          if (e.target.closest('.next')) {
            console.log('Next button clicked');
            slider.append(items[0]);
          } else if (e.target.closest('.prev')) {
            console.log('Prev button clicked');
            slider.prepend(items[items.length - 1]);
          }
        }
      
        document.addEventListener('click', activate, false);
      
        return () => {
          document.removeEventListener('click', activate, false);
        };
      }, []);
      

  return (
    <section className="dashboard">
      <main>
        <ul className="slider">
          <li className="item" style={{ backgroundImage: "url('https://imagesforkaya.s3.amazonaws.com/steam.png')"}}>
            <div className="content">
              <h2 className="title" style={{filter: "brightness(2000%)"}}>"Steam Review Analyzer"</h2>
              <p className="description">In our Steam Review Analytics Dashboard, we developed a Python-based microservice using DevOps principles to derive insights from game reviews on Steam. By integrating an ETL pipeline in Azure Databricks, we automated data collection, processing, and visualization, enabling real-time analytics for popular games like Dead by Daylight and Stardew Valley.</p>
              <p className="description">We utilized Docker for containerization and Azure Web App for deployment, ensuring scalability and accessibility. Our dashboard allows users to explore various data visualizations, including user playtime histograms and text-related graphs, providing valuable insights into game performance and player sentiment.</p>
              <a href="https://github.com/nogibjj/Steam_Review__Analyzer" target="_blank">
                <button>Read More</button>
              </a>
            </div>
          </li>
          <li className="item" style={{ backgroundImage: "url('https://imagesforkaya.s3.amazonaws.com/championedge.png')" }}>
            <div className="content">
              <h2 className="title">"Champion Edge: League of Legends Win Predictor & Recommender"</h2>
              <p className="description">We developed Champion Edge to give League of Legends players a strategic edge. Our tool, created by a team from Duke University's MIDS Program, leverages machine learning to predict match outcomes and recommend optimal team compositions, helping players increase their chances of winning.</p>
              <p className="description">Our website allows players to input their team’s champions and those of their opponents. We then provide win probabilities and suggest the best champions to complete their lineup. Champion Edge is designed to be a valuable resource for both casual and competitive players, enhancing gameplay and strategy through advanced data analysis.</p>
              <a href="https://github.com/Ninsta22/champions-edge" target="_blank">
                <button>Read More</button>
              </a>

            </div>
          </li>
          <li className="item" style={{ backgroundImage: "url('https://imagesforkaya.s3.amazonaws.com/car.jpg')" }}>
            <div className="content">
              <h2 className="title">"Car Recommendation"</h2>
              <p className="description">In our DS 721 Final Project, we developed a Rust-based web service that provides car recommendations based on user preferences. Leveraging the open-source mistralai/mistral-7b-instruct-v0.2 model, our service not only suggests the ideal car but also explains the reasoning behind each recommendation. We containerized the service using Docker and deployed it on AWS using ECS/Fargate, ensuring scalability and accessibility.</p>
              <p className="description">We also implemented a CI/CD pipeline using GitLab CI/CD, automating the testing and deployment process. By integrating CloudWatch, we continuously monitor the performance of our service, ensuring reliability and efficiency for all users.</p>
              <a href="https://gitlab.com/jaxonyue/ids-721-final-project" target="_blank">
                <button>Read More</button>
              </a>
            </div>
          </li>
          <li className="item" style={{ backgroundImage: "url('https://imagesforkaya.s3.amazonaws.com/textsummy.png')" }}>
            <div className="content">
              <h2 className="title">"Text Summarizer App"</h2>
              <p className="description">I developed a text summarization application using Flask, hosted on Azure App Services. The app leverages OpenAI's GPT-3.5 model to efficiently summarize large texts into concise, meaningful summaries. By integrating Flask with GPT-3.5, I aimed to create a scalable and reliable web application that demonstrates the practical use of AI in text processing.</p>
              <p className="description">The core of the application resides in Backend code, which handles interactions with the OpenAI API and manages web requests. I containerized the app using Docker, ensuring seamless deployment on Azure. This project highlights my ability to build, deploy, and manage AI-powered web applications</p>
              <a href="https://github.com/nogibjj/Individual_Project_4_Yabei" target="_blank">
                <button>Read More</button>
              </a>
            </div>
          </li>
          <li className="item" style={{ backgroundImage: "url('https://imagesforkaya.s3.amazonaws.com/chatbotback.png')" }}>
            <div className="content">
              <h2 className="title">"Chatbot"</h2>
              <p className="description">I created a Streamlit chatbot app designed to provide interactive Q&A on Streamlit updates and other inquiries. This user-friendly application allows for quick and informative interactions, making it easy for users to stay updated on the latest features and developments in Streamlit.</p>
              <p className="description">To ensure accessibility and ease of deployment, I’ve set up the app for both local and EC2 deployment. The app can be quickly launched on your local machine or scaled to the cloud using an EC2 instance, offering flexibility for different usage scenarios. This project highlights my skills in developing and deploying scalable web applications.</p>
              <button>Read More</button>
            </div>
          </li>
        </ul>
        <nav className="nav">
          <button className="btn prev"><FontAwesomeIcon icon={faChevronLeft} /></button>
          <button className="btn next"><FontAwesomeIcon icon={faChevronRight} /></button>
        </nav>
      </main>
    </section>
  );
};

export default Dashboard;
