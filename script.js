let counter = 1;
let form = document.querySelector("#Sform");
let tbody = document.querySelector("#tablebody");

form.addEventListener("submit", function(e){
    e.preventDefault();
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('last-name').value;
    let studentuid = document.getElementById('student_uid').value;
    let studentemail = document.getElementById('student_mail').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;

    
    let newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${counter}</td>
        <td>${firstName} ${lastName}</td>
        <td>${studentuid}</td>
        <td>${studentemail}</td>
        <td>${day}/${month}/${year}</td>
        <td>${gender}</td>
    `;
    tbody.appendChild(newRow);
    counter++;
    form.reset(); 
});

let daySelect = document.getElementById('day');
for (let i = 1; i <= 31; i++) {
    let option = document.createElement('option');
    option.value = i;
    option.text = i;
    daySelect.appendChild(option);
}

let monthSelect = document.getElementById('month');
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

for (const month of months) {
    let option = document.createElement('option');
    option.value = month;
    option.text = month;
    monthSelect.appendChild(option);
}

let yearSelect = document.getElementById('year');
let currentYear = new Date().getFullYear();
for (let i = currentYear; i >= 1998; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.text = i;
    yearSelect.appendChild(option);
}