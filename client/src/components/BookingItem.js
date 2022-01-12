const BookingItem = ({booking, deleteBooking}) =>{
    const checkedInString = (value) => {
        let string = "Yes";
        if (value.toString() === "false") {
            string = "No";
        };
        return string;
    }

    return (
        <>
            <h2>Name:</h2>
            <p>{booking.name}</p>
            <h2>Email Address:</h2>
            <p>{booking.email}</p>
            <h2>Checked In?</h2>
            <p>{checkedInString(booking.checkedIn)}</p>
            <button onClick={()=>deleteBooking(booking._id)}> Delete </button>
            <hr></hr>
        </>
    );
};


export default BookingItem;