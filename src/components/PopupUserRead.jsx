import React from "react";
import "./PopupUserRead.css";
import { useSelector } from "react-redux";

const PopupUserRead = ({ id, showPopup, setShowPopup }) => {
  const allUsers = useSelector((state) => state.user.users.customers);

  const singleUser = allUsers.filter((user) => user._id === id);
  console.log(allUsers);
  console.log(singleUser);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <h5>{singleUser[0].name}</h5>
        <h5>{singleUser[0].email}</h5>
        <h5>{singleUser[0].phone}</h5>
        <h5>{singleUser[0].membership}</h5>
        <h5>{singleUser[0].gender}</h5>
        <button onClick={() => setShowPopup(false)}>Close</button>
      </div>
    </div>
  );
};

export default PopupUserRead;
