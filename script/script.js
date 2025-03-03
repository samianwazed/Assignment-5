const colors = ["#33ffe9", "#58f0ff", "#00e8ff", "#00b9ff", "#0078ff", "#4a8cd6", "#091ffc", "#8309fc", "#a709fc", "#e209fc", "#ffffff"];
      let index = 0;

      document.getElementById('theme-btn').addEventListener("click", function(){
        document.body.style.backgroundColor = colors[index];
        index++;
        if(index === colors.length){
          index = 0;
        }
      })

// Completed Button click event listener

