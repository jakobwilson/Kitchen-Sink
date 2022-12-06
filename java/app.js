var name = 'Jakob';

const states = 50

var val = 5 + 4



function sayHello(){
    alert('Hello World!');
};

sayHello();

function checkAge(name, age){
    console.log(name, age);
    if(age < 21) {
        alert('Sorry ' + name + ', you arent old enough to view this page!')
    }
}

checkAge('Charles',21)
checkAge('Abby',27)
checkAge('James',18)
checkAge('John',18)

var vegtables = ['Broccoli', 'Asparagus', 'Green Beans']

for(var i = 0; i < vegtables.length; i++) {
    console.log(vegtables[i])
}

var pet = {
    name: 'Bo',
    breed: 'Boxer',
};

console.log(pet)

var friend = ['Jacob', 'Caleb', 'Logan', 'Veal', 'Tim']
  

checkAge('Jacob',23)
checkAge('Caleb', 18)
checkAge('Logan', 22)
checkAge('Veal', 19)
checkAge('Tim', 25)

var friendLength = friend.length;

let remainder = (friendLength % 2)

if(remainder == 0) {
    console.log('The world is nice and even!');
} else {
    console.log('The world is an odd place!');
}
