// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation) {
    let headQuarters = 42;
    if(pickUpLocation >= headQuarters) {
        return pickUpLocation - headQuarters;
    } else {
        return headQuarters - pickUpLocation;
    }
}



function distanceFromHqInFeet(pickUpLocation) {
   let blocks = distanceFromHqInBlocks(pickUpLocation);
   return blocks * 264;
}

function distanceTravelledInFeet(start, destination) {

}