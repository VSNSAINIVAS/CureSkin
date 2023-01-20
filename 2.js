inputItems = [{a:1}, {b:2}, {c:3}];
let outPutItem = {};
inputItems.forEach(element => {
    outPutItem[Object.keys(element)[0]] = Object.values(element)[0];
});
console.log(inputItems);
console.log(outPutItem);