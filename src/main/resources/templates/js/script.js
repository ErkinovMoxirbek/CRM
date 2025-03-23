const apiUrl = "http://localhost:8080/student";

// Studentlarni yuklash
function loadStudents() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            let tableBody = document.getElementById("studentTableBody");
            tableBody.innerHTML = "";
            data.forEach((student, index) => {
                let row = `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${student.name} ${student.surname}</td>
                        <td>${student.birthDate}</td>
                        <td>${student.phone}</td>
                        <td>${student.parentPhone}</td>
                        <td>Loading...</td>
                        <td>${student.balance} UZS</td>
                        <td>
                            <button onclick="editStudent(${student.id})">✏️ Edit</button>
                            <button onclick="deleteStudent(${student.id})">❌ Delete</button>
                        </td>
                    </tr>
                `;
                tableBody.innerHTML += row;
            });
        });
}

// Student qo‘shish yoki tahrirlash
function saveStudent() {
    let id = document.getElementById("studentId").value;
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let age = document.getElementById("age").value;

    let student = { name, surname, age };

    let method = id ? "PUT" : "POST";
    let url = id ? `${apiUrl}/${id}` : apiUrl;

    fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student)
    }).then(() => {
        closeModal();
        loadStudents();
    });
}

// Studentni o‘chirish
function deleteStudent(id) {
    fetch(`${apiUrl}/delete/${id}`, { method: "DELETE" }).then(() => loadStudents());
}

// Studentni tahrirlash
function editStudent(id) {
    fetch(`${apiUrl}/${id}`)
        .then(response => response.json())
        .then(student => {
            document.getElementById("studentId").value = student.id;
            document.getElementById("name").value = student.name;
            document.getElementById("surname").value = student.surname;
            document.getElementById("age").value = student.age;
            openModal();
        });
}

// Modal oynani ochish
function openModal() {
    document.getElementById("studentModal").style.display = "flex";
}

// Modalni yopish
function closeModal() {
    document.getElementById("studentModal").style.display = "none";
}

document.getElementById("addStudentBtn").addEventListener("click", openModal);
document.getElementById("saveStudent").addEventListener("click", saveStudent);
document.querySelector(".close").addEventListener("click", closeModal);

// Sahifa ochilganda studentlarni yuklash
document.addEventListener("DOMContentLoaded", loadStudents);