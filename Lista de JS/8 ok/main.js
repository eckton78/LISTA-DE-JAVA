function arrayMax(array) {
    var max = -Infinity;
    for ( i = 0; i != array.length; ++i){
        if (array[i] > max){
            max = array[i];
        }
    }
    return max;
}
console.log(arrayMax([ -5, -2, -7, 0,  8]));