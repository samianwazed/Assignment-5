const colors = ["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#FF33A8", "#A833FF", "#33FFF6", "#F6FF33", "#FF8C33", "#33FF8C", "#ffffff"];
      let index = 0;

      document.getElementById('theme-btn').addEventListener("click", function(){
        document.body.style.backgroundColor = colors[index];
        index++;
        if(index === colors.length){
          index = 0;
        }
      })