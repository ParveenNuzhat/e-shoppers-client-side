import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const SportDetails = () => {
    const { sportId } = useParams();
    const [sports, setSport] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:5000/sportCollection/${sportId}`)
            .then(res => res.json())
            .then(data => setSport(data))
    }, []);
    return (
        <div >
            <h1 style={{ color: "cyan", paddingBottom: "30px", paddingTop: "30px" }}>Details Information About {sports?.name}</h1>
            <div >

                <div className="col ">
                    <div style={{ backgroundColor: "#D5D6EA" }} className="cardbox w-50 card h-50 ms-5 ps-5">
                        <div>
                            <img src={sports.image} alt="" className=" w-50 h-50 p-5" />
                        </div>
                        <div className="card-body text-center">
                            <h4 className="card-text">{sports.name}</h4>



                        </div>
                        <div className="card-body text-center">
                            <h4 className="card-text">{sports.category}</h4>
                        </div>
                        <div className="card-body text-center">
                            <h4 className="card-text">{sports.features}</h4>
                        </div>
                        <div className="card-body text-center">
                            <h4 className="card-text">{sports.price}</h4>
                        </div>



                    </div>

                </div>


            </div>
        </div>
    );
};

export default SportDetails;