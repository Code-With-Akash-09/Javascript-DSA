// Best time to buy and sell stock


const maxProfilt = (prices) => {

    let min = prices[0];
    let max = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - min > max) {
            max = prices[i]
        }
        if (min > prices[i]) {
            min = prices[i]
        }
    }
    return max
}

const prices = [7, 1, 5, 3, 6, 4]
const prices1 = [7, 6, 4, 3, 1]

console.log(maxProfilt(prices)); // 5
console.log(maxProfilt(prices1)); // 0