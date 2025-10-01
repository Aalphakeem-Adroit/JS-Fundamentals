const args = process.argv.length - 2;

const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);

function add(a, b) {
    if (isNaN(a) || isNaN(b)) {
        console.log("NaN");
    } else {
        return a + b;
    }
}

console.log(add(a, b));