import React from "react";

function BookingForm({ newBooking, handleInputChange, handleSubmit }) {
    return (
        <div className="booking-form">
            <h2>{newBooking.id ? "Update Booking" : "Book a Hall"}</h2>
            <form onSubmit={handleSubmit}>
                {Object.keys(newBooking).map((key) => (
                    key !== 'id' && (
                        <div key={key}>
                            <label>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</label>
                            <input
                                type={key === "email" ? "email" : "text"}
                                name={key}
                                value={newBooking[key]}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    )
                ))}
                <button type="submit">{newBooking.id ? "Update Booking" : "Submit Booking"}</button>
            </form>
        </div>
    );
}

export default BookingForm;
