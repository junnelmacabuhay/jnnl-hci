const sampleData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: 'MY EXPENSES MONTHLY',
      data: [500, 600, 700, 790, 810, 899, 955, 900, 430, 200, 350, 999],
      backgroundColor: 'rgba(168, 56, 141, 0.8',
      borderColor: 'rgba(28, 255, 205, 0.91)',
      borderWidth: 1
    }]
  };
  
  const ctx = document.getElementById('myChart').getContext('2d');
  let currentChart;
  
  function renderChart(type) {
    if (currentChart) {
      currentChart.destroy();
    }
    
    currentChart = new Chart(ctx, {
      type: type,
      data: sampleData,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  
  function changeChartType(type) {
    renderChart(type);
  }
  
  renderChart('bar');
