var btnstart=document.querySelector(".start");
var btnstop=document.querySelector(".stop");
var btntime=document.querySelector(".btntime");
var setV=document.querySelector(".visib");
var setV2=document.querySelector(".visib2");

var count=0;
btntime.addEventListener("click",function() {
	console.log("Add Timer");

	if(count==0){
		showDiv();
		count++;
	}
	else{
		showDiv2();
		count++;
	}

});



btnstart.addEventListener("click",function(){
	viewTime();
});

btnstop.addEventListener("click",function(){
	stopTime();
});
	

	function pad(val){
	valString=val+ "";
	if(valString.length<2){
		return "0"+valString;
	}
	else 
		return valString;

}

var totalsec=0;
function setTime(secondslabel,minuteslabel,hourslabel){
	++totalsec;
	seconds=pad(totalsec%60);
	minutes=pad(parseInt((totalsec/60)%60));
	hours=pad(parseInt((totalsec/3600)%60));
	secondslabel.innerHTML=seconds;
	minuteslabel.innerHTML=minutes;
	hourslabel.innerHTML=hours;

}

function viewTime(){
	sec=document.querySelector("#seconds");
	min=document.querySelector("#minutes");
	hour=document.querySelector("#hours");
	console.log("hi");
	int_time=setInterval(function(){
		setTime(sec,min,hour);
	},1000);
}

function stopTime(){
	clearInterval(int_time);
}

function showDiv(){
	setV.style.visibility="visible";
	setV.classList.add("vb");
}

function showDiv2(){
	setV2.style.visibility="visible";
	setV2.style.backgroundColor= rgba(0,0,0,0.2);
	setV2.classList.add("vb")

}