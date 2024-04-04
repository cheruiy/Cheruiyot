//function to calculate speed and speed limit declared as 70

function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maxDemeritPoints = 12;
//if the user driving at a speed lesser than speed limit output "OK" 
    if (speed < speedLimit) {
        console.log("OK");
        return 0;
    }
   //If the driver gets more than 12 points, the function should print: “License suspended” else display points
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    if (demeritPoints > maxDemeritPoints) {
        console.log("License suspended");
    } else {
        console.log(`Points: ${demeritPoints}`);
    }

    return demeritPoints;
}