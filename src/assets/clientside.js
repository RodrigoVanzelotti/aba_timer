if (!window.dash_clientside) { window.dash_clientside = {}; }
window.dash_clientside.clientside = {
    // update_timer: function (value) {
    //     return new Date().toUTCString();
    // }
    update_timer: function () {
        // Step 1: Set the event date and time
        const eventDateTime = new Date("2023-12-17T16:00:00");

        // Step 2: Get the current date and time
        const now = new Date();

        // Step 3: Calculate the difference in time (in milliseconds)
        const timeDiff = eventDateTime - now;

        // Convert the difference to days, hours, minutes, and seconds
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hoursDiff = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesDiff = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const secondsDiff = Math.floor((timeDiff % (1000 * 60)) / 1000);

        // Step 5: Check if the event is in the past
        if (timeDiff < 0) {
            return "ABADAY PORRA";
        }

        // Step 6: Return the number of hours and minutes
        return `${daysDiff} dias, ${hoursDiff}h${minutesDiff}min${secondsDiff}s`;
    }
}

// function timeUntilEvent() {
//     // Step 1: Set the event date and time
//     const eventDateTime = new Date("2023-12-23T16:00:00");

//     // Step 2: Get the current date and time
//     const now = new Date();

//     // Step 3: Calculate the difference in time (in milliseconds)
//     const timeDiff = eventDateTime - now;

//     // Step 4: Convert the difference to hours and minutes
//     const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
//     const minutesDiff = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

//     // Step 5: Check if the event is in the past
//     if (timeDiff < 0) {
//         return "Time done!";
//     }

//     // Step 6: Return the number of hours and minutes
//     return `${hoursDiff} hours and ${minutesDiff} minutes until the event.`;
// }