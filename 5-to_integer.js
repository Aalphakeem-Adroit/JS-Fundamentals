// const args = process.argv.length - 2;

// if (typeof process.argv[2] === 'string') {
//     console.log("Not a number");
//     } else if (typeof args === 'number') {
//         console.log("My number: " + Math.trunc(process.argv[2]));
//     } else {
//         console.log("Not a number");
//     }

// console.log(typeof process.argv[2]);


const args = process.argv.length - 2;
const num = parseInt(process.argv[2]);

if (isNaN(num)) {
    console.log("Not a number");
} else {
    console.log("My number: " + num);
}