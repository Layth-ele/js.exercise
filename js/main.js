for (var i = 0; i < 100; i++) {
 var bulb = document.createElement("div");
 var rand = Math.floor(Math.random()*900)+1;
 bulb.className = "bulb";
 document.getElementById("lights").appendChild(bulb);
 bulb.style.transform ="rotate("+rand+"deg)";
}
