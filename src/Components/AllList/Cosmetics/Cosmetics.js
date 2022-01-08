import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Cosmetic from "./Cosmetic";

const Cosmetics = () => {
  const [cosmetics, setCosmetic] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/CosmeticCollection")
      .then((res) => res.json())
      .then((data) => setCosmetic(data));
  }, []);

  //Delete Cosmetic

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
        const url = `http://localhost:5000/CosmeticCollection/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = cosmetics.filter(
                (Cosmetic) => Cosmetic._id !== id
              );
              setCosmetic(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      {
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-5 d-flex justify-content-center mb-5 pb-5  ">
          {cosmetics.map((cosmetic) => (
            <Cosmetic
              key={cosmetic._id}
              cosmetic={cosmetic}
              handleDelete={handleDelete}
            ></Cosmetic>
          ))}
        </div>
      }
    </div>
  );
};

export default Cosmetics;
