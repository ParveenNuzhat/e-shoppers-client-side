import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../../../Hook/useAuth';

const FurnitureOrders = () => {
    const { _id } = useParams();
    const [furnitures, setFurnitures] = useState({});

    const { user } = useAuth();
    const history = useHistory()
    const location = useLocation()

    const url = location.state?.from || "/myOrders"


    const cityRef = useRef();
    const addressRef = useRef();
    const contactRef = useRef()

    useEffect(() => {

        fetch(`http://localhost:5000/furnitureCollection/${_id}`)
            .then(res => res.json())
            .then(data => setFurnitures(data))


    }, [])

    const handleOrder = (e) => {


        const UserName = user.displayName;

        const userEmail = user.email;
        const city = cityRef.current.value;
        const address = addressRef.current.value;
        const contact = contactRef.current.value;
        const productName = furnitures.name
        const productImage = furnitures.image
        const productDetails = furnitures.features
        const price = furnitures.price


        const newOrder = { productName, productImage, productDetails, price, city, address, contact, UserName, userEmail };
        fetch('http://localhost:5000/orderCollection', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setFurnitures(data)
                    Swal.fire({
                        title: ' Successfully Ordered',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })

                    e.target.reset();
                }
                history.push(url)

            })

        e.preventDefault();
    }
    return (
        <div>
            <h1>Details of : {furnitures?.name}</h1>


            <img src={furnitures?.image} alt="" />
            <h5>{furnitures?.features}</h5>





            <div className=" d-flex justify-content-center mt-4 pt-5">
                <form onSubmit={handleOrder} className="d-flex flex-column  w-50  ">

                    <input className="p-2" value={user.displayName} />



                    <input className="p-2 mt-3" value={user.email} />
                    <input className="p-2 mt-3" ref={cityRef} type="text" placeholder="City" required />
                    <input className="p-2 mt-3" ref={addressRef} type="text" placeholder="Address" required />
                    <input className="p-2 mt-3" ref={contactRef} type="number" placeholder="Contact No." required />

                    <button style={{ backgroundColor: "indigo", color: "white", fontSize: "20px" }} className="mb-5 mt-5 btn" type="submit">CONFIRM ORDER</button>
                </form>

            </div>
        </div>
    );
};

export default FurnitureOrders;