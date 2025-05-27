import "../style/profileupdated.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import 'animate.css';

function Profile() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  const handleEdit = () => {
    navigate("/edit-profile");
  };

  return (
    <div className="back4">
      <h2 className="phead">PROFILE DETAILS</h2>
      <i
        className="fa-solid fa-user-pen edit"
        onClick={handleEdit}
        style={{ cursor: "pointer" }}
      ></i>
      <img
        src="..\public\images\profilephoto.png"
        alt="profile"
        className="prof img-fluid"
      />
      {userData ? (
        <div className="detail">
          <p className="animate__backInRight">
            <strong>NAME: </strong> <span>{userData.name}</span>
          </p>
          <p>
            <strong>EMAIL: </strong> <span>{userData.email}</span>
          </p>
          <p>
            <strong>BUDGET: </strong>{" "}
            <span>
              <i className="fa-solid fa-indian-rupee-sign text-warning"></i>{" "}
              {userData.budget}
            </span>
          </p>
        </div>
      ) : (
        <p>No data found.</p>
      )}
    </div>
  );
}

export default Profile;
