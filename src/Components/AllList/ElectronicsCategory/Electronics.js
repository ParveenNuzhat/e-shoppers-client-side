import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Electronic from "./Electronic";
import "./Electronics.css";
import { Container } from "react-bootstrap";
import image from "../../../Images/electronics.jpg";

const Electronics = () => {
  const [electronics, setElectronic] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/electronicCollection")
      .then((res) => res.json())
      .then((data) => setElectronic(data));
  }, []);
  //Delete Categories

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `http://localhost:5000/electronicCollection/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = electronics.filter(
                (electronic) => electronic._id !== id
              );
              setElectronic(remaining);
            }
          });
      }
    });
  };
  return (
    <div style={{ backgroundColor: "rgb(119,139,165)", minHeight: "230vh" }}>
      <div className="electronics">
        {/* <img src={image} alt="" className="w-50 img-fluid" /> */}
      </div>
      <div className="mt-5">
        {
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 justify-content-center g-5 mx-auto my-5">
            {electronics.map((electronic) => (
              <Electronic
                key={electronic._id}
                electronic={electronic}
                handleDelete={handleDelete}
              ></Electronic>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default Electronics;
