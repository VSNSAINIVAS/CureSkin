inputItems = {a:1, b:2, c:3}
listInputItems = []
Object.entries(inputItems).map((k) => {
    createdObject = {[k[0]]: k[1]};
    listInputItems.push(createdObject);
});
console.log(inputItems);
console.log(listInputItems);