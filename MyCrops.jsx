import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./MyCrops.module.css";

const MyCrops = () => {

    const navigate = useNavigate();

    const [crops, setCrops] = useState([]);
    const [loading, setLoading] = useState(true);

    const farmerId = localStorage.getItem("userId");

    const getMyCrops = async () => {

        try {

            const response = await axios.get(
                `http://localhost:3000/crops/farmer/${farmerId}`
            );

            console.log("My crops:", response.data);

            setCrops(response.data.crops);

        } catch (error) {

            console.log("Error getting my crops:", error);

        } finally {

            setLoading(false);

        }
    };

    useEffect(() => {

        if (farmerId) {
            getMyCrops();
        } else {
            setLoading(false);
        }

    }, [farmerId]);


    return (

        <div className={styles.container}>

            <div className={styles.header}>

                <div>

                    <h1>🌱 My Crops</h1>

                    <p>
                        Manage the crops you have added.
                    </p>

                </div>

                <button
                    className={styles.addButton}
                    onClick={() => navigate("/add-crop")}
                >
                    + Add Crop
                </button>

            </div>


            {loading && (
                <p className={styles.loading}>
                    Loading crops...
                </p>
            )}


            {!loading && crops.length === 0 && (

                <div className={styles.empty}>

                    <div className={styles.emptyIcon}>
                        🌾
                    </div>

                    <h2>
                        No crops added yet
                    </h2>

                    <p>
                        Add your first crop to make it
                        available to customers.
                    </p>

                    <button
                        onClick={() => navigate("/add-crop")}
                    >
                        + Add Your First Crop
                    </button>

                </div>

            )}


            <div className={styles.grid}>

                {crops.map((crop) => (

                    <div
                        className={styles.card}
                        key={crop._id}
                    >

                        <h2>
                            {crop.cropName} 🌾
                        </h2>

                        <p>
                            <strong>Quantity:</strong>{" "}
                            {crop.quantity} {crop.unit}
                        </p>

                        <p>
                            <strong>Price:</strong>{" "}
                            ₹{crop.price} / {crop.unit}
                        </p>

                        <p>
                            <strong>Location:</strong>{" "}
                            {crop.location}
                        </p>

                    </div>

                ))}

            </div>


            <button
                className={styles.backButton}
                onClick={() =>
                    navigate("/farmer-dashboard")
                }
            >
                ← Back to Dashboard
            </button>

        </div>

    );

};

export default MyCrops;