function myFunction() {
	var text1 = document.getElementById("word1").innerHTML;
	var text2 = document.getElementById("word2").innerHTML;
	var text3 = document.getElementById("word3").innerHTML;

	var text = text1+" "+text2+ " "+text3;

	const el = document.createElement('textarea');
	el.value = text;
	document.body.appendChild(el);
	el.select()
	document.execCommand("copy");
	alert("Copied the text: " + el.value);
	document.body.removeChild(el);
}