// Donor Registration
document.getElementById("donorForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let blood = document.getElementById("bloodGroup").value;

    document.getElementById("donorMessage").innerHTML =
        "✅ Donor " + name + " registered successfully with blood group " + blood + "!";

    document.getElementById("donorForm").reset();
});


// Blood Request
document.getElementById("requestForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let hospital = document.getElementById("hospital").value;
    let blood = document.getElementById("requestBlood").value;
    let units = parseInt(document.getElementById("units").value);

    let id = blood.replace("+", "plus").replace("-", "minus");

    let stockElement = document.getElementById(id);
    let available = parseInt(stockElement.innerText);

    if (available >= units) {

        available = available - units;
        stockElement.innerText = available;

        document.getElementById("requestMessage").innerHTML =
            "✅ Blood request accepted for " + hospital +
            ". " + units + " units of " + blood + " allocated.";

    } else {

        document.getElementById("requestMessage").innerHTML =
            "❌ Not enough " + blood + " blood available.";
    }

    document.getElementById("requestForm").reset();
});


// Emergency Button
function showMessage() {
    alert("🚨 Emergency Blood Service\nPlease contact the nearest blood bank or hospital.");
}