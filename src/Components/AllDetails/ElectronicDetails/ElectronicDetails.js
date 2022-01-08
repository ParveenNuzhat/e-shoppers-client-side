import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./ElectronicDetails.css";

const ElectronicDetails = () => {
  const { electronicId } = useParams();
  const [electronics, setElectronic] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/electronicCollection/${electronicId}`)
      .then((res) => res.json())
      .then((data) => setElectronic(data));
  }, []);

  return (
    <div style={{ minHeight: "100vh" }} className="detail-container">
      <div className="w-75 mx-auto">
        <div className="text-center p-5">
          <h1 style={{ color: "salmon" }}>
            Detail Information about {electronics?.name}
          </h1>
        </div>
        <div>
          <div className="d-flex align-items-center justify-content-center">
            <div className="col-md-6 cardbox text-center">
              <img
                src={electronics.image}
                alt=""
                className="w-100 img-fluid p-5"
              />
            </div>

            <div className="col-md-6 cardbox">
              <div className="card-body px-5">
                <h4 className="card-text">Brand: {electronics.brand}</h4>
              </div>
              <div className="card-body px-5">
                <h4 className="card-text">Feature: {electronics.feature}</h4>
              </div>
              <div className="card-body px-5">
                <h4 className="card-text">Price: ${electronics.price}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectronicDetails;
