a = ['eckton', 'junior', 'heidi']

a.sort(function (a, b){ 
  return Math.floor(Math.random() * 10);
});

console.log(a);