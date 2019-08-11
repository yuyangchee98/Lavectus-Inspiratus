var verb_list;
var noun_list;

var subject;
var verb;
var object;

var font;

var getWord1;
var getWord2;
var getWord3;



function preload() {
	noun_list = loadStrings("Cnoun.txt");
	verb_list = loadStrings("Cverb.txt");
}

function setup() {
    subject = noun_list[Math.floor(Math.random() * noun_list.length)];
    verb = verb_list[Math.floor(Math.random() * verb_list.length)];
	object = noun_list[Math.floor(Math.random() * noun_list.length)];
	
	print(subject);
	print(verb);
	print(object);

	getWord1 = document.getElementById('word1');
	getWord2 = document.getElementById('word2');
	getWord3 = document.getElementById('word3');


    setInterval(function(){ subject = noun_list[Math.floor(Math.random() * noun_list.length)];
    	object = noun_list[Math.floor(Math.random() * noun_list.length)];
    	verb = verb_list[Math.floor(Math.random() * verb_list.length)]; }, 4000);
}

function draw() {
	getWord1.innerHTML = subject;
	getWord2.innerHTML = verb;
	getWord3.innerHTML = object;
}


/*
subject = noun_list[Math.floor(Math.random() * noun_list.length)];
    	object = noun_list[Math.floor(Math.random() * noun_list.length)];
    	verb = verb_list[Math.floor(Math.random() * verb_list.length)];

    	*/