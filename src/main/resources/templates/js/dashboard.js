async function fetchStats() {
    try {
        let response = await fetch("http://localhost:8080/dashboard/stats");
        let data = await response.json();

        document.getElementById("count-student").innerText = data.countStudent;
        document.getElementById("frozen-students").innerText = data.frozenStudents;
        document.getElementById("count-group").innerText = data.countGroup;
        document.getElementById("employees").innerText = data.employees;
        document.getElementById("courses").innerText = data.courses;
    } catch (error) {
        console.error("Ma'lumotlarni olishda xatolik:", error);
    }
}
fetchStats();

const ctx = document.getElementById('studentsChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Faol', 'Guruhsiz', 'Qarzdor'],
        datasets: [{
            label: 'O‘quvchilar statistikasi',
            data: [52, 56, 45],
            backgroundColor: ['#4CAF50', '#FFC107', '#F44336']
        }]
    }
});