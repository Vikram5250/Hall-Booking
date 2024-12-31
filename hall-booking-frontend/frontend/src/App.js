import React, { useState, useEffect } from "react";
import axios from "axios";
import BookingForm from "./components/BookingForm";
import BookingList from "./components/BookingList";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
    const [bookings, setBookings] = useState([]);
    const [newBooking, setNewBooking] = useState({
        id: null, // Adding the id field to handle updates
        mobileNo: "",
        hallName: "",
        applicantName: "",
        email: "",
        purposeOfUse: "",
        rent: "",
        additionalCharges: "",
        total: "",
        remark: "",
    });

    useEffect(() => {
        // Fetch bookings when the component is mounted
        axios
            .get("http://localhost:8080/api/bookings")
            .then((response) => setBookings(response.data))
            .catch((error) => console.error("Error fetching bookings:", error));
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBooking({ ...newBooking, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (newBooking.id) {
            // If there's an ID, it's an update request
            axios
                .put(`http://localhost:8080/api/bookings/${newBooking.id}`, newBooking)
                .then((response) => {
                    // Update the bookings list with the modified booking
                    setBookings((prevBookings) =>
                        prevBookings.map((booking) =>
                            booking.id === newBooking.id ? response.data : booking
                        )
                    );
                    // Reset the form
                    setNewBooking({
                        id: null,
                        mobileNo: "",
                        hallName: "",
                        applicantName: "",
                        email: "",
                        purposeOfUse: "",
                        rent: "",
                        additionalCharges: "",
                        total: "",
                        remark: "",
                    });
                })
                .catch((error) => console.error("Error updating booking:", error));
        } else {
            // If no ID, it's an add new booking request
            axios
                .post("http://localhost:8080/api/bookings", newBooking)
                .then((response) => {
                    setBookings((prevBookings) => [...prevBookings, response.data]);
                    setNewBooking({
                        id: null,
                        mobileNo: "",
                        hallName: "",
                        applicantName: "",
                        email: "",
                        purposeOfUse: "",
                        rent: "",
                        additionalCharges: "",
                        total: "",
                        remark: "",
                    });
                })
                .catch((error) => console.error("Error submitting booking:", error));
        }
    };

    const handleDelete = (id) => {
        axios
            .delete(`http://localhost:8080/api/bookings/${id}`)
            .then(() => setBookings((prevBookings) => prevBookings.filter((booking) => booking.id !== id)))
            .catch((error) => console.error("Error deleting booking:", error));
    };

    const handleUpdate = (updatedBooking) => {
        axios
            .put(`http://localhost:8080/api/bookings/${updatedBooking.id}`, updatedBooking)
            .then((response) => {
                setBookings((prevBookings) =>
                    prevBookings.map((booking) =>
                        booking.id === updatedBooking.id ? response.data : booking
                    )
                );
            })
            .catch((error) => console.error("Error updating booking:", error));
    };

    return (
        <Router>
            <div className="App">
                <h1>Hall Booking System</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/bookings">Bookings</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <BookingForm
                                newBooking={newBooking}
                                handleInputChange={handleInputChange}
                                handleSubmit={handleSubmit}
                            />
                        }
                    />
                    <Route
                        path="/bookings"
                        element={<BookingList bookings={bookings} handleDelete={handleDelete} handleUpdate={handleUpdate} />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
