class Rabbit {
    hello(type) {
	this.type = type;
    }
    speak(line) {
	console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let killerRabbit = new Rabbit("killer");
let whiteRabbit = new Rabbit("black");

killerRabbit.speak("hello");

