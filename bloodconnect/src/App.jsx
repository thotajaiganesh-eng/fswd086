
<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>BloodConnect - Blood Banking System</title>

<style>

/* =========================
   BASIC SETTINGS
========================= */

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, sans-serif;
    color: #333;

    background:
        linear-gradient(
            -45deg,
            #fff5f5,
            #ffe0e0,
            #fff,
            #ffd6d6
        );

    background-size: 400% 400%;

    animation: backgroundMove 12s ease infinite;

    overflow-x: hidden;
}


/* =========================
   FALLING BLOOD DROPS
========================= */

.blood-drop {
    position: fixed;
    top: -50px;

    color: #d60000;

    font-size: 25px;

    opacity: 0.25;

    z-index: -1;

    animation: falling linear infinite;
}

.drop1 {
    left: 5%;
    animation-duration: 8s;
}

.drop2 {
    left: 15%;
    animation-duration: 11s;
    animation-delay: 2s;
}

.drop3 {
    left: 30%;
    animation-duration: 9s;
    animation-delay: 1s;
}

.drop4 {
    left: 50%;
    animation-duration: 12s;
    animation-delay: 3s;
}

.drop5 {
    left: 70%;
    animation-duration: 10s;
    animation-delay: 1s;
}

.drop6 {
    left: 90%;
    animation-duration: 7s;
    animation-delay: 4s;
}


/* =========================
   HEADER
========================= */

header {

    background:
        linear-gradient(
            90deg,
            #990000,
            #e60000,
            #b30000,
            #e60000
        );

    background-size: 300% 300%;

    animation: headerGradient 6s ease infinite;

    color: white;

    padding: 18px 40px;

    display: flex;

    justify-content: space-between;

    align-items: center;

    position: sticky;

    top: 0;

    z-index: 1000;

    box-shadow: 0 4px 20px rgba(150,0,0,0.4);
}


/* Logo */

.logo {

    font-size: 26px;

    font-weight: bold;

    animation: heartbeat 1.5s infinite;

    cursor: pointer;
}


/* Navigation */

nav a {

    color: white;

    text-decoration: none;

    margin: 0 10px;

    font-weight: bold;

    cursor: pointer;

    position: relative;

    transition: 0.3s;
}


nav a:hover {

    color: #ffcccc;

    transform: scale(1.1);

}


/* Navigation underline animation */

nav a::after {

    content: "";

    position: absolute;

    width: 0;

    height: 2px;

    background: white;

    left: 0;

    bottom: -6px;

    transition: 0.3s;
}


nav a:hover::after {

    width: 100%;
}


/* =========================
   PAGE
========================= */

.page {

    display: none;

    padding: 60px 8%;

    min-height: 75vh;
}


.page.active {

    display: block;

    animation: pageEnter 0.7s ease;
}


/* =========================
   HOME
========================= */

.hero {

    text-align: center;

    padding: 60px 20px;
}


.hero h1 {

    font-size: 50px;

    color: #b30000;

    animation:
        titleFloat 3s ease-in-out infinite,
        titleGlow 2s infinite alternate;
}


.hero p {

    font-size: 20px;

    margin: 25px auto;

    max-width: 750px;

    animation: fadeIn 1.5s ease;
}


/* =========================
   BUTTONS
========================= */

.buttons {

    margin-top: 30px;
}


.buttons button {

    padding: 15px 28px;

    margin: 10px;

    border: none;

    border-radius: 30px;

    background: linear-gradient(
        45deg,
        #b30000,
        #e60000
    );

    color: white;

    font-size: 17px;

    cursor: pointer;

    box-shadow: 0 5px 15px rgba(180,0,0,0.3);

    transition: 0.3s;

    animation: buttonFloat 2.5s infinite;
}


.buttons button:hover {

    transform:
        translateY(-8px)
        scale(1.08);

    box-shadow:
        0 10px 25px rgba(180,0,0,0.5);

}


/* =========================
   STATISTICS
========================= */

.stats {

    display: flex;

    justify-content: center;

    gap: 25px;

    margin-top: 55px;

    flex-wrap: wrap;
}


.stat-card {

    background: rgba(255,255,255,0.95);

    width: 230px;

    padding: 30px;

    text-align: center;

    border-radius: 20px;

    box-shadow:
        0 8px 25px rgba(0,0,0,0.15);

    transition: 0.4s;

    animation: cardFloat 3s ease-in-out infinite;
}


.stat-card:nth-child(2) {

    animation-delay: 0.4s;
}


.stat-card:nth-child(3) {

    animation-delay: 0.8s;
}


.stat-card:hover {

    transform:
        translateY(-15px)
        scale(1.05);

    box-shadow:
        0 15px 35px rgba(180,0,0,0.25);
}


.stat-card h2 {

    color: #c00000;

    font-size: 40px;

    margin-bottom: 8px;

    animation: numberPulse 2s infinite;
}


.stat-card p {

    font-size: 17px;

    font-weight: bold;
}


/* =========================
   FORM
========================= */

.form-box {

    max-width: 600px;

    margin: auto;

    background:
        rgba(255,255,255,0.95);

    padding: 35px;

    border-radius: 20px;

    box-shadow:
        0 10px 30px rgba(0,0,0,0.15);

    animation: formAppear 0.8s ease;
}


.form-box h2 {

    text-align: center;

    color: #b30000;

    margin-bottom: 25px;

    animation: headingPulse 2s infinite;
}


/* Inputs */

input,
select,
textarea {

    width: 100%;

    padding: 14px;

    margin: 9px 0;

    border:
        2px solid #eee;

    border-radius: 10px;

    outline: none;

    transition: 0.3s;

    background: #fff;
}


input:focus,
select:focus,
textarea:focus {

    border-color: #d60000;

    transform: scale(1.02);

    box-shadow:
        0 0 12px rgba(214,0,0,0.2);
}


textarea {

    height: 110px;

    resize: none;
}


/* Form Button */

.form-box button {

    width: 100%;

    padding: 14px;

    border: none;

    border-radius: 10px;

    background:
        linear-gradient(
            45deg,
            #b30000,
            #e60000
        );

    color: white;

    font-size: 17px;

    cursor: pointer;

    margin-top: 12px;

    transition: 0.3s;
}


.form-box button:hover {

    transform:
        translateY(-4px)
        scale(1.02);

    box-shadow:
        0 8px 20px rgba(180,0,0,0.4);
}


/* =========================
   AVAILABILITY TABLE
========================= */

table {

    width: 100%;

    border-collapse: collapse;

    background: white;

    box-shadow:
        0 8px 25px rgba(0,0,0,0.12);

    animation: tableAppear 0.8s ease;

    overflow: hidden;
}


th,
td {

    padding: 15px;

    border: 1px solid #ddd;

    text-align: center;
}


th {

    background:
        linear-gradient(
            90deg,
            #990000,
            #e60000
        );

    color: white;
}


tr {

    transition: 0.3s;
}


tr:hover {

    background: #fff0f0;

    transform: scale(1.01);
}


.available {

    color: green;

    font-weight: bold;

    animation: statusBlink 2s infinite;
}


.low {

    color: orange;

    font-weight: bold;

    animation: statusBlink 1.5s infinite;
}


.out {

    color: red;

    font-weight: bold;

    animation: emergencyBlink 1s infinite;
}


/* =========================
   EMERGENCY
========================= */

.emergency {

    border:
        3px solid red;

    animation:
        emergencyPulse 1.5s infinite;
}


/* =========================
   FOOTER
========================= */

footer {

    background:
        linear-gradient(
            90deg,
            #990000,
            #cc0000,
            #990000
        );

    background-size: 200% 200%;

    animation: headerGradient 6s infinite;

    color: white;

    text-align: center;

    padding: 22px;

}


/* =========================
   SCROLL TOP BUTTON
========================= */

#topButton {

    position: fixed;

    right: 25px;

    bottom: 25px;

    width: 50px;

    height: 50px;

    border: none;

    border-radius: 50%;

    background: #b30000;

    color: white;

    font-size: 22px;

    cursor: pointer;

    display: none;

    z-index: 999;

    box-shadow:
        0 5px 15px rgba(0,0,0,0.3);

    animation: topButtonPulse 2s infinite;
}


/* =========================
   ANIMATIONS
========================= */

@keyframes backgroundMove {

    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}


@keyframes headerGradient {

    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}


@keyframes heartbeat {

    0%, 100% {
        transform: scale(1);
    }

    25% {
        transform: scale(1.08);
    }

    40% {
        transform: scale(1);
    }

    60% {
        transform: scale(1.12);
    }
}


@keyframes falling {

    0% {
        transform:
            translateY(-50px)
            rotate(0deg);
    }

    100% {
        transform:
            translateY(110vh)
            rotate(360deg);
    }
}


@keyframes titleFloat {

    0%, 100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}


@keyframes titleGlow {

    from {
        text-shadow:
            0 0 5px #ff9999;
    }

    to {
        text-shadow:
            0 0 25px red,
            0 0 40px #ff6666;
    }
}


@keyframes buttonFloat {

    0%, 100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-4px);
    }
}


@keyframes cardFloat {

    0%, 100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-8px);
    }
}


@keyframes numberPulse {

    0%, 100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1);
    }
}


@keyframes pageEnter {

    from {

        opacity: 0;

        transform:
            translateY(30px)
            scale(0.98);
    }

    to {

        opacity: 1;

        transform:
            translateY(0)
            scale(1);
    }
}


@keyframes formAppear {

    from {

        opacity: 0;

        transform:
            translateY(40px)
            scale(0.95);
    }

    to {

        opacity: 1;

        transform:
            translateY(0)
            scale(1);
    }
}


@keyframes tableAppear {

    from {

        opacity: 0;

        transform:
            translateY(30px);
    }

    to {

        opacity: 1;

        transform:
            translateY(0);
    }
}


@keyframes fadeIn {

    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}


@keyframes headingPulse {

    0%, 100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.03);
    }
}


@keyframes statusBlink {

    0%, 100% {
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }
}


@keyframes emergencyBlink {

    0%, 100% {
        opacity: 1;
    }

    50% {
        opacity: 0.4;
    }
}


@keyframes emergencyPulse {

    0%, 100% {

        box-shadow:
            0 0 5px red;
    }

    50% {

        box-shadow:
            0 0 25px red,
            0 0 45px rgba(255,0,0,0.4);
    }
}


@keyframes topButtonPulse {

    0%, 100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1);
    }
}


/* =========================
   MOBILE
========================= */

@media(max-width: 700px) {

    header {

        flex-direction: column;

        gap: 15px;

        padding: 15px;
    }

    nav {

        text-align: center;

        line-height: 2;
    }

    nav a {

        margin: 5px;
    }

    .hero h1 {

        font-size: 36px;
    }

    .hero p {

        font-size: 16px;
    }

    .stats {

        flex-direction: column;

        align-items: center;
    }

    .stat-card {

        width: 90%;
    }

    table {

        font-size: 12px;
    }

}


/* =========================
   REDUCED MOTION
========================= */

@media(prefers-reduced-motion: reduce) {

    * {

        animation-duration: 0.01ms !important;

        animation-iteration-count: 1 !important;

        scroll-behavior: auto !important;
    }
}

</style>

</head>


<body>


<!-- FALLING BLOOD DROPS -->

<div class="blood-drop drop1">🩸</div>
<div class="blood-drop drop2">🩸</div>
<div class="blood-drop drop3">🩸</div>
<div class="blood-drop drop4">🩸</div>
<div class="blood-drop drop5">🩸</div>
<div class="blood-drop drop6">🩸</div>


<!-- =========================
     HEADER
========================= -->

<header>

<div class="logo">
    🩸 BloodConnect
</div>

<nav>

<a onclick="showPage('home')">
    Home
</a>

<a onclick="showPage('wantBlood')">
    Want Blood
</a>

<a onclick="showPage('giveBlood')">
    Give Blood
</a>

<a onclick="showPage('availability')">
    Availability
</a>

<a onclick="showPage('emergency')">
    Emergency
</a>

</nav>

</header>


<!-- =========================
     HOME
========================= -->

<section id="home" class="page active">

<div class="hero">

<h1>
    Donate Blood, Save Lives ❤️
</h1>

<p>
    Welcome to BloodConnect – connecting blood donors,
    hospitals and patients during emergencies.
</p>


<div class="buttons">

<button onclick="showPage('giveBlood')">
    ❤️ Give Blood
</button>

<button onclick="showPage('wantBlood')">
    🩸 EMERGENCY</button>

</div>


<!-- STATISTICS -->

<div class="stats">


<div class="stat-card">

<h2 id="donorCount">
    0
</h2>

<p>
    Registered Donors
</p>

</div>


<div class="stat-card">

<h2 id="bloodCount">
    0
</h2>

<p>
    Available Blood Units
</p>

</div>


<div class="stat-card">

<h2>
    24
</h2>

<p>
    Blood Banks
</p>

</div>


</div>

</div>

</section>


<!-- =========================
     WANT BLOOD
========================= -->

<section id="wantBlood" class="page">

<div class="form-box">

<h2>
    🩸 Request Blood
</h2>


<form onsubmit="requestBlood(event)">


<input
type="text"
id="patientName"
placeholder="Patient Name"
required
>


<select id="bloodGroup" required>

<option value="">
    Select Blood Group
</option>

<option>A+</option>
<option>A-</option>
<option>B+</option>
<option>B-</option>
<option>AB+</option>
<option>AB-</option>
<option>O+</option>
<option>O-</option>

</select>


<input
type="number"
id="units"
placeholder="Required Units"
min="1"
required
>


<input
type="text"
id="hospitalName"
placeholder="Hospital Name"
required
>


<input
type="tel"
id="hospitalContact"
placeholder="Hospital Contact"
required
>


<button type="submit">
    Request Blood 🩸
</button>


</form>

</div>

</section>


<!-- =========================
     GIVE BLOOD
========================= -->

<section id="giveBlood" class="page">

<div class="form-box">

<h2>
    ❤️ Register as Blood Donor
</h2>


<form onsubmit="registerDonor(event)">


<input
type="text"
id="donorName"
placeholder="Donor Name"
required
>


<input
type="number"
id="age"
placeholder="Age"
min="18"
required
>


<select id="donorBlood" required>

<option value="">
    Select Blood Group
</option>

<option>A+</option>
<option>A-</option>
<option>B+</option>
<option>B-</option>
<option>AB+</option>
<option>AB-</option>
<option>O+</option>
<option>O-</option>

</select>


<input
type="tel"
id="donorPhone"
placeholder="Phone Number"
required
>


<input
type="text"
id="donorCity"
placeholder="City"
required
>


<button type="submit">
    Register as Donor ❤️
</button>


</form>

</div>

</section>


<!-- =========================
     AVAILABILITY
========================= -->

<section id="availability" class="page">

<h2
style="
text-align:center;
color:#b30000;
margin-bottom:25px;
">

🩸 Blood Availability

</h2>


<table>

<tr>

<th>
    Blood Group
</th>

<th>
    Available Units
</th>

<th>
    Status
</th>

</tr>


<tr>

<td>A+</td>

<td id="stock-A+">
    0
</td>

<td id="status-A+">
</td>

</tr>


<tr>

<td>A-</td>

<td id="stock-A-">
    0
</td>

<td id="status-A-">
</td>

</tr>


<tr>

<td>B+</td>

<td id="stock-B+">
    0
</td>

<td id="status-B+">
</td>

</tr>


<tr>

<td>B-</td>

<td id="stock-B-">
    0
</td>

<td id="status-B-">
</td>

</tr>


<tr>

<td>AB+</td>

<td id="stock-AB+">
    0
</td>

<td id="status-AB+">
</td>

</tr>


<tr>

<td>AB-</td>

<td id="stock-AB-">
    0
</td>

<td id="status-AB-">
</td>

</tr>


<tr>

<td>O+</td>

<td id="stock-O+">
    0
</td>

<td id="status-O+">
</td>

</tr>


<tr>

<td>O-</td>

<td id="stock-O-">
    0
</td>

<td id="status-O-">
</td>

</tr>


</table>

</section>


<!-- =========================
     EMERGENCY
========================= -->

<section id="emergency" class="page">

<div class="form-box emergency">

<h2>
    🚨 Emergency Blood Request
</h2>


<form onsubmit="emergencyRequest(event)">


<input
type="text"
id="emergencyPatient"
placeholder="Patient Name"
required
>


<select id="emergencyBlood" required>

<option value="">
    Required Blood Group
</option>

<option>A+</option>
<option>A-</option>
<option>B+</option>
<option>B-</option>
<option>AB+</option>
<option>AB-</option>
<option>O+</option>
<option>O-</option>

</select>


<input
type="text"
id="emergencyHospital"
placeholder="Hospital Name"
required
>


<input
type="tel"
id="emergencyContact"
placeholder="Emergency Contact"
required
>


<textarea
id="emergencyDetails"
placeholder="Emergency Details"
required
></textarea>


<button type="submit">
    🚨 Send Emergency Request
</button>


</form>

</div>

</section>


<!-- =========================
     FOOTER
========================= -->

<footer>

<p>
© 2026 BloodConnect | Blood Banking System
</p>

</footer>


<!-- SCROLL TOP -->

<button
id="topButton"
onclick="window.scrollTo({top:0,behavior:'smooth'})">

↑

</button>


<script>


/* =========================
   PAGE NAVIGATION
========================= */

function showPage(pageId) {

    document
    .querySelectorAll(".page")
    .forEach(page => {

        page.classList.remove("active");

    });


    document
    .getElementById(pageId)
    .classList.add("active");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    if(pageId === "home") {

        updateHomeCount();

    }


    if(pageId === "availability") {

        updateAvailability();

    }

}


/* =========================
   BLOOD STOCK
========================= */

function getStock() {

    let stock =
        localStorage.getItem("bloodStock");


    if(!stock) {

        stock = {

            "A+": 12,
            "A-": 5,
            "B+": 8,
            "B-": 2,
            "AB+": 6,
            "AB-": 1,
            "O+": 15,
            "O-": 3

        };


        localStorage.setItem(
            "bloodStock",
            JSON.stringify(stock)
        );

    }


    return JSON.parse(
        localStorage.getItem("bloodStock")
    );

}


/* =========================
   REGISTER DONOR
========================= */

function registerDonor(event) {

    event.preventDefault();


    let name =
        document.getElementById("donorName").value;


    let age =
        Number(
            document.getElementById("age").value
        );


    let blood =
        document.getElementById("donorBlood").value;


    let phone =
        document.getElementById("donorPhone").value;


    let city =
        document.getElementById("donorCity").value;


    if(age < 18) {

        alert(
            "Donor must be 18 years or older."
        );

        return;

    }


    let donors =
        JSON.parse(
            localStorage.getItem("donors")
        ) || [];


    donors.push({

        name: name,

        age: age,

        blood: blood,

        phone: phone,

        city: city,

        date:
            new Date().toLocaleString()

    });


    localStorage.setItem(
        "donors",
        JSON.stringify(donors)
    );


    /* Increase stock */

    let stock = getStock();


    stock[blood] += 1;


    localStorage.setItem(
        "bloodStock",
        JSON.stringify(stock)
    );


    alert(
        "❤️ Donor registration successful!"
    );


    document
    .querySelector("#giveBlood form")
    .reset();


    updateHomeCount();

    updateAvailability();

}


/* =========================
   REQUEST BLOOD
========================= */

function requestBlood(event) {

    event.preventDefault();


    let patient =
        document
        .getElementById("patientName")
        .value;


    let blood =
        document
        .getElementById("bloodGroup")
        .value;


    let units =
        Number(
            document
            .getElementById("units")
            .value
        );


    let hospital =
        document
        .getElementById("hospitalName")
        .value;


    let contact =
        document
        .getElementById("hospitalContact")
        .value;


    let stock = getStock();


    if(stock[blood] < units) {

        alert(
            "Not enough " +
            blood +
            " blood available."
        );

        return;

    }


    /* Decrease stock */

    stock[blood] -= units;


    localStorage.setItem(
        "bloodStock",
        JSON.stringify(stock)
    );


    /* Save request */

    let requests =
        JSON.parse(
            localStorage.getItem(
                "bloodRequests"
            )
        ) || [];


    requests.push({

        patient: patient,

        blood: blood,

        units: units,

        hospital: hospital,

        contact: contact,

        date:
            new Date().toLocaleString()

    });


    localStorage.setItem(
        "bloodRequests",
        JSON.stringify(requests)
    );


    alert(
        "🩸 Blood request submitted successfully!"
    );


    document
    .querySelector("#wantBlood form")
    .reset();


    updateHomeCount();

    updateAvailability();

}


/* =========================
   EMERGENCY REQUEST
========================= */

function emergencyRequest(event) {

    event.preventDefault();


    let emergencyData =
        JSON.parse(
            localStorage.getItem(
                "emergencies"
            )
        ) || [];


    emergencyData.push({

        patient:
            document
            .getElementById(
                "emergencyPatient"
            ).value,


        blood:
            document
            .getElementById(
                "emergencyBlood"
            ).value,


        hospital:
            document
            .getElementById(
                "emergencyHospital"
            ).value,


        contact:
            document
            .getElementById(
                "emergencyContact"
            ).value,


        details:
            document
            .getElementById(
                "emergencyDetails"
            ).value,


        date:
            new Date().toLocaleString()

    });


    localStorage.setItem(
        "emergencies",
        JSON.stringify(emergencyData)
    );


    alert(
        "🚨 Emergency request sent successfully!"
    );


    document
    .querySelector("#emergency form")
    .reset();

}


/* =========================
   ANIMATED COUNTER
========================= */

function animateNumber(
    element,
    target
) {

    let current = 0;

    let step =
        Math.max(
            1,
            Math.ceil(target / 30)
        );


    let timer =
        setInterval(function() {

            current += step;


            if(current >= target) {

                current = target;

                clearInterval(timer);

            }


            element.innerText =
                current;

        }, 30);

}


/* =========================
   HOME COUNT
========================= */

function updateHomeCount() {

    let donors =
        JSON.parse(
            localStorage.getItem(
                "donors"
            )
        ) || [];


    animateNumber(

        document.getElementById(
            "donorCount"
        ),

        donors.length

    );


    let stock = getStock();

    let totalBlood = 0;


    for(let group in stock) {

        totalBlood += stock[group];

    }


    animateNumber(

        document.getElementById(
            "bloodCount"
        ),

        totalBlood

    );

}


/* =========================
   AVAILABILITY
========================= */

function updateAvailability() {

    let stock = getStock();


    for(let group in stock) {


        let element =
            document.getElementById(
                "stock-" + group
            );


        element.innerText =
            stock[group];


        let status =
            document.getElementById(
                "status-" + group
            );


        if(stock[group] === 0) {

            status.innerText =
                "Out of Stock";

            status.className =
                "out";

        }

        else if(stock[group] <= 3) {

            status.innerText =
                "Low Stock";

            status.className =
                "low";

        }

        else {

            status.innerText =
                "Available";

            status.className =
                "available";

        }

    }

}


/* =========================
   SCROLL TOP BUTTON
========================= */

window.addEventListener(
    "scroll",
    function() {

        let button =
            document.getElementById(
                "topButton"
            );


        if(window.scrollY > 300) {

            button.style.display =
                "block";

        }

        else {

            button.style.display =
                "none";

        }

    }
);


/* =========================
   INITIAL LOAD
========================= */

getStock();

updateHomeCount();

updateAvailability();

</script>


</body>

</html>
