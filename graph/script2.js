document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('myChart').getContext('2d');

    const data = [
        {
          "date": 1710087300000,
          "cap": 2637748593488,
          "volume": 105862971816,
          "liquidity": 6277549319,
          "btcDominance": 0.5183797557327771
        },
        {
          "date": 1710088200000,
          "cap": 2645127705043,
          "volume": 106740614621,
          "liquidity": 6523748139,
          "btcDominance": 0.5181654157400398
        },
        {
          "date": 1710089100000,
          "cap": 2647220935823,
          "volume": 107007689144,
          "liquidity": 6541651778,
          "btcDominance": 0.5177839653538668
        },
        {
          "date": 1710090000000,
          "cap": 2642437272840,
          "volume": 106819895860,
          "liquidity": 6533375361,
          "btcDominance": 0.5179691324448106
        },
        {
          "date": 1710090900000,
          "cap": 2645729239281,
          "volume": 106436016690,
          "liquidity": 6422434827,
          "btcDominance": 0.5174206649265002
        },
        {
          "date": 1710091800000,
          "cap": 2642483920927,
          "volume": 105807125461,
          "liquidity": 6824586732,
          "btcDominance": 0.5176706435352262
        },
        {
          "date": 1710092700000,
          "cap": 2644657906420,
          "volume": 106140187643,
          "liquidity": 6868794895,
          "btcDominance": 0.5178296951459991
        },
        {
          "date": 1710093600000,
          "cap": 2645240579991,
          "volume": 106154392521,
          "liquidity": 6582349072,
          "btcDominance": 0.517527575574581
        },
        {
          "date": 1710094500000,
          "cap": 2646006174468,
          "volume": 105687661401,
          "liquidity": 6537693399,
          "btcDominance": 0.5173871227917611
        },
        {
          "date": 1710095400000,
          "cap": 2643491914557,
          "volume": 105791728095,
          "liquidity": 6604438516,
          "btcDominance": 0.5174704828075867
        },
        {
          "date": 1710096300000,
          "cap": 2642042747154,
          "volume": 105964950059,
          "liquidity": 6691568337,
          "btcDominance": 0.5174695894980812
        }
      ];

      const dates = data.map(entry => new Date(entry.date));

      const caps = data.map(entry => entry.cap);
  
      const myChart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: dates,
              datasets: [
                  {
                      label: 'Market Cap',
                      data: caps,
                      backgroundColor: 'rgba(75, 192, 192)', // Aqua color
                      borderColor: 'rgba(75, 192, 192, 1)',
                      borderWidth: 2,
                      pointBackgroundColor: 'rgba(75, 192, 192, 1)',
                      pointBorderColor: '#fff',
                      pointHoverBackgroundColor: '#fff',
                      pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
                      fill: true,
                      tension: 0.5 // Adjust the tension for smoother curves
                  }
              ]
          },
          options: {
              scales: {
                  x: {
                      type: 'time',
                      time: {
                          unit: 'day'
                      },
                      grid: {
                          display: false // Hide x-axis grid lines
                      }
                  },
                  y: {
                      grid: {
                          color: 'rgba(0, 0, 0, 0.1)' // Light gray grid lines for y-axis
                      }
                  }
              },
              plugins: {
                  title: {
                      display: true,
                      text: 'Market Cap Over Time',
                      font: {
                          size: 18
                      }
                  },
                  legend: {
                      display: true,
                      labels: {
                          font: {
                              size: 14
                          }
                      }
                  },
                  tooltip: {
                      intersect: false, // Display tooltips for all points at the same x-axis index
                      mode: 'index' // Show tooltips for all datasets at the same x-axis index
                  }
              },
              animation: {
                  duration: 2000 // Slow animation duration
              }
          }
      });
  });