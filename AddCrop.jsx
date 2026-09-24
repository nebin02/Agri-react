import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./AddCrop.module.css";

const AddCrop = () => {

    const navigate = useNavigate();


    const [crop, setCrop] = useState({

        cropName: "",
        quantity: "",
        unit: "kg",
        price: "",
        location: ""

    });


    const [message, setMessage] = useState("");

    const [loading, setLoading] = useState(false);


    // ================= HANDLE INPUT =================

    const handleChange = (e) => {

        setCrop({

            ...crop,

            [e.target.name]: e.target.value

        });

    };


    // ================= ADD CROP =================

    const handleSubmit = async (e) => {

        e.preventDefault();


        // Get farmer ID from login

        const farmerId = localStorage.getItem("userId");


        console.log("Farmer ID:", farmerId);


        if (!farmerId) {

            setMessage("Please login as a farmer first");

            return;

        }


        try {

            setLoading(true);


            const response = await axios.post(

                "http://localhost:3000/crop/add",

                {

                    farmerId: farmerId,

                    cropName: crop.cropName,

                    quantity: Number(crop.quantity),

                    unit: crop.unit,

                    price: Number(crop.price),

                    location: crop.location

                }

            );


            console.log("Add crop response:", response.data);


            setMessage("Crop added successfully 🌱");


            // Clear form

            setCrop({

                cropName: "",
                quantity: "",
                unit: "kg",
                price: "",
                location: ""

            });


            // Go back to dashboard

            setTimeout(() => {

                navigate("/farmer-dashboard");

            }, 1000);


        } catch (error) {

            console.log("Add crop error:", error);

            console.log(
                "Backend error:",
                error.response?.data
            );


            setMessage(

                error.response?.data?.message ||

                "Error adding crop"

            );


        } finally {

            setLoading(false);

        }

    };


    return (

        <div className={styles.container}>

            <div className={styles.card}>

                <h1>🌱 Add New Crop</h1>

                <p>
                    Add your crop to make it available
                    to customers.
                </p>


                <form onSubmit={handleSubmit}>


                    <label>
                        Crop Name
                    </label>

                    <input

                        type="text"

                        name="cropName"

                        value={crop.cropName}

                        onChange={handleChange}

                        placeholder="Example: Tomato"

                        required

                    />


                    <label>
                        Quantity
                    </label>

                    <input

                        type="number"

                        name="quantity"

                        value={crop.quantity}

                        onChange={handleChange}

                        placeholder="Example: 200"

                        min="1"

                        required

                    />


                    <label>
                        Unit
                    </label>

                    <select

                        name="unit"

                        value={crop.unit}

                        onChange={handleChange}

                    >

                        <option value="kg">
                            Kilogram (KG)
                        </option>

                        <option value="gram">
                            Gram
                        </option>

                        <option value="ton">
                            Ton
                        </option>

                        <option value="piece">
                            Piece
                        </option>

                    </select>


                    <label>
                        Price per Unit
                    </label>

                    <input

                        type="number"

                        name="price"

                        value={crop.price}

                        onChange={handleChange}

                        placeholder="Example: 40"

                        min="1"

                        required

                    />


                    <label>
                        Location
                    </label>

                    <input

                        type="text"

                        name="location"

                        value={crop.location}

                        onChange={handleChange}

                        placeholder="Example: Nagercoil"

                        required

                    />


                    <button
                        type="submit"
                        disabled={loading}
                    >

                        {loading
                            ? "Adding Crop..."
                            : "Add Crop 🌾"
                        }

                    </button>


                </form>


                {message && (

                    <p className={styles.message}>

                        {message}

                    </p>

                )}


                <button

                    className={styles.backButton}

                    onClick={() =>
                        navigate("/farmer-dashboard")
                    }

                >

                    ← Back to Dashboard

                </button>


            </div>

        </div>

    );

};


export default AddCrop;