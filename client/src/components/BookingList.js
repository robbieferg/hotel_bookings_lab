import BookingItem from "./BookingItem";

const BookingList = ({bookings, deleteBooking}) => {
    const allBookings = bookings.map((booking) => {
        return <BookingItem booking={booking} deleteBooking={deleteBooking} key={booking._id}/>;
    });

    return (
        <>
        <ul>
            {allBookings}
        </ul>
        </>
        
    );
};

export default BookingList;