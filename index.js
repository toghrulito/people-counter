let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let saveTot = document.getElementById("total-val")
let count = 0
let total = 0
function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    total = count + total
    let countStr = count + " - "
    saveEl.textContent += countStr
    saveTot.textContent = total
    countEl.textContent = 0
    count =0
}

