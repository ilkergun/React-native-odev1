
let userName =prompt("Lütfen Adinizi Giriniz")

let myName = document.querySelector("#myName")
    myName.innerHTML = userName



function now(i) {
     if (i < 10) {i = "0" + i}
    return i;
  }
  
    let option = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

  const d = new Date();
  let h = now(d.getHours());
  let m = now(d.getMinutes());
  let s = now(d.getSeconds());
  let dy = now(d.toLocaleDateString("tr", option));
  

  let time = h + ":" + m + ":" + s + "/ " + dy;
  document.getElementById("myClock").innerHTML = time;

  