const names = document.getElementById("Name"),
      date = document.getElementById("Date"),
      amount = document.getElementById("Amount"),
      tableExpense = document.getElementById("expense"),
      btnAdd = document.getElementById("btnAdd");

let createThings = () => {
    if (names.value && amount.value) {
        let valuesA = [names.value, date.value, amount.value];
        let trs = document.createElement("tr");    
        for (let i = 0; i <= 2; i++) {
            let tds = document.createElement("td")
            let tdCont = document.createTextNode(valuesA[i])
            tds.appendChild(tdCont)
            trs.appendChild(tds)
        }
        let otherBtn = document.createElement("button");
        otherBtn.id = "otrBtn"
        let otherBtnCtn = document.createTextNode("X");
        otherBtn.appendChild(otherBtnCtn);
        trs.appendChild(otherBtn)
        tableExpense.appendChild(trs);    
    } else {
        alert("Coloque valores válidos")
    }
    names.value = "";
    date.value = "";
    amount.value = "";   
}

btnAdd.addEventListener("click", createThings);

tableExpense.addEventListener("click", e => {
    if (e.target.id === "otrBtn") {
        e.target.parentElement.remove()}
})