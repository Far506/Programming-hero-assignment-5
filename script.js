document.addEventListener("DOMContentLoaded", function() {
    let taskCount = 5;
    let totalCount = 23;
    const taskCountElement = document.querySelector(".task-count");
    const totalCountElement = document.querySelector(".total-count");
    const activityLog = document.querySelector(".activity-log");
    const buttons = document.getElementsByClassName("completed-btn");
    const clearHistoryBtn = document.getElementById("clear-history-btn");



    const taskNames = [
        "Fixing mobile Button issue",
        "Adding Dark Mode",
        "Optimizing Home Page",
        "Adding new emoji",
        "Integrating OpenAI API",
        "Improving Job Searching"
    ];

    let taskIndex = 0;

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            if (!this.disabled && taskIndex < taskNames.length) {
                this.disabled = true;
                this.style.backgroundColor = "gray";
                alert("Board updated successfully.");



                taskCount--;
                totalCount++;
                taskCountElement.textContent = taskCount;
                totalCountElement.textContent = totalCount;



                const now = new Date();
                const timeString = now.toLocaleTimeString();


                const newData = document.createElement("p");
                newData.textContent = (taskIndex + 1) + ". You have completed the task: " + taskNames[taskIndex] + " at " + timeString;
                activityLog.appendChild(newData);

                taskIndex++;
            }
        });
    }



    if (clearHistoryBtn) {
        clearHistoryBtn.addEventListener("click", function() {
            activityLog.innerHTML = "";
        });
    }



    const discoverBtn = document.getElementById("discoverBtn");
    if (discoverBtn) {
        discoverBtn.addEventListener("click", function() {
            window.location.href = "./main.html";
        });
    }



    const backToDeskBtn = document.getElementById("backToDeskBtn");
    if (backToDeskBtn) {
        backToDeskBtn.addEventListener("click", function() {
            window.location.href = "./index.html";
        });
    }

});



document.addEventListener("DOMContentLoaded", function() {
    const themeBtn = document.getElementById("theme-btn");
    const body = document.body;



    if (themeBtn) {
        themeBtn.addEventListener("click", function() {


            if (body.classList.contains("bg-[#f4f7ff]")) {
                body.classList.replace("bg-[#f4f7ff]", "bg-blue-800");
            } else if (body.classList.contains("bg-blue-800")) {
                body.classList.replace("bg-blue-800", "bg-green-800");
            } else if (body.classList.contains("bg-green-800")) {
                body.classList.replace("bg-green-800", "bg-yellow-800");
            } else if (body.classList.contains("bg-yellow-800")) {
                body.classList.replace("bg-yellow-800", "bg-pink-800");
            } else {
                body.classList.replace("bg-pink-800", "bg-[#f4f7ff]");
            }
        });
    }
});