function arg(num1, num2) {
    if (arguments.length < 1) {
        console.log("No argument");
    } else {
        console.log(arguments[0]);
    }
}

arg();