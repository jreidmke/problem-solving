function averagePair(arr, avg) {
    if(!arr.length) return false;

    let leftBound = 0;
    let rightBound = arr.length - 1;

    while(rightBound > leftBound) {
        if((arr[leftBound] + arr[rightBound])/2 === avg) {
            return true;
        }  else if ((arr[leftBound] + arr[rightBound])/2 > avg) {
            rightBound--
        } 
        else {
            leftBound++
        } 
    };
    return false; 
}

module.exports = averagePair;
