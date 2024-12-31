import React, { useState } from "react";

function BookingList({ bookings, handleDelete, handleUpdate }) {
    const [editing, setEditing] = useState(null);
    const [updatedBooking, setUpdatedBooking] = useState({
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

    const handleEdit = (booking) => {
        setEditing(booking.id);
        setUpdatedBooking({ ...booking });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedBooking({ ...updatedBooking, [name]: value });
    };

    const handleSave = () => {
        handleUpdate(updatedBooking); // Call the handleUpdate function from App.js
        setEditing(null); // Exit editing mode
        setUpdatedBooking({
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
    };

    return (
        <div className="booking-list">
            <h2>Bookings List</h2>
            <ul>
                {bookings.map((booking) => (
                    <li key={booking.id}>
                        {editing === booking.id ? (
                            <>
                                {Object.keys(updatedBooking).map((key) => (
                                    key !== 'id' && (
                                        <div key={key}>
                                            <label>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</label>
                                            <input
                                                type={key === "email" ? "email" : "text"}
                                                name={key}
                                                value={updatedBooking[key]}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    )
                                ))}
                                <button onClick={handleSave}>Save</button>
                                <button onClick={() => setEditing(null)}>Cancel</button>
                            </>
                        ) : (
                            <>
                                <strong>{booking.hallName}</strong>
                                <p>Applicant: {booking.applicantName}</p>
                                <p>Email: {booking.email}</p>
                                <p>Purpose: {booking.purposeOfUse}</p>
                                <p>Total: ₹{booking.total}</p>
                                <button onClick={() => handleDelete(booking.id)}>Delete</button>
                                <button onClick={() => handleEdit(booking)}>Edit</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookingList;
