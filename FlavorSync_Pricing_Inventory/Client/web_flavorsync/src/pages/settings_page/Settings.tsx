import "./Settings.scss";

import ComponentTitle from "../../components/titles/component_title/ComponentTitle";
import Card from "../../components/cards/Card";
import Profile from "../../components/settings_components/profile/Profile";
import Location from "../../components/settings_components/location/Location";
import ProfileDetailsForm from "../../components/settings_components/profile_details_form/ProfileDetailsForm";

const Settings = () => {
  return (
    <div className="settings-component">
      <ComponentTitle title="Profile Management" />
      <div className="container">
        <div className="basic-details-column">
          <Card>
            <Profile />
          </Card>

          <Card>
            <Location />
          </Card>
        </div>

        <div className="form-column">
          <Card>
            <ProfileDetailsForm />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
