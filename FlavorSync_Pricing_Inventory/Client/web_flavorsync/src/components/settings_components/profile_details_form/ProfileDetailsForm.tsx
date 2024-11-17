import { useState } from "react";
import "./ProfileDetailsForm.scss";
import FormField from "../../form_field/FormField";

const ProfileDetailsForm = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [dob, setDob] = useState("");

  return (
    <>
      <div className="profile-details-form">
        <h5>My Profile Details</h5>
        <form>
          <div className="form-grid">
            <div className="basic-info-grid">
              <FormField
                label="Firstname"
                id="firstname"
                name="firstname"
                type="text"
                placeholder="Enter your firstname..."
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
              />
              <FormField
                label="Lastname"
                id="lastname"
                name="lastname"
                type="text"
                placeholder="Enter your lastname..."
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required
              />
              <FormField
                label="Username"
                id="username"
                name="username"
                type="text"
                placeholder="Enter your username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <FormField
                label="E-mail"
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FormField
                label="Password"
                id="password"
                name="password"
                type="text"
                placeholder="Enter your password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FormField
                label="Date Of Birth"
                id="dob"
                name="dob"
                type="text"
                placeholder="Enter your dob..."
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
            </div>
            <div className="address-grid">
              <FormField
                label="Street Address"
                id="streetAddress"
                name="streetAddress"
                type="text"
                placeholder="Enter your streetAddress..."
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
                required
              />
              <FormField
                label="City"
                id="city"
                name="city"
                type="text"
                placeholder="Enter your city..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
              <FormField
                label="State"
                id="state"
                name="state"
                type="text"
                placeholder="Enter your state..."
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              />
              <FormField
                label="Country"
                id="country"
                name="country"
                type="text"
                placeholder="Enter your country..."
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
              <FormField
                label="Postal Code"
                id="postalCode"
                name="postalCode"
                type="text"
                placeholder="Enter your postal code..."
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="update-changepassword-buttons">
            <button className="change-password-text-button">
              Change Password?
            </button>
            <button className="update-info-button">Update Information</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfileDetailsForm;
