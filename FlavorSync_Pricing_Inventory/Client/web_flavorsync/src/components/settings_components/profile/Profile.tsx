import "./Profile.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../../../images/img_2.jpeg";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  return (
    <>
      <div className="profile">
        <div className="profile-pic">
          <img src={img} alt="" />
          <button className="upload-img-btn">
            <FontAwesomeIcon icon={faCamera} className="icon" />
          </button>
        </div>
        <h4>Varun Dhawan</h4>
        <span>Admin</span>
        <p>last visit 21/08/2023</p>
        <button className="logout-btn">Log Out</button>
      </div>
    </>
  );
};

export default Profile;
