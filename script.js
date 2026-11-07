const addStudentBtn = document.getElementById("addStudentBtn");
const tableBody = document.getElementById("studentTableBody");

addStudentBtn.addEventListener("click", function () {

    const studentId = document.getElementById("studentId").value;
    const studentName = document.getElementById("studentName").value;
    const department = document.getElementById("department").value;
    const year = document.getElementById("year").value;
    const email = document.getElementById("email").value;

    if (
        studentId === "" ||
        studentName === "" ||
        department === "" ||
        year === "" ||
        email === ""
    ) {
        alert("Please fill in all fields.");
        return;
    }

    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${studentId}</td>
        <td>${studentName}</td>
        <td>${department}</td>
        <td>${year}</td>
        <td>${email}</td>
        <td>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
</td>
    `;

    const editBtn = newRow.querySelector(".edit-btn");

editBtn.addEventListener("click", function () {

    document.getElementById("studentId").value = studentId;
    document.getElementById("studentName").value = studentName;
    document.getElementById("department").value = department;
    document.getElementById("year").value = year;
    document.getElementById("email").value = email;

    newRow.remove();
});

    tableBody.appendChild(newRow);
    const deleteBtn = newRow.querySelector(".delete-btn");

deleteBtn.addEventListener("click", function () {
    newRow.remove();
});

    document.getElementById("studentForm").reset();
});