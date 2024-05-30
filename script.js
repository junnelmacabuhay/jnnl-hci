const sampleData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: 'MACABUHAY OUTPUT',
      data: [12, 33, 25, 46, 96, 73, 10, 49, 67, 80, 58, 100],
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