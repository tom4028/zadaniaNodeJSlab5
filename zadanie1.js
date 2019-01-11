
const fs = require("fs");
var user = fs.readFileSync('user.json');
console.log(JSON.parse(user));
