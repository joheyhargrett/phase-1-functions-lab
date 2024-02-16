// Code your solution in this file!

const headQuarters = 42;
function distanceFromHqInBlocks(pickup) {
  if (pickup < 42) {
    return headQuarters - pickup;
  } else {
    return pickup - headQuarters;
  }
}
distanceFromHqInBlocks();

function distanceFromHqInFeet(pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * 264;
}
distanceFromHqInFeet();

function distanceTravelledInFeet(start, destination) {
  if (destination >= start) {
    return (destination - start) * 264;
  } else {
    return (start - destination) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
