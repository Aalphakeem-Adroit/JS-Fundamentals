const args = process.argv.length - 2;
const firstArgNum = parseInt(process.argv[2]);

for (let i = 0; i < firstArgNum; i++) {
    console.log("C is fun");
}

if (isNaN(firstArgNum)) {
    console.log("Missing number of occurrences");
}