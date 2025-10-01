// function arg(num1, num2) {
//     if (arguments.length < 1) {
//         console.log("No argument");
//     } else {
//         console.log(arguments[0]);
//     }
// }

// arg();

const args = process.argv.length - 2;

if (args <1) {
    console.log("No argument");
} else {
    console.log(process.argv[2]);
};