
      function formatDate() {
          const today = new Date();
          const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
          const formattedDate = today.toLocaleDateString('en-US', options);
          document.getElementById('date').textContent = formattedDate;
      }

      formatDate();


// Clear History 
document.getElementById('clear-history-btn').addEventListener('click', function(){
    document.getElementById('history-container').innerText = "";
})
