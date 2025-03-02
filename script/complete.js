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
        alert("Board Updated Successfully");
        buttons[i].classList.add('disabled');
        let totalAfterComplete = taskCompletedConverted++;
        document.getElementById('total-task-completed').innerText = totalAfterComplete +1 ;

        let totalRemaining = taskRemaining--;
        document.getElementById('task-remaining').innerText = totalRemaining - 1;

        
        const p = document.createElement("p");
        p.innerText = `
        You have Complete a task at Eto PM
        `
        console.log(p);
        historyContainer.appendChild(p);

    })
}



