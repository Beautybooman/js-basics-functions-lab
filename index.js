// Code your solution in this file!
function distanceFromHqInBlocks(location){
    if (location < 42){
        return 42 - location 
    }
    else {
        return location - 42
    }
}
function distanceFromHqInFeet(location){
    if (location < 42){
    return (42 - location) * 264
    }
    else {
        return (location - 42) * 264
    }
}
function distanceTravelledInFeet(destination, distance){
    if (destination < distance){
    return (distance - destination) * 264
    }
    else {
        return (destination - distance) * 264
   }
}
function calculatesFarePrice(destination, distance){

    const result = distanceTravelledInFeet(destination, distance)
    if (result < 400){
        return 0
    }
    else if (result > 400 && result <= 2000){
      return (result - 400) * .02
    }
    else if (result > 2000 && result < 2500){
        return 25 
    }
    else 
    return 'cannot travel that far'
    }
