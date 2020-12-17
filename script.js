var filesize = 0;
var interval;
function setfilesize(x) {
	filesize = x;
}
function counting() {
		var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	      document.getElementById("chat").innerHTML = this.responseText;
	    }
	  };
	  xhttp.open("POST", "load_mes.php", true);
	  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	  var me1 = document.getElementById("selectUser").options[document.getElementById("selectUser").selectedIndex].value;
		xhttp.send("me=" + me1 + "&who=" + document.getElementById("chat").value);
}
function loadMsg(me, who) {
	clearInterval(interval);
	$chat = document.getElementById('chat');
	document.getElementById("message2").style.display = "block";
	$chat.value = who;
	document.getElementById("h1chat").innerHTML = "chat with <span id=chattitle>"+who+"</span>";
	$chat.innerHTML = "";
	var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("chat").innerHTML += this.responseText;
    }
  };
  xhttp.open("POST", "load_mes.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("me="+me+"&who="+who);
  interval = setInterval(counting, 1000);
};
function sendMsg(me,who,text) {
	var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("chat").innerHTML += this.responseText;
    }
  };
  xhttp.open("POST", "send_mes.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("me="+me+"&who="+who+"&text="+text);
};
function reloadUser() {
	clearInterval(interval);
	document.getElementById("message2").style.display = "none";
	document.getElementById("users2").innerHTML = "";
	var x = document.getElementById("selectUser");
	Array.from(document.querySelector("#selectUser").options).forEach(function(option_element) {
		if (!option_element.selected)
		{
			var para = document.createElement("P");
			para.value = option_element.value;
			para.onclick = function() {loadMsg(x.options[x.selectedIndex].value, option_element.value)};
			para.appendChild(document.createTextNode(option_element.text));
		  document.getElementById("users2").appendChild(para);
	  }
	});
}
