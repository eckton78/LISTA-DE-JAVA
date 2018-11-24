var arr = ['eckton', 'junior', 'eckton'];
var novaArr = arr.filter(function(este, i) {
    return arr.indexOf(este) == i;
})
console.log(novaArr);


