const rate = 82.70 ;

dollarToRupees = (amt) => {
    return amt*rate;
} 

rupeesToDollar = (amt) => {
    return amt/rate;
}

module.exports ={
    dollarToRupees,
    rupeesToDollar, 
}