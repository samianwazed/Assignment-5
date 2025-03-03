// document.getElementsByClassName("complete-btn").addEventLis


let buttons = document.getElementsByClassName("complete-btn");
document.getElementById('total-task-completed').textContent = 23;
let taskCompleted = document.getElementById('total-task-completed').innerText;
let taskCompletedConverted = parseFloat(taskCompleted);
let taskRemaining = document.getElementById('task-remaining').innerText;
let taskRemainingConverted = parseFloat(taskRemaining);
const historyContainer = document.getElementById('history-container')
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(event){
        let button = event.target;
        if (button.hasAttribute("disabled")) {
            return;
        }
        buttons[i].classList.add('disabled');
        button.setAttribute("disabled", "true");
        alert("Board Updated Successfully");
        taskCompletedConverted += 1;
        document.getElementById('total-task-completed').innerText = taskCompletedConverted ;

        taskRemainingConverted -= 1;
        document.getElementById('task-remaining').innerText = taskRemainingConverted;

        const taskName = document.getElementsByClassName('task-name');
        let completedTime = new Date().toLocaleTimeString();
        let taskContainer = event.target.closest(".task-item"); // Assuming each task button is inside .task-item
        let taskIndividual = taskContainer.querySelector(".task-name").innerText;
            const p = document.createElement("p");
            p.innerText = `
            You have Completed ${taskIndividual} task at ${completedTime}
            `
            historyContainer.appendChild(p);
          

            if(taskRemainingConverted === 0){
                alert("Congrats!!! You have completed all the current tasks")
            }
    })
}




