import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const FurnitureDetails = () => {
    const { furnitureId } = useParams();
    const [furnitures, setFurniture] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:5000/furnitureCollection/${furnitureId}`)
            .then(res => res.json())
            .then(data => setFurniture(data))
    }, []);
    return (
        <div >
            <h1 style={{ color: "cyan", paddingBottom: "30px", paddingTop: "30px" }}>Details Information About {furnitures?.name}</h1>
            <div >

                <div className="col ">
                    <div style={{ backgroundColor: "#D5D6EA" }} className="cardbox w-50 card h-50 ms-5 ps-5">
                        <div>
                            <img src={furnitures.image} alt="" className=" w-50 h-50 p-5" />
                        </div>
                        <div className="card-body text-center">
                            <h4 className="card-text">{furnitures.name}</h4>



                        </div>
                        <div className="card-body text-center">
                            <h4 className="card-text">{furnitures.category}</h4>
                        </div>
                        <div className="card-body text-center">
                            <h4 className="card-text">{furnitures.features}</h4>
                        </div>
                        <div className="card-body text-center">
                            <h4 className="card-text">{furnitures.price}</h4>
                        </div>



                    </div>

                </div>


            </div>
        </div>
    );
};

export default FurnitureDetails;