document.addEventListener("DOMContentLoaded", function() {
    let taskCount = 5;
    let totalCount = 23;
    const taskCountElement = document.querySelector(".task-count");
    const totalCountElement = document.querySelector(".total-count");
    const activityLog = document.querySelector(".activity-log");
    const buttons = document.getElementsByClassName(".completed-btn");
    const clearHistoryBtn = document.getElementById(".clear-history-btn");


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
            if (!this.disabled && taskCountElement < taskNames.length) {
                this.disabled = true;
                this.classlist.add
                alert("taskmeter.netlify.app says\nBoard updated successfully.");



                taskCount--;
                totalCount++;
                taskCountElement.textContent = taskCount;
                totalCountElement.textContent = totalCount;


                let now = new Date();
                let timeString = now.toLocaleTimeString();


                let newData = document.createElement("p");
                newData.textContent = `${taskIndex + 1}. You have completed the task for ${taskNames[taskIndex]} at ${timeString}`;
                activityLog.appendChild(newData);

                taskIndex++;





            }
        });
    }

    clearHistoryBtn.addEventListener("click", function() {
        activityLog.innerHTML = "";
    });

});


document.addEventListener("DOMContentLoaded", function() {
    console.log("Fully loaded");


    const discoverBtn = document.getElementById("discoverBtn");
    if (discoverBtn) {
        discoverBtn.addEventListener("click", function() {
            console.log("Discover Button clicked!");
            window.location.href = "./main.html";
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const backToDeskBtn = document.getElementById("backToDeskBtn");
    if (backToDeskBtn) {
        backToDeskBtn.addEventListener("click", function() {
            console.log("Back To Desk Button clicked!");
            window.location.href = "./index.html";
        });
    } else {
        console.error("Back To Desk Button not found in the DOM.");
    }
});


const themeBtn = document.getElementById("theme-btn");
const body = document.body;

themeBtn.addEventListener("click", function() {
    body.classList.toggle("bg-green-800");
    body.classList.toggle("bg-yellow-800");
    body.classList.toggle("bg-pink-800");
    body.classList.toggle("bg-blue-800");

});