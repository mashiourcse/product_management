import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { AccordionSection } from "./AccordionSection";
const ProfileCard3 = ({ data, index }) => {
  let borderColor = ["red", "purple", "blue", "orange"];
  return (
    <div
      className="card profile"
      style={{
        width: "20rem",
        border: `10px solid ${borderColor[index]}`,
        margin: "10px",
      }}
    >
      <img className="card-img-top" src={data.image} alt="Card image cap" />
      <div className="card-body">
        <div className="name-link">
          <div>
            <h4 className="card-title text-center font-weight-bold">
              {data.name}
            </h4>
          </div>
          <div>
            <h5 className="card-title text-center">
              <span className="text-lg">
                {" "}
                <a
                  href={data.linkedin}
                  target="_blank"
                  className="text-decoration-none"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </span>
              {"          "}
              <span className="text-lg">
                <a
                  href={data.github}
                  target="_blank"
                  className="text-decoration-none"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </span>
            </h5>
          </div>
        </div>
        <AccordionSection
          name={"Career goal"}
          data={data.goal}
          index={data.index * 1}
        />
        <br />
        <AccordionSection
          name={"Skill"}
          data={data.expertise}
          index={data.index * 2}
        />
        <br />
        <AccordionSection
          name={"Techstack"}
          data={data.techstack}
          index={data.index * 3}
        />
        <br />
        <AccordionSection
          name={"Education"}
          data={data.education}
          index={data.index * 4}
        />
        <br />
      </div>
    </div>
  );
};

export default ProfileCard3;
