import "./project.css";
import { getProjectById } from "../redux/projectSlice";
import { addInvistemint } from "../redux/invistemintSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Feq from "../components/Feq";
import RiskWorning from "../components/RiskWorning";
import roundom from "../redux/rundom";
import AddInvistemintModel from "../components/AddInvistemintModel";

function Project() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [Quentity, setQuentity] = useState(1);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  let { projectId } = useParams();
  useEffect(() => {
    dispatch(getProjectById(projectId));
  }, [projectId]);

  const { project, loading, error } = useSelector((state) => state.project);
  const { invistoer } = useSelector((state) => state.auth);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error} </div>;
  }

  const handelOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handelModelSubmit = (e) => {
    e.preventDefault();
    if (invistoer == null) {
      return navigate("/login");
    }
    dispatch(
      addInvistemint({
        projectId,
        quentity: Quentity,
        invistorId: invistoer,
      })
    );
    navigate("/invistor");
  };

  return (
    <>
      <AddInvistemintModel
        isModalOpen={isModalOpen}
        handelOpenModal={handelOpenModal}
        handelModelSubmit={handelModelSubmit}
        Quentity={Quentity}
        setQuentity={setQuentity}
      />
      {project && (
        <div className="">
          <div
            className="project-header"
            style={{
              backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url(http://localhost:5000/${project.backgroundImg
                .split("\\")
                .join("/")})`,
            }}
          >
            <div className="ph-content">
              <div className="ph-content-leaft">
                <img
                  src={`http://localhost:5000/${project.logo}`}
                  alt=""
                  className="ph-logo"
                />
                <h1 className="ph-title">{project.name}</h1>
              </div>
              <div className="ph-content-right">
                <div className="phcr">
                  <p> 17 </p>
                  <p> days left </p>
                </div>
                <button className="btn" onClick={handelOpenModal}>
                  Invest now
                </button>
              </div>
            </div>
          </div>
          <div className="container ph">
            <div className="ph-progress">
              <div className="ph-progress-bar">
                <div
                  className="ph-progress-bar-fill"
                  style={{
                    width: ` ${Math.floor(
                      (roundom(project.target) / project.target) * 100
                    )}%`,
                  }}
                ></div>
                <p className="ph-progress-bar-text">
                  {Math.floor((roundom(project.target) / project.target) * 100)}
                  %
                </p>
              </div>
            </div>
            <div className="ph-info">
              <div className="ph-info-content">
                <p className="ph-info-text">${roundom(project.target)}</p>
                <p className="ph-info-text">Raised</p>
              </div>
              <div className="ph-info-content">
                <p className="ph-info-text">{project.investors}</p>
                <p className="ph-info-text">Investors</p>
              </div>
              <div className="ph-info-content">
                <p className="ph-info-text">${project.target}</p>
                <p className="ph-info-text">Target</p>
              </div>
              <div className="ph-info-content">
                <p className="ph-info-text">{project.equity}%</p>
                <p className="ph-info-text">Equity</p>
              </div>
              <div className="ph-info-content">
                <p className="ph-info-text">${project.preMoneyValuation}</p>
                <p className="ph-info-text">Pre-money valuation</p>
              </div>
              <div className="ph-info-content">
                <p className="ph-info-text">${project.sharePrice}</p>
                <p className="ph-info-text">Share price</p>
              </div>
            </div>

            <div className="project-info-content">
              <div className="project-info-content-left">
                <p>{project.description}</p>
              </div>
              <div className="project-info-content-right">
                <ul>
                  <li>
                    {" "}
                    The App industry is worth c$13.5bn globally and growing at
                    30% annually
                  </li>
                  <li>
                    The Fiit App has been downloaded over 1m times since launch
                  </li>
                  <li>
                    Revenue growth of 800%+ between 2019-21 ('21 Rev: £6.8m,
                    EBITDA: -£4.1m)
                  </li>
                </ul>
              </div>
            </div>
            <div className="project-Idea">
              <h2 className="s-title">idea</h2>
              <p className="project-idea-content">{project.idea}</p>
            </div>
            <div className="Documents">
              <h1 className="s-title">Documents</h1>
              <a href="/"> Fiit Investor Deck (2022).pdf </a>
              <a href="/"> Crowdfunding FAQs.pdf </a>
            </div>
          </div>
        </div>
      )}
      <RiskWorning />
    </>
  );
}

export default Project;
