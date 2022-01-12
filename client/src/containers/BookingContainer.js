import { useState, useEffect } from "react";
import BookingList from "../components/BookingList";
import BookingService from "../services/BookingService";

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

    const deleteBooking = (idToDelete) => {
        BookingService.deleteBooking(idToDelete);
        setBookings(bookings.filter(booking => booking._id !== idToDelete));
      };

    return (
        <>
        <BookingList bookings={bookings} deleteBooking={deleteBooking} />
        </>
    )
};

export default BookingContainer;