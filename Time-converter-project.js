let hoursInput = document.getElementById("hoursInput");
let minutesInput = document.getElementById("minutesInput");
let convertBtn = document.getElementById("convertBtn");
let timeInSeconds = document.getElementById("timeInSeconds");
let errorMsg = document.getElementById("errorMsg");
timeInSeconds.classList.add("d-none");
errorMsg.style.color = "white";


function ssm() {
    let ho = hoursInput.value;
    let mo = minutesInput.value;
    if (ho === "" || mo === "") {
        errorMsg.textContent = "Please enter a valid number of hours";
        timeInSeconds.classList.add("d-none");
    } else {
        let ss = ho * 3600;
        let sss = mo * 60;
        let hh = ss + sss;
        timeInSeconds.classList.add("d-block");
        timeInSeconds.textContent = hh + "s";
        timeInSeconds.classList.add("y");
        timeInSeconds.style.outlineColor = "white";

    }
}
convertBtn.addEventListener("click", ssm)