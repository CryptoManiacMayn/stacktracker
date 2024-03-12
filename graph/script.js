document.addEventListener("DOMContentLoaded", async function() {
    const ctx = document.getElementById('myChart').getContext('2d');

    // Fetch data from the API
    const response = await fetch(new Request("https://api.livecoinwatch.com/overview/history"), {
        method: "POST",
        headers: new Headers({
            "content-type": "application/json",
            "x-api-key": "e558510d-4b9a-452f-ba2b-6146745bedc1",
        }),
        body: JSON.stringify({
            currency: "USD",
            start: 1610194629791,
            end: 1710194629791,
        }),
    });

    // Parse the JSON response
    const responseData = await response.json();

    // Extract relevant data from the response
    const data = responseData.map(entry => ({
        date: new Date(entry.date),
        cap: entry.cap,
    }));

    // Extract dates and market caps from the data
    const dates = data.map(entry => entry.date);
    const caps = data.map(entry => entry.cap);

    // Function to abbreviate numbers
function abbreviateNumber(value) {
    const suffixes = ['', 'K', 'M', 'B', 'T', 'QD', 'QT', 'SX', 'SP', 'O', 'N'];
    const suffixNum = Math.floor(('' + value).length / 3);
    let shortValue = parseFloat((suffixNum !== 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(2));
    if (shortValue % 1 !== 0) {
        shortValue = shortValue.toFixed(1);
    }
    return shortValue + suffixes[suffixNum];
}

// Convert data to abbreviated form
const abbreviatedCaps = caps.map(cap => abbreviateNumber(cap));

// Create the chart
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
                    unit: 'year'
                },
                grid: {
                    display: false // Hide x-axis grid lines
                }
            },
            y: {
                grid: {
                    display: false // Hide x-axis grid lines
                },
                ticks: {
                    // Use abbreviated numbers on the y-axis
                    callback: function(value, index, values) {
                        return abbreviateNumber(value);
                    }
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

})