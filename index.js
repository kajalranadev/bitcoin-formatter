console.clear()

function formatBitcoin(number) {
    let formattedBTC = number.toLocaleString("en-US", { style: "currency", currency: "BTC" });
    return formattedBTC;
}

let bitcoinAmount = 50000000;
console.log(formatBitcoin(bitcoinAmount));
