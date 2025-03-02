const themeBtn = document.getElementById("theme-btn");
const body = document.body;

themeBtn.addEventListener("click", function() {
    body.classList.toggle("bg-green-800");
    body.classList.toggle("bg-yellow-800");
    body.classList.toggle("bg-pink-800");
    body.classList.toggle("bg-blue-800");

});



document.addEventListener("DOMContentLoaded", function() {
    let taskCount = 5;
    let totalCount = 23;
    const taskCountElement = document.querySelector(".task-count");
    const totalCountElement = document.querySelector(".total-count");
    const activityLog = document.querySelector(".activity-log");
    const buttons = document.querySelectorAll(".completed-btn");

    const clearHistoryBtn = document.getElementById("clear-history-btn");

    buttons.forEach((button) => {
        button.addEventListener("click", function() {
            if (!button.disabled) {
                button.disabled = true;
                button.classList.add("bg-gray-400"); // Change button color
                alert("taskmeter.netlify.app says\nBoard updated successfully.");

                // Update task and total count
                taskCount--;
                totalCount++;
                taskCountElement.textContent = taskCount;
                totalCountElement.textContent = totalCount;

                // Get current time
                let now = new Date();
                let timeString = now.toLocaleTimeString();

                // Update activity log
                let newData = document.createElement("p");
                newData.textContent = `You have completed the task for mobile issue at ${timeString}`;
                activityLog.appendChild(newData);


            }
        });
    });

    clearHistoryBtn.addEventListener("click", function() {
        activityLog.innerHTML = "";
    });
});


document.addEventListener("DOMContentLoaded", function() {
    console.log("Full loaded");



    // Discover Something Button
    const discoverBtn = document.getElementById("discoverBtn");
    if (discoverBtn) {
        discoverBtn.addEventListener("click", function() {
            console.log("Discover Button clicked!");
            window.location.href = "./main.html"; // Ensure main.html exists
        });








    }
});


document.addEventListener("DOMContentLoaded", function() {
    const backToDeskBtn = document.getElementById("backToDeskBtn");
    if (backToDeskBtn) {
        backToDeskBtn.addEventListener("click", function() {
            console.log("Back To Desk Button clicked!");
            window.location.href = "./index.html"; // Ensure index.html exists
        });
    } else {
        console.error("Back To Desk Button not found in the DOM.");
    }
});