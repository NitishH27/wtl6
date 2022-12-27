const CC = require('./cc')

const r1 = require('readline-sync')
var ip

do{

    console.log("1. Press 1 to Convert Currency from Dollar TO Rupee");

    console.log("2. Press 2 to Convert Currency from Rupee TO Dollar");

    var ch = parseInt(r1.question("Enter your choice:"));

    switch(ch){

        case 1:
             ip = r1.question("Enter amount in Dollars");
            console.log("Amount in rupees: " ,CC.dollarToRupees(ip));

          
            break;

        case 2:

              ip = r1.question("Enter amount in Rupees");
             console.log("Amount in rupees: " ,CC.rupeesToDollar(ip));

            break;

        case 3:

            break;

    }

}while(true);



