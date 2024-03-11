function formatRate(rate) {
    if (rate >= 1) {
        return rate.toLocaleString("en-US", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
        });
    } else {
        let decimalPart = rate.toString().split(".")[1] || "";
        let nonZeroIndex = decimalPart.search(/[1-9]/);
        let totalDigits = nonZeroIndex + 4;
        return rate.toFixed(totalDigits);
    }
}
function formatLargers(totalSupply) {
    if (totalSupply >= 1) {
        return totalSupply.toLocaleString("en-US", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });
    } else {
        let decimalPart = totalSupply.toString().split(".")[1] || "";
        let nonZeroIndex = decimalPart.search(/[1-9]/);
        let totalDigits = nonZeroIndex + 2;
        return totalSupply.toFixed(totalDigits);
    }
}
fetch(new Request("https://api.livecoinwatch.com/coins/map"), {
    method: "POST",
    headers: new Headers({
        "content-type": "application/json",
        "x-api-key": "8f581a9e-b13f-4942-967e-f9fe8c147828",
    }),
    body: JSON.stringify({
        codes: [
            "___BLX",
            "LYUM",
            "OFN",
            "XNA",
            "TRIAS",
            "___BONE",
            "__FLIX",
            "SHIB",
            "ATOM",
            "LEASH",
        ],
        currency: "USD",
        sort: "rank",
        order: "ascending",
        offset: 0,
        limit: 0,
        meta: true,
    }),
})

.then((response) => response.json())
.then((data) => {
    const tableBody = document.getElementById("cryptoTable").getElementsByTagName("tbody")[0];
    let tableContent = '';
    let totalSupplyRateProduct = 0; // Initialize the total to 0

    
    data.forEach((coin) => {
        let cleanedCode = coin.code
        .replace("___", "")
        .replace("__", "")
        .replace("_", "");
        console.log(coin)
        
        let supplyRateProduct = coin.totalSupply * coin.rate;
        totalSupplyRateProduct += supplyRateProduct;
        
        let row = `<tr  button onclick="transferData(this,'${coin.code}')">
        <td><img src="${coin.png64}" alt="${coin.name}" style="width:40px; height:40px; border-radius: 25%;"></td>
        <td><div class="pick"><b style="font-size: 18px;">${cleanedCode}</b></div><div style="font-size: 14px;">${coin.name}</div></td> 
        <td><b>${formatRate(coin.rate)}</b></td>
        <td>${formatRate(coin.allTimeHighUSD)}</td>
        <td>${formatLargers(coin.totalSupply)}</td>
        <td>${formatLargers(coin.volume)}</td>
        <td>${formatLargers(supplyRateProduct)}</td>
        </tr>`;

        console.log(totalSupplyRateProduct)
        tableContent += row;
    });
    tableBody.innerHTML = tableContent;
    document.getElementById('totalSupplyRateProduct').textContent = formatLargers(totalSupplyRateProduct);
});


    
    