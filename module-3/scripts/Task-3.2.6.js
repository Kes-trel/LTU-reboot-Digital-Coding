var temperature = -1;
var snowing = true;

if (temperature < 0 && snowing) {
    console.log("Stay inside!")
} else if (temperature < 30) {
    console.log("Wear your hat and cote!")
} else if (temperature < 50) {
    console.log("Wear a coat!")
} else {
    console.log("Comando time!")
}

