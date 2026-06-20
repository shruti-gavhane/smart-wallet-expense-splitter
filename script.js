function splitExpense() {
    let payer = document.getElementById("payer").value.trim();
    let amount = parseFloat(document.getElementById("amount").value);
    let members = document.getElementById("members").value
        .split(",")
        .map(member => member.trim());

    if (!payer || isNaN(amount) || members.length === 0) {
        document.getElementById("result").innerHTML = "Please fill all fields correctly.";
        return;
    }

    if (!members.includes(payer)) {
        members.push(payer);
    }

    let split = amount / members.length;
    let result = "";

    members.forEach(member => {
        if (member !== payer) {
            result += `${member} owes ${payer} ₹${split.toFixed(2)}<br>`;
        }
    });

    document.getElementById("result").innerHTML = result;
}