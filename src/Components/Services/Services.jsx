import React from "react";
import "./Services.css";
import theme_pattern from '../../assets/theme_pattern.svg'

const services = [
  {
    icon: "💻",
    title: "Frontend Development",
    desc: "Build responsive and modern websites using HTML, CSS, JavaScript, and React.",
  },
  {
    icon: "📱",
    title: "Responsive Web Design",
    desc: "Create websites that work smoothly on desktop, tablet, and mobile devices.",
  },
  {
    icon: "⚛️",
    title: "React Development",
    desc: "Develop interactive user interfaces and single-page applications using React.",
  },
  {
    icon: "🔗",
    title: "API Integration",
    desc: "Connect applications with external APIs to display dynamic and real-time data.",
  },
  {
    icon: "🎨",
    title: "UI Implementation",
    desc: "Convert designs into clean, responsive, and user-friendly web interfaces.",
  },
  {
    icon: "🌐",
    title: "Website Deployment",
    desc: "Deploy and maintain websites using platforms like GitHub and Vercel.",
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
        <p>What I Can Do For You</p>
      </div>

      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <span className="service-icon">{service.icon}</span>

            <h2>{service.title}</h2>

            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;