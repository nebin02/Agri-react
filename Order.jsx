import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./Order.module.css";

const Order = () => {

const navigate = useNavigate();

const [orders, setOrders] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

const customerId = localStorage.getItem("userId");


// ==========================================
// GET CUSTOMER ORDERS
// ==========================================

const getOrders = async () => {

try {

if (!customerId) {
setError("Please login first.");
setLoading(false);
return;
}

const response = await axios.get(
`http://localhost:3000/orders/customer/${customerId}`
);

console.log("Orders:", response.data);

setOrders(response.data.orders || []);

setLoading(false);

} catch (error) {

console.log("Get orders error:", error);

setError(
error.response?.data?.message ||
"Unable to load orders."
);

setLoading(false);
}
};


useEffect(() => {

getOrders();

}, []);


// ==========================================
// LOADING
// ==========================================

if (loading) {

return (
<div className={styles.loading}>
<h2>Loading your orders... 📦</h2>
</div>
);
}


// ==========================================
// ERROR
// ==========================================

if (error) {

return (
<div className={styles.error}>

<h2>{error}</h2>

<button onClick={() => navigate("/customer-crops")}>
Go Back
</button>

</div>
);
}


// ==========================================
// PAGE
// ==========================================

return (

<div className={styles.container}>

<div className={styles.header}>

<div>
<h1>My Orders 📦</h1>

<p>
View all your crop orders and their status.
</p>
</div>

<button
className={styles.backButton}
onClick={() => navigate("/customer-crops")}
>
← Continue Shopping
</button>

</div>


{/* ==========================================
NO ORDERS
========================================== */}

{orders.length === 0 ? (

<div className={styles.noOrders}>

<div className={styles.emptyIcon}>
📦
</div>

<h2>No Orders Yet</h2>

<p>
You haven't placed any orders yet.
</p>

<button
onClick={() => navigate("/customer-crops")}
>
🌾 Browse Crops
</button>

</div>

) : (

<div className={styles.orderGrid}>

{orders.map((order) => (

<div
className={styles.orderCard}
key={order._id}
>

{/* Order Header */}

<div className={styles.orderHeader}>

<div>
<h2>
🌾 {order.cropName}
</h2>

<small>
Order ID: {order._id}
</small>
</div>

<span
className={`${styles.status} ${
styles[
order.orderStatus?.toLowerCase()
]
}`}
>
{order.orderStatus}
</span>

</div>


{/* Order Details */}

<div className={styles.details}>

<div className={styles.detailRow}>
<span>📦 Quantity</span>

<strong>
{order.quantity} {order.unit}
</strong>
</div>


<div className={styles.detailRow}>
<span>💰 Price</span>

<strong>
₹{order.price} / {order.unit}
</strong>
</div>


<div className={styles.detailRow}>
<span>💵 Total Amount</span>

<strong>
₹{order.totalAmount}
</strong>
</div>


<div className={styles.detailRow}>
<span>💳 Payment</span>

<strong>
{order.paymentMethod}
</strong>
</div>


<div className={styles.detailRow}>
<span>💳 Payment Status</span>

<strong>
{order.paymentStatus}
</strong>
</div>


<div className={styles.address}>

<strong>
📍 Delivery Address
</strong>

<p>
{order.address}
</p>

</div>


<div className={styles.date}>

Ordered on:{" "}

{new Date(
order.createdAt
).toLocaleString()}

</div>

</div>

</div>

))}

</div>

)}

</div>
);
};


export default Order;