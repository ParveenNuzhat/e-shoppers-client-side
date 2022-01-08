import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Sport from './Sport';

const Sports = () => {
    const [sports, setSport] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/sportCollection')
            .then(res => res.json())
            .then(data => setSport(data))
    }, [])
    //Delete Categories

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
                const url = `http://localhost:5000/sportCollection/${id}`;
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
                            const remaining = sports.filter(sport => sport._id !== id);
                            setSport(remaining);
                        }
                    })
            }

        })

    }
    return (
        <div>
            {

                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-5 d-flex justify-content-center mb-5 pb-5  ">


                    {
                        sports.map(sport => <Sport key={sport._id} sport={sport}
                            handleDelete={handleDelete}





                        >

                        </Sport>)
                    }
                </div>







            }
        </div>
    );
};

export default Sports;