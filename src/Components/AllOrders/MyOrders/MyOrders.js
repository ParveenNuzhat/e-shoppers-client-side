import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Swal from 'sweetalert2';
import useAuth from '../../../Hook/useAuth';

const MyOrder = () => {
    const [allOrders, setAllOrders] = useState([]);
    const { user } = useAuth();



    useEffect(() => {
        fetch('http://localhost:5000/orderCollection')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])

    //DELETE ORDER

    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `http://localhost:5000/orderCollection/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = allOrders.filter(order => order._id !== id);
                            setAllOrders(remaining);
                        }
                    })
            }

        })

    }

    const myOrder = allOrders.filter(order => (order.userEmail == user.email))

    return (
        <div>
            <div className=" overflow-hidden" >

                <h1>Total Orders: {myOrder.length}</h1>

                <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4 ms-5 ps-5  ">
                    {

                        myOrder.map(order => <div >

                            <div className="col h-100 ">
                                <div className=" cardbox m-5  ">
                                    <img className="w-75 mt-2" src={order.productImage} alt="" />
                                    <hr style={{ border: "2px solid blue" }} />
                                    <h4>Product Name: <span style={{ color: "white" }} > {order.productName}</span></h4>
                                    <hr style={{ border: "2px solid blue" }} />
                                    <h6 >DETAILS : <h5 style={{ color: "white" }}>{order.features}</h5></h6>

                                    <hr style={{ border: "2px solid blue" }} />
                                    <h6>PRICE : <span style={{ color: "white" }}>{order.price}</span></h6>
                                    <hr style={{ border: "2px solid blue" }} />
                                    <h6>{order.status}</h6>

                                    < button style={{ backgroundColor: "darkred" }} className="mb-4 btn " onClick={() => handleDelete(order._id)}>
                                        <i style={{ color: "white" }} class="fa fa-trash"></i>
                                        <span className="ps-1" style={{ color: "white" }}>DELETE</span></button >
                                </div>
                            </div>

                        </div >)
                    }
                </div>



            </div>
        </div >
    );
};

export default MyOrder;