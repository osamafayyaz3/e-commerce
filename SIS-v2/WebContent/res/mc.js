function report(address){
		
	var request = new XMLHttpRequest();
	var data = '';
	
	/* add your code here to grab all parameters from form */
	data += "surname=" + document.getElementById("surname").value + "&";
	data += "minCredit=" + document.getElementById("minCredit").value + "&";
	data += "report=true";
	request.open("GET", (address + "?" + data), true);
	request.onreadystatechange = function() {
		handler(request);
	};
	request.send(null);

}

function handler(request) {
	if ((request.readyState == 4) && (request.status == 200)) {
		var target = document.getElementById("result");
		target.innerHTML = request.responseText;
	}
}

function generate(){
	document.getElementById("generateClicked").value = "true";
}