const time = document.getElementById('root');
const now = new Date();
const IndianTime = now.toLocaleTimeString();
time.innerHTML = IndianTime;

time.style.fontSize = "120px";
time.style.display ="flex";
time.style.justifyContent = "center";
time.style.height ="100vh";