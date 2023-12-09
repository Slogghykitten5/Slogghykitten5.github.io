function daysBetweenDates(date1, date2) {
    // takes in values in yyyy-mm-dd
    let day1 = parseInt(date1.toString().substring(8));
    let month1 = parseInt(date1.toString().substring(5, 7));
    let year1 = parseInt(date1.toString().substring(0, 4));

    let day2 = parseInt(date2.toString().substring(8));
    let month2 = parseInt(date2.toString().substring(5, 7));
    let year2 = parseInt(date2.toString().substring(0, 4));

    let startDate = new Date(year1, month1 - 1, day1);
    let endDate = new Date(year2, month2 - 1, day2);

    let differenceMs = endDate - startDate;
    let daysDifference = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

    return daysDifference;
}


document.getElementById('calculate').addEventListener('click', function() {

    let startDate = document.getElementById('startDate').value; //gives values in  yyyy-mm-dd
    let endDate = document.getElementById('endDate').value; //gives values in  yyyy-mm-dd
    let maturityPrice = parseFloat(document.getElementById('maturityPrice').value);
    let price = parseFloat(document.getElementById('price').value);
    let yieldInput = parseFloat(document.getElementById('yieldInput').value);
    let brokerage = parseFloat(document.getElementById('brokerage').value);

    let numberOfDays = daysBetweenDates(startDate, endDate);

    let isYieldProvided = !isNaN(yieldInput);
    let isPriceProvided = !isNaN(price);

    console.log(isPriceProvided, isYieldProvided)
    console.log((isYieldProvided && isPriceProvided) || (!isYieldProvided && !isPriceProvided))


    if ((isYieldProvided && isPriceProvided) || (!isYieldProvided && !isPriceProvided)) {
        alert('Please provide either Yield or Price.');
        return;
    }
     console.log((price + brokerage))
     console.log(startDate)
     console.log(numberOfDays)

    if (isPriceProvided) {
        let profit = (maturityPrice - price - brokerage);
        let yieldResult = (( profit / (price+brokerage)) * (365 / numberOfDays)).toFixed(7);
        console.log(profit)
        document.getElementById('yieldInput').value = yieldResult;
    } else if (isYieldProvided) {
        let priceResult = -((((yieldInput * numberOfDays * maturityPrice) / 365) - brokerage - maturityPrice).toFixed(2));
        document.getElementById('price').value = priceResult;
    }
});



