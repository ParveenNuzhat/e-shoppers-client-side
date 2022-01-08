import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { Container } from "react-bootstrap";

const Category = (props) => {
  const history = useHistory();

  const { _id, name, image } = props.category;
  const { handleDelete } = props;
  const handleAllProducts = () => {
    if (name == "Electronics") {
      const url = "/electronics";

      history.push(url);
      console.log("Electro");
    } else if (name == "Sports") {
      const url1 = "/sports";
      history.push(url1);
      console.log("Sport");
    } else if (name == "Furniture") {
      const url3 = "/furnitures";
      history.push(url3);
    } else if (name == "Fashion") {
      const url4 = "/fashions";
      history.push(url4);
    } else if (name == "Cosmetics") {
      const url5 = "/cosmetics";
      history.push(url5);
    }
  };
  return (
    <div className="">
      <Container className="col">
        <div
          // style={{ backgroundColor: "#D5D6EA" }}
          style={{
            backgroundColor: "rgb(200, 235, 241",
            boxShadow: "5px 5px 10px salmon",
          }}
          className="cardbox card category-card"
        >
          <div className="text-center">
            <img src={image} alt="" className="w-100 p-3 category-img" />
          </div>
          <div className="card-body text-center">
            <h4 className="card-text" style={{ fontWeight: "bold" }}>
              {name}
            </h4>
          </div>
          <div class="card-footer bg-transparent border-success d-flex justify-content-between">
            <Link
              style={{ textDecoration: "none" }}
              className="link d-flex justify-content-center"
            >
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-danger"
                style={{ border: "none", backgroundColor: "salmon" }}
              >
                <i
                  style={{ color: "red", fontSize: "20px" }}
                  class="fa fa-cart-plus"
                ></i>
                <span className="px-1" style={{ fontWeight: "bold" }}>
                  {" "}
                  DELETE
                </span>
              </button>
            </Link>

            <Link
              style={{ textDecoration: "none" }}
              className="link d-flex justify-content-center"
              onClick={handleAllProducts}
            >
              <button
                className="btn btn-info"
                style={{ backgroundColor: "#585858", border: "none" }}
              >
                <i
                  style={{ color: "red", fontSize: "20px" }}
                  class="fa fa-cart-plus"
                ></i>
                <span
                  className="px-1"
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  COLLECTION
                </span>
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Category;
