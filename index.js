// 1 . What's logged for closure

const outerFunc = () => {
    let count = 0;
    return () => ++count;
}

const counter = outerFunc();

console.log(counter()); // 0
console.log(counter()); // 1

// 2 . What's logged

function createCounter(){
        let globalCount = 0;

        function incrementCount(){
            let incrementedValue = ++globalCount;
            return incrementedValue;
        }
        return {incrementCount}
}
console.log('------- ****** -------');
const counterObject = createCounter();
console.log(counterObject.incrementCount());
console.log(counterObject.incrementCount());
console.log(createCounter().incrementCount());

// 1
// 2
// 1

console.log('------- ****** -------');

// True or false

function createUserManager(){
    let user = null;
    return (name)=>{
        'use strict'
        user = {
            name,
            createdAt : new Date()
        }
        return user
    }
}

const createUser = createUserManager();

console.log(createUser("John Doe") === createUser("John Doe")); // false

console.log('------- ****** -------');

// What's gets logged

function createCounter(initialCount){
    let count = initialCount;

    return function (){
        "use strict";

        count +=1;
        return count;
    }
}

const counter2 = createCounter(10);

counter2()
counter2()