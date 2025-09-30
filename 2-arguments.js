function arg(a, b) {
    if (arguments.length < 1) {
        console.log("No argument");
} else if (arguments.length === 1) {
        console.log("Argument found");
} else {
        console.log("Arguments found");
}}

arg();
arg(1);
arg(1, 2, 3);