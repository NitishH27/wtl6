var events = require('events');
var eventEmitter = new events.EventEmitter();
let arr = [ 1, 2, 3, 4, 5, 6,7,8,9,10];
let n = arr.length;
var EvenSum = function(arr){
    let even = 0;

  

    for (let i = 0; i < n; i++)

    {

        if (arr[i] % 2 == 0)

            even += arr[i];

    }

    console.log("Sum of even numbers in array is " + even);

};

eventEmitter.on('event-1',EvenSum);
eventEmitter.emit('event-1',arr);

 var OddSum = function(arr){

    let odd = 0;
    for (let i = 0; i < n; i++)

    {

        if (arr[i] % 2 != 0)
            odd += arr[i];

    }

    console.log("sum of odd numbers in array is " + odd);

}

eventEmitter.on('event-2',OddSum);

eventEmitter.emit('event-2',arr);

 