var navisopen=false;

function closeNav(){
	document.getElementById("mySidenav").style.width = "0";
	navisopen=false;
}

function openOrClosenav(){
	if(navisopen===true){
		document.getElementById("mySidenav").style.width = "0";
		navisopen=false;
	} else{
		document.getElementById("mySidenav").style.width = "250px";
		navisopen=true;
	}
}
