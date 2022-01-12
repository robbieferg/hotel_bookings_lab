const baseURL = 'http://localhost:5000/api/bookings/';

const BookingService = {
    deleteBooking(id) {
        return fetch(baseURL + id, {
            method: 'DELETE'
        });
    }
};

export default BookingService;