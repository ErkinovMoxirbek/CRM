const apiUrl = "http://localhost:8080/student";
const maleBtn = document.getElementById("maleBtn");
const femaleBtn = document.getElementById("femaleBtn");
const openModalBtn = document.getElementById("addStudentBtn");
const closeModalBtn = document.querySelector(".close");
const modal = document.getElementById("studentModal");
const saveBtn = document.getElementById("saveStudent");

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
//
function showToast() {
    let toast = document.getElementById("toast");
    toast.classList.add("show");
    setTimeout(() => { toast.classList.remove("show"); }, 3000); // 3 soniyada yo‘qoladi
}
// Student qo‘shish
function saveStudent() {
    let name = document.getElementById("name").value.trim(); // Ismni olish va boshida/oxirida bo‘sh joylarni olib tashlash
    let surname = document.getElementById("surname").value.trim(); // Familiya
    let birthDate = document.getElementById("birth-date").value; // Tug‘ilgan sanasi

    let parentPhone = document.getElementById("parent-phone").value.trim(); // Ota-onaning telefon raqami
    let phone = document.getElementById("phone").value.trim(); // Studentning telefon raqami (majburiy emas)
    let comment = document.getElementById("comment").value.trim(); // Izoh (majburiy emas)

    // Jinsni aniqlash
    let gender = "";
    if (document.getElementById("maleBtn").classList.contains("active")) {
        gender = "MALE"; // Agar Erkak tugmasi bosilgan bo‘lsa
    } else if (document.getElementById("femaleBtn").classList.contains("active")) {
        gender = "FEMALE"; // Agar Ayol tugmasi bosilgan bo‘lsa
    }
    // Majburiy maydonlarni tekshirish
    if (!name || !surname || !birthDate || !parentPhone || !gender) {
        alert("Barcha majburiy maydonlarni to‘ldiring!"); // Agar bo‘sh maydon bo‘lsa, xabar chiqarish
        return; // Funktsiyani to‘xtatish
    }

    let student = { name, surname, birthDate,gender,parentPhone,phone };

    let method =  "POST";
    let url = `${apiUrl}/add`;
    alert(url);
    fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student)
    }).then(() => {
        closeModal();
        showToast();
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
function openModal() {
    document.getElementById("studentModal").style.display = "flex";
}

// Modalni yopish
function closeModal() {
    document.getElementById("studentModal").style.display = "none";
}
// Modalni ochish
openModalBtn.addEventListener("click", function () {
    modal.classList.add("show");
});

// Modalni yopish
closeModalBtn.addEventListener("click", function () {
    modal.classList.remove("show");
});

// Tashqariga bosilganda yopish
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
});

// Jins tugmalarining faol holati
maleBtn.addEventListener("click", function (event) {
    event.preventDefault();
    maleBtn.classList.add("active");
    femaleBtn.classList.remove("active");
});

femaleBtn.addEventListener("click", function (event) {
    event.preventDefault();
    femaleBtn.classList.add("active");
    maleBtn.classList.remove("active");
});

document.getElementById("saveStudent").addEventListener("click", saveStudent);

// Sahifa ochilganda studentlarni yuklash
document.addEventListener("DOMContentLoaded", loadStudents);
