import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../redux/slices/userDetailsSlice";
import PopupUserRead from "./PopupUserRead";
import { Link } from "react-router-dom";

const Read = () => {
  const dispatch = useDispatch();
  const { users, isLoading } = useSelector((state) => state.user);  
  const { count, customers } = users;
  const [showPopup, setShowPopup] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (isLoading) return <h1>Loading</h1>;

  return (
    <>
      <h2>All Data</h2>
      <h3>Total Users: {count}</h3>
      {showPopup && (
        <PopupUserRead
          id={id}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      )}

      {customers &&
        customers.map((user) => (
          <div
            key={user._id}
            className="card mx-auto w-50 my-2"
            style={{ width: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
              <h6 className="card-subtitle mb-2 text-muted">{user.phone}</h6>
              <h6 className="card-subtitle mb-2 text-muted">{user.gender}</h6>
              <h6 className="card-subtitle mb-2 text-muted">
                {user.membership}
              </h6>

              <button
                className="card-link"
                onClick={() => [setId(user._id), setShowPopup(true)]}
              >
                View
              </button>

              
              <Link href="#" className="card-link">
                Edit
              </Link>
              <Link
                onClick={() => dispatch(deleteUser(user._id))}
                className="card-link"
              >
                Delete
              </Link>
            </div>
          </div>
        ))}
    </>
  );
};

export default Read;
