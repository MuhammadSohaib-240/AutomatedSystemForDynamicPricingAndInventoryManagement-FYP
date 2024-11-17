import { useState } from "react";
import "./Regsitration.css";
import AuthServices from "../../services/AuthServices";
import FormField from "../../components/form_field/FormField";
import LoadingOverlay from "../../components/loading_overlay/LoadingOverlay";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [dob, setDob] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await AuthServices.registerUser({
        firstName,
        lastName,
        username,
        email,
        password,
        streetAddress,
        city,
        state,
        country,
        postalCode,
        dob,
      });

      console.log(response);
    } catch (errorMessage) {
      console.error("Error registering user:", errorMessage);
    } finally {
      setIsLoading(false); // Set loading to false when the operation is complete
    }
  };

  return (
    <>
      <form className="registration-page" onSubmit={handleSubmit}>
        <div className="registration-inner-container">
          <h2>Registration</h2>
          <div className="general-info-container">
            <h3>General Details</h3>
            <div className="details-fields">
              <FormField
                label="Firstname"
                id="firstname"
                name="firstname"
                type="text"
                placeholder="Enter your firstname..."
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <FormField
                label="Lastname"
                id="lastname"
                name="lastname"
                type="text"
                placeholder="Enter your lastname..."
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
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
                type="date"
                placeholder="Enter your dob..."
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="address-info-container">
            <h3>Address Details</h3>
            <div className="details-fields">
              <FormField
                label="Street Address"
                id="streetAddress"
                name="streetAddress"
                type="text"
                placeholder="Enter your street address..."
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
          <div className="button-field">
            <input type="submit" value="Submit" className="submit-button" />
          </div>
        </div>
      </form>
      <LoadingOverlay isLoading={isLoading} />
    </>
  );
};

export default Registration;
