import React from "react";

const RecommendedJobs = () => (
  <section className="recommended-jobs">
    <h1>Recommended Jobs</h1>
    <div className="flex-wrap">
      {[
        {
          logo: "https://seeklogo.com/images/P/paystack-logo-FAE0C3A8D8-seeklogo.com.png",
          title: "QA Engineer",
          type: "Full time",
          icon:"",
          company: "Paystack",
          location: "Lagos, Nigeria",
        },
        {
          logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
          title: "Product Analyst",
          type: "Part time",
          company: "Google",
          location: "Lagos, Nigeria",
        },
        {
          logo: "https://flutterwave.com/images/logo-colored.svg",
          title: "HR Manager",
          type: "Full time",
          company: "Flutterwave",
          location: "Abuja, Nigeria",
        },
        {
          logo: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Access_Bank_logo.png",
          title: "QA Engineer",
          type: "Full time",
          company: "Access",
          location: "Lagos, Nigeria",
        },
      ].map((job, index) => (
        <div className="job-card" key={index}>
          <div className="job-type">{job.type}</div>
          ?
          <img src={job.logo} alt={job.company} className="company-logo" />
          <h3>{job.title}</h3>
          <div className="job-footer">
            <div>
              <p className="company-name">{job.company}</p>
              <p className="location">{job.location}</p>
            </div>
            <button className="apply-btn">Apply now</button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default RecommendedJobs;
