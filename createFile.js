const fs = require("fs");

    
fs.writeFile("/Users/sibsa/Desktop/WebProject/calculator/script.js", "hello", (err) => {
	if (err) throw err;
	console.log('File has been saved!');
});
    
fs.writeFile("/Users/sibsa/Desktop/WebProject/calculator/style.css", "hello", (err) => {
	if (err) throw err;
	console.log('File has been saved!');
});