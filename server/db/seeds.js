const Db = require("mongodb/lib/db");

use hotel;
Db.dropDatabase();

Db.bookings.insertMany([
    {
        name: "Thomas Anderson",
        email: "mranderson@netscape.com",
        checkedIn: true
    },
    {
        name: "Barry Chuckle",
        email: "chuckle1@gmail.com",
        checkedIn: false
    },
    {
        name: "Sean Connery",
        email: "connerysean@hotmail.com",
        checkedIn: true
    }
]);