const apiUrl = "http://localhost:8080/student";




// Student qo‘shish yoki tahrirlash funktsiyasi
function saveStudent() {
    // Input maydonlardan ma’lumotlarni olish
    let id = document.getElementById("studentId").value; // Agar id bo‘lsa, student tahrirlanadi
    let name = document.getElementById("name").value.trim(); // Ismni olish va boshida/oxirida bo‘sh joylarni olib tashlash
    let surname = document.getElementById("surname").value.trim(); // Familiya
    let birthDate = document.getElementById("birth-date").value; // Tug‘ilgan sanasi
    let parentPhone = document.getElementById("parent-phone").value.trim(); // Ota-onaning telefon raqami
    let phone = document.getElementById("phone").value.trim(); // Studentning telefon raqami (majburiy emas)
    let comment = document.getElementById("comment").value.trim(); // Izoh (majburiy emas)

    // Jinsni aniqlash
    let gender = "";
    if (document.getElementById("maleBtn").classList.contains("active")) {
        gender = "male"; // Agar Erkak tugmasi bosilgan bo‘lsa
    } else if (document.getElementById("femaleBtn").classList.contains("active")) {
        gender = "female"; // Agar Ayol tugmasi bosilgan bo‘lsa
    }

    // Majburiy maydonlarni tekshirish
    if (!name || !surname || !birthDate || !parentPhone || !gender) {
        alert("Barcha majburiy maydonlarni to‘ldiring!"); // Agar bo‘sh maydon bo‘lsa, xabar chiqarish
        return; // Funktsiyani to‘xtatish
    }

    // Student obyekti yaratish (serverga yuborish uchun)
    let student = { name, surname, birthDate, gender, parentPhone, phone, comment };

    // Agar `id` mavjud bo‘lsa, PUT metodi (ma’lumotni yangilash), aks holda POST (yangi qo‘shish)
    let method = id ? "PUT" : "POST";
    let url = id ? `${apiUrl}/add` : apiUrl; // Agar id bo‘lsa, mavjud studentga URL orqali bog‘lanadi

    // Fetch yordamida serverga so‘rov yuborish
    fetch(url, {
        method: method, // POST yoki PUT
        headers: { "Content-Type": "application/json" }, // JSON formatida yuborish
        body: JSON.stringify(student) // Student ma’lumotlarini JSON ko‘rinishda yuborish
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Server xatosi! Ma’lumot saqlanmadi."); // Agar serverda xatolik bo‘lsa, xabar chiqarish
            }
            return response.json(); // Javobni JSON formatiga o‘girish
        })
        .then(() => {
            closeModal(); // Modal oynani yopish
            loadStudents(); // Yangi ro‘yxatni yuklash (tablitsani yangilash)
        })
        .catch(error => {
            alert("Xatolik yuz berdi: " + error.message); // Xatolik yuz bersa, foydalanuvchiga xabar chiqarish
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