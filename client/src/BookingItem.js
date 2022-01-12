const BookingItem = ({booking, deleteBooking}) =>{
    return (
        <>
            <h2>Name:</h2>
            <p>{booking.name}</p>
            <h2>Email Address:</h2>
            <p>{booking.email}</p>
            <h2>Checked In?</h2>
            <p>{booking.checkedIn}</p>
            <button onClick={()=>deleteBooking(booking._id)}> Delete </button>
        </>
    )
}


export default GameCard;