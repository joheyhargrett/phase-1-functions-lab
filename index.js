// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation) {
  let headQuarters = 42;
  if (pickUpLocation >= headQuarters) {
    return pickUpLocation - headQuarters;
  } else {
    return headQuarters - pickUpLocation;
  }
}

distanceFromHqInBlocks(50);

function distanceFromHqInFeet(pickUpLocation) {
  let blocks = distanceFromHqInBlocks(pickUpLocation);
  return blocks * 264;
}

distanceFromHqInFeet(50);

function distanceTravelledInFeet(start, destination) {
  if (destination > start) {
    return (destination - start) * 264;
  } else {
    return (start - destination) * 264;
  }
}

function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    if (distanceInFeet <= 400) {
      return 0; 
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02; 
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far'; 
    }
  }
  