import "./UpdateForm.scss";

import Card from "../../components/cards/Card";
import ComponentTitle from "../../components/titles/component_title/ComponentTitle";

import img from "../../images/img_white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import ComboBox from "../../components/combo_box/ComboBox";
import FormField from "../../components/form_field/FormField";
import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserServices from "../../services/UserServices";
import axios from "axios";

const initialFieldValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  dob: "",
  streetAddress: "",
  city: "",
  state: "",
  country: "",
  postalCode: "",
  imageName: "",
  createdAt: "",
  updatedAt: "",
  imageSrc: img as string,
  imageFile: null as File | null,
  blockStatus: "",
  verificationStatus: "",
  activeStatus: "",
};

const UpdateForm = () => {
  // States to store data
  const [values, setValues] = useState(initialFieldValues);
  const [isImageChanged, setIsImageChanged] = useState(false);
  const { userId } = useParams();

  const receivedDate = values.dob;
  const formattedDate = receivedDate.split("T")[0];
  const formattedCreatedAt = formatDate(values.createdAt);
  const formattedUpdatedAt = formatDate(values.updatedAt);

  useEffect(() => {
    UserServices.fetchUser(userId).then((user) => {
      setValues({
        ...user,
        activeStatus: user.activeStatus,
        verificationStatus: user.verificationStatus,
        blockStatus: user.blockStatus,
      });
    });
  }, []);

  function formatDate(dateString: string) {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  }

  // Function to handle image upload
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.target.files?.[0]; // Get the first selected file

    if (imageFile) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setValues({
          ...values,
          imageFile,
          imageSrc: e.target?.result as string,
          imageName: imageFile.name,
        });

        setIsImageChanged(true);
      };

      reader.readAsDataURL(imageFile); // Read the file as a data URL
    } else {
      setValues({
        ...values,
        imageFile: null,
        imageSrc: img,
        imageName: "",
      });

      setIsImageChanged(false);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  // Callback function to update activeStatus when selected in ComboBox
  const handleActiveStatusChange = (selectedOption: string) => {
    setValues({
      ...values,
      activeStatus: selectedOption,
    });
  };

  // Callback function to update verificationStatus when selected in ComboBox
  const handleVerificationStatusChange = (selectedOption: string) => {
    setValues({
      ...values,
      verificationStatus: selectedOption,
    });
  };

  // Callback function to update blockStatus when selected in ComboBox
  const handleBlockStatusChange = (selectedOption: string) => {
    setValues({
      ...values,
      blockStatus: selectedOption,
    });
  };

  const handleUpdateFormSubmit = async () => {
    // Prepare the data to send to the backend
    const formData = new FormData();

    // Append userId if available
    if (userId) {
      formData.append("id", userId);
    }

    // Append imageFile if it's not null
    if (values.imageFile) {
      formData.append("imageFile", values.imageFile);
    }

    // Append other form fields
    formData.append("firstname", values.firstname);
    formData.append("lastname", values.lastname);
    formData.append("username", values.username);
    formData.append("email", values.email);
    formData.append("dob", values.dob);
    formData.append("streetAddress", values.streetAddress);
    formData.append("city", values.city);
    formData.append("state", values.state);
    formData.append("country", values.country);
    formData.append("postalCode", values.postalCode);
    formData.append("activeStatus", values.activeStatus);
    formData.append("verificationStatus", values.verificationStatus);
    formData.append("blockStatus", values.blockStatus);

    try {
      // Define query parameters as an object
      const queryParams = {
        isImageChanged:
          isImageChanged !== undefined ? isImageChanged.toString() : undefined,
      };

      // Make a POST request to your .NET Core backend API with query parameters
      const response = await axios.put(
        "https://localhost:7173/api/User/updateUser",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important for file uploads
          },
          params: queryParams, // Pass the query parameters here
        }
      );

      // Handle the response from the server if needed
      console.log("Server Response:", response.data);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="update-form">
        <ComponentTitle title="User Editor" />

        <div className="container">
          <Card>
            <div className="inner-container">
              <div className="row1">
                <div className="profile">
                  <div className="image-input">
                    {values.imageName ? (
                      <img
                        src={values.imageSrc}
                        alt="User Profile"
                        className="profile-image"
                      />
                    ) : (
                      <img
                        src={img}
                        alt="Default Profile"
                        className="profile-image"
                      />
                    )}
                    <label
                      htmlFor="image-upload-btn"
                      className="upload-img-btn"
                    >
                      <FontAwesomeIcon icon={faCamera} className="icon" />
                      <input
                        type="file"
                        accept="image/*"
                        id="image-upload-btn"
                        onChange={handleImageUpload}
                        style={{ display: "none" }}
                      />
                    </label>
                  </div>
                  <div className="dates">
                    <p>Joined Date: {formattedCreatedAt}</p>
                    <p>Last Updated: {formattedUpdatedAt}</p>
                  </div>
                </div>

                <div className="status-container">
                  <ComboBox
                    options={["ACTIVE", "INACTIVE"]}
                    selectedOption={values.activeStatus}
                    onSelect={handleActiveStatusChange}
                  />
                  <ComboBox
                    options={["VERIFIED", "NOT_VERIFIED"]}
                    selectedOption={values.verificationStatus}
                    onSelect={handleVerificationStatusChange}
                  />
                  <ComboBox
                    options={["BLOCKED", "UNBLOCKED"]}
                    selectedOption={values.blockStatus}
                    onSelect={handleBlockStatusChange}
                  />
                </div>
              </div>

              <div className="row2">
                <FormField
                  label="Firstname"
                  id="firstname"
                  name="firstname"
                  type="text"
                  placeholder="Enter your firstname..."
                  value={values.firstname}
                  onChange={handleInputChange}
                  required
                />
                <FormField
                  label="Lastname"
                  id="lastname"
                  name="lastname"
                  type="text"
                  placeholder="Enter your lastname..."
                  value={values.lastname}
                  onChange={handleInputChange}
                  required
                />
                <FormField
                  label="Username"
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Enter your username..."
                  value={values.username}
                  onChange={handleInputChange}
                  required
                />
                <FormField
                  label="E-mail"
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Enter your email..."
                  value={values.email}
                  onChange={handleInputChange}
                  required
                />
                <FormField
                  label="Date Of Birth"
                  id="dob"
                  name="dob"
                  type="date"
                  placeholder="Enter your dob..."
                  value={formattedDate}
                  onChange={handleInputChange}
                  required
                />

                <FormField
                  label="Street Address"
                  id="streetAddress"
                  name="streetAddress"
                  type="text"
                  placeholder="Enter your street address..."
                  value={values.streetAddress}
                  onChange={handleInputChange}
                  required
                />
                <FormField
                  label="City"
                  id="city"
                  name="city"
                  type="text"
                  placeholder="Enter your city..."
                  value={values.city}
                  onChange={handleInputChange}
                  required
                />
                <FormField
                  label="State"
                  id="state"
                  name="state"
                  type="text"
                  placeholder="Enter your state..."
                  value={values.state}
                  onChange={handleInputChange}
                  required
                />
                <FormField
                  label="Country"
                  id="country"
                  name="country"
                  type="text"
                  placeholder="Enter your country..."
                  value={values.country}
                  onChange={handleInputChange}
                  required
                />
                <FormField
                  label="Postal Code"
                  id="postalCode"
                  name="postalCode"
                  type="text"
                  placeholder="Enter your postal code..."
                  value={values.postalCode}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="row3">
                <button
                  className="update-info-button"
                  onClick={handleUpdateFormSubmit}
                >
                  Update Information
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default UpdateForm;
