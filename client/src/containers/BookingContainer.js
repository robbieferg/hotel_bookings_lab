import { useState, useEffect } from "react";
import BookingList from "../components/BookingList";

const BookingContainer = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        getBookings();
    }, []);

    const getBookings = () => {
        fetch("http://localhost:5000/api/bookings/")
        .then(results => results.json())
        .then(data => setBookings(data));
    };

    return (
        <>
        <BookingList bookings={bookings} />
        </>
    )
};

export default BookingContainer;