import React from "react";
import "../App.css";

const HowItWorks = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd",
      title: "Product Analyst",
      company: "Paystack"
    },
    {
      src: "https://images.unsplash.com/photo-1520872021250-cc1dfb9c3c4c",
      title: "HR Manager",
      company: "Paystack"
    },
    {
      src: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1",
      title: "Securities Trader",
      company: "Mckinney"
    },
  ];

  const steps = [
    {
      title: "Search Jobs",
      desc: "We have jobs in the most popular industries and with top companies. Plus, you can create alerts so you never miss a job opportunity."
    },
    {
      title: "Create a Profile and Get Noticed",
      desc: "Create a profile to showcase your skills and experience so recruiters can find you. Upload your CV so you can apply for jobs quickly and easily."
    },
    {
      title: "Apply for jobs",
      desc: "Find the training you need to improve your skills, or visit our Career Center for tips and advice to build your career."
    },
  ];

  return (
    <section className="how-it-works">
      <div className="how-images">
        {images.map((img, index) => (
          <div className="how-card" key={index}>
            <img src={img.src} alt={img.title} />
            <p>
              {img.title} <span>@ {img.company}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="how-text">
        <h2>How it works</h2>
        <p>
          Getajob helps you find the right job easily. Getajob helps you find
          the right job easily. Getajob helps you find the right job easily.
        </p>

        {steps.map((step, index) => (
          <div className="step" key={index}>
            <span className="check">check icon</span>
            <div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
