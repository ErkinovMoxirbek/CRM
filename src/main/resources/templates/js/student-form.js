document.addEventListener("DOMContentLoaded", function () {
    const maleBtn = document.getElementById("maleBtn");
    const femaleBtn = document.getElementById("femaleBtn");

    maleBtn.addEventListener("click", function () {
        console.log("Gender selected: Erkak");
        maleBtn.classList.add("selected");
        femaleBtn.classList.remove("selected");
    });

    femaleBtn.addEventListener("click", function () {
        console.log("Gender selected: Ayol");
        femaleBtn.classList.add("selected");
        maleBtn.classList.remove("selected");
    });

    document.querySelector(".save").addEventListener("click", function () {
        const studentData = {
            name: document.getElementById("name").value,
            surname: document.getElementById("surname").value,
            phone: document.getElementById("phone").value,
            parentPhone: document.getElementById("parent-phone").value,
            dob: document.getElementById("dob").value,
            gender: document.querySelector(".selected") ? document.querySelector(".selected").innerText : "Noma'lum",
            comment: document.getElementById("comment").value,
            group: document.getElementById("group").checked ? "Ha" : "Yo'q",
        };

        console.log("O'quvchi ma'lumotlari:", studentData);
        alert("O'quvchi saqlandi!");
    });
});
