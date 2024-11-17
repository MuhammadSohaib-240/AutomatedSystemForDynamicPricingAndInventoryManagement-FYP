import "./UserGrid.scss";

import img from "../../images/img_white.png";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import UserServices from "../../services/UserServices";
import { Link } from "react-router-dom";
import DeleteConfirmationDialog from "../delete_confirmation_dialog/DeleteConfirmationDialog";
import user from "./mockUserData.json";

interface User {
  id: string;
  name: string;
  blockStatus: string;
  verificationStatus: string;
  activeStatus: string;
  imageName: string;
  imageSrc: string;
}

const UserGrid = () => {
  const [users, setUsers] = useState<User[]>(user);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  useEffect(() => {
    UserServices.fetchUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const usersPerPage: number = 12;

  const startIndex: number = (currentPage - 1) * usersPerPage;
  const endIndex: number = startIndex + usersPerPage;
  const totalUsers: number = users.length;

  const displayedUsers = users.slice(startIndex, endIndex);

  const nextPage = () => {
    if (endIndex < totalUsers) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleDeleteClick = () => {
    setIsDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    // Perform the user deletion logic here
    // You can make an API call or update the state accordingly
    // After deletion is successful, close the dialog
    setIsDeleteDialogOpen(false);
  };

  const handleDeleteCancel = () => {
    setIsDeleteDialogOpen(false);
  };

  return (
    <>
      <div className="user-grid">
        <div className="card-grid">
          {displayedUsers.map((user) => (
            <div className="user-card" key={user.id}>
              <div className="user-image">
                {user.imageName ? (
                  <img
                    src={user.imageSrc}
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
              </div>
              <div className="user-details">
                <h3>{user.name}</h3>
                <p
                  className={`${
                    user.blockStatus === "UNBLOCKED"
                      ? "status-true"
                      : "status-false"
                  }`}
                >
                  Block Status: {user.blockStatus}
                </p>
                <p
                  className={`${
                    user.verificationStatus === "VERIFIED"
                      ? "status-true"
                      : "status-false"
                  }`}
                >
                  Verification Status: {user.verificationStatus}
                </p>
                <p
                  className={`${
                    user.activeStatus === "ACTIVE"
                      ? "status-true"
                      : "status-false"
                  }`}
                >
                  Active Status: {user.activeStatus}
                </p>
              </div>
              <div className="user-actions">
                <Link to={`/admin/update-form/${user.id}`}>
                  <button className="edit-button">Edit</button>
                </Link>
                <button className="delete-button" onClick={handleDeleteClick}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {totalUsers > usersPerPage && (
          <div className="pagination">
            <button onClick={prevPage} disabled={currentPage === 1}>
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <button onClick={nextPage} disabled={endIndex >= totalUsers}>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        )}
      </div>

      <DeleteConfirmationDialog
        isOpen={isDeleteDialogOpen}
        onCancel={handleDeleteCancel}
        onDelete={handleDeleteConfirm}
      />
    </>
  );
};

export default UserGrid;
