const ctx = document.getElementById('myChart');
      
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Brazil', 'USA', 'Mexico', 'Jailson', 'Purple', 'Orange'],
            datasets: [{
              label: '# of Votes',
              data: [0, 0, 0, 0, 0, 10],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });