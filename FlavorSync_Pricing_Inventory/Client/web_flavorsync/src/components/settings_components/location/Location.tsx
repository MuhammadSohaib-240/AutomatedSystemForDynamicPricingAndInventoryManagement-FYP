import "./Location.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocation } from "@fortawesome/free-solid-svg-icons";

const Location = () => {
  return (
    <>
      <div className="location">
        <div className="location-container">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <h4>varun222@gmail.com</h4>
        </div>

        <div className="location-container">
          <FontAwesomeIcon icon={faLocation} className="icon" />
          <h4>
            312 3rd St,
            <br />
            Albany, New York 12206,
            <br />
            USA
          </h4>
        </div>
      </div>
    </>
  );
};

export default Location;
