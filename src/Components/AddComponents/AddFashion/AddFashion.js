import React, { useRef } from 'react';
import { useHistory, useLocation } from 'react-router';
import Swal from 'sweetalert2';

const AddFashion = () => {
    const history = useHistory()
    const location = useLocation()

    const url = location.state?.from || "/fashions"
    const nameRef = useRef();
    const imageRef = useRef();
    const categoryRef = useRef();
    const priceRef = useRef();
    const featuresRef = useRef();



    const handleFashion = e => {
        const name = nameRef.current.value;

        const image = imageRef.current.value;
        const category = categoryRef.current.value;
        const price = priceRef.current.value;
        const features = featuresRef.current.value;

        const newFashion = { name, image, category, price, features };


        fetch('http://localhost:5000/fashionCollection', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFashion)
        })

            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {

                    Swal.fire({
                        title: 'New Fashion Product Added Successfully',
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
            <h1 style={{ color: "white" }} className="mt - 5 ">ADD NEW Fashion Product</h1>
            < div className=" mb-5" >
                <form className="form" onSubmit={handleFashion}  >
                    <label className="label" for="name">
                        <input className="input" type="text" id="name" placeholder="Name" ref={nameRef} />
                        <span className="span">Name</span>
                    </label>

                    <label className="label" for="image">
                        <input className="input" type="text" id="imageURl" placeholder="imageURL" ref={imageRef} />
                        <span className="span">ImageURL</span>
                    </label>
                    <label className="label" for="category">
                        <input className="input" type="text" id="category" placeholder="category" ref={categoryRef} />
                        <span className="span">Category</span>
                    </label>
                    <label className="label" for="price">
                        <input className="input" type="text" id="price" placeholder="price" ref={priceRef} />
                        <span className="span">Price</span>
                    </label>
                    <label className="label" for="features">
                        <input className="input" type="text" id="features" placeholder="features" ref={featuresRef} />
                        <span className="span">Features</span>
                    </label>

                    <button className="button" type="submit" >AddFashion</button>
                </form>
            </div>
        </div>
    );
};

export default AddFashion;