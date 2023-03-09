import React, { useEffect } from "react";
import Header from "../components/Header";
import ProjectBanner from "../components/ProjectBanner";
import ProjectCard from "../components/ProjectCard";
import Feq from "../components/Feq";
import Cta from "../components/Cta";
import RiskWorning from "../components/RiskWorning";
import { getProjects } from "../redux/projectSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
  const { projects, loading, error } = useSelector((state) => state.project);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error} </div>;
  }

  return (
    <main>
      <Header />
      <section className="investment-opportunities" id="Liveinvestment">
        <div className="container">
          <h2 className="s-title">Live investment opportunities</h2>
          <p>
            Whether you're a beginner or experienced investor, you can join our
            million-strong community investing beyond their property and pension
            by building a portfolio of startup, growth and venture-backed
            businesses with the potential to deliver significant returns.
          </p>

          <div className="investment-opprs">
            {projects &&
              projects.map(
                (project, i) =>
                  i < 3 && (
                    <Link to={`projects/${project._id}`} key={i}>
                      <ProjectCard project={project} />
                    </Link>
                  )
              )}
          </div>
        </div>
      </section>
      <section className="What-is-collective-banner">
        <div className="container" data-aos="fade-right">
          <div className="content">
            <h2 className="s-title">What is Crowdfunding?</h2>
            <p>
              The concept of crowdfunding has revolutionized the startup
              investment industry. In the past, the mechanism for obtaining
              financing for start-up projects was limited to "family and
              friends" and angel investors on the one hand, and venture capital
              companies on the other hand.
            </p>
            <p>
              Today, "stock-based crowdfunding" allows startup companies to
              raise funding from a group of people (the "public") as
              investments, and enables investors to obtain shares (or equity) in
              that company in return with ease. Share-based crowdfunding is also
              known as crowdfunding
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <h2 className="s-title">Brands we're proud to support</h2>
          <div className="brandes-list" data-aos="fade-right">
            <img src="imgs/brands/brand3.webp" alt="" />
            <img src="imgs/brands/brand1.webp" alt="" />
            <img src="imgs/brands/brand4.webp" alt="" />
            <img src="imgs/brands/brand5.webp" alt="" />
            <img src="imgs/brands/brand2.webp" alt="" />
          </div>
          <div className="brand-card-list" data-aos="fade-left">
            <div className="brand-card">
              <img src="imgs/brands/1.webp" alt="" />
              <p>1.2m members</p>
            </div>
            <div className="brand-card">
              <img src="imgs/brands/funded1-1.webp" alt="" />
              <p>1,000+ funded businesses</p>
            </div>
            <div className="brand-card">
              <img src="imgs/brands/Invested-1.webp" alt="" />
              <p>£1bn/€1.2bn invested</p>
            </div>
            <div className="brand-card">
              <img src="imgs/brands/Trustpilot_11-1.webp" alt="" />
              <p>Rated 4.5/5 on Trustpilot</p>
            </div>
          </div>
        </div>
      </section>
      <section className="io-banner">
        <div className="container">
          {projects && (
            <Link to={`projects/${projects[3]._id}`}>
              <ProjectBanner key={projects[3]._id} project={projects[3]} />
            </Link>
          )}
        </div>
      </section>
      <section className="">
        <div className="container">
          <h2 className="s-title">Live investment opportunities</h2>
          <p>
            Whether you're a beginner or experienced investor, you can join our
            million-strong community investing beyond their property and pension
            by building a portfolio of startup, growth and venture-backed
            businesses with the potential to deliver significant returns.
          </p>
          <div className="io-banner-list">
            {projects &&
              projects.map(
                (project, i) =>
                  i < 3 && (
                    <Link to={`projects/${project._id}`} key={i}>
                      <ProjectBanner project={project} />
                    </Link>
                  )
              )}
          </div>
        </div>
      </section>
      <Feq />
      <Cta />
      <RiskWorning />
    </main>
  );
}

export default Home;
