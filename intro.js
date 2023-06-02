//javascript manual 

// it is dynamic and need no intialliazation of vatiables

//Printing function
//alert('Hello learner');
console.log('Welcome to javascript tutorial')

/////////////////////////////////////////////////////////////
// Variables


// All the datatypes are same as C 
// it is dynamic and need no intialliazation of vatiables


//ways to  type variables 
let a = 10;
const b = true
var myString= 'Safayed';
///////////////////////////////////////////////////////////////

//Array



// Array also have no issues in saving diferent 
//datatypes in it for different index
var myArray= [1, 'strongman', 2.366];




console.log('Array is printer here\n', myArray);
//array accessing method
console.log('\naccesing array like this\n', myArray[1]);
//array length
console.log('\nshows array length by this function\n', myArray.length);

//array pop method
console.log('\nDeletes the last element from array \n', myArray.pop());
console.log('\nArray printing after pop \n', myArray);

//array push method
console.log('\nAdds the last element from Array and return the index of the Array \n', myArray.push(20));
console.log('\nArray printing after push \n', myArray);

//array shift method
console.log('\nRemoves the first element from Array and return the index of the Array \n', myArray.shift());
console.log('\nArray printing after shift \n', myArray);

//array unshift method
console.log('\nAdd the first element from Array and return size of array \n', myArray.unshift(12));
console.log('\nArray printing after unshift \n', myArray, '\n\n');


////////////////////////////////////////////////////////////////

//Objects
// All the datatypes are same as C 
// new data type Object in JS
// everything in javascript are objects


//objects are key - value pair
var myObject = {
    key1: 'value1',
    key2: 'value2'
};

//calling key of a object 
console.log('printing the value of first key =', myObject.key1);
//Or
console.log('printing the value of first key 2 =', myObject['key2']);


console.log('printing the object =\n', myObject);

//nested object and accesing it
var newObj = {
    firstname : 'safayed',
    Age : 24,
    CGPA: 3.57,
    subjects: ['networking', 'maths', 'computer'],
    nestobj : {
        key : 'inside nested object'
    }
}

console.log('\nprinting new Object =\n', newObj);
console.log('\nprinting the nested object elemenets =\n', newObj.nestobj.key);

// adding new key or property dynamically 
//after first intializational of object

newObj.newkey = 'new value'

console.log('\nprinting Object after adding new property =\n', newObj);


// removing a key or property dynamically
delete newObj.newkey

console.log('\nprinting Object after deleting new property =\n', newObj);



/////////////////////////////////////////////////////////

//              Conditional and Control statment

/////////////////////////////////////////////////////////

// all syntax are same as C language


//if statament
a=(Math.random())*100

if (a>= 90){
console.log('You got A*');

}

else if (a < 90 && a>= 70){
    console.log('You got B*');


}
else if (a < 70 && a>= 50){
    console.log('You got C*');


}
else{
    console.log('You are below average');
}


//loop statament


//for 

for(i=0; i<=10; i++){
    console.log('for loop ', i);
}
console.log('\n')
//while
a=0;
while (a<10){
    a++
    console.log('while loop ', a);
}
console.log('\n')
//For in

//to iterate all values inside a Object

var colors = {
    primary: 'RED',
    secondary: 'Yellow',
    teritary: 'CYAN'
}

for (var keys in colors){
    console.log(keys+ '->' + colors[keys])
}

console.log('\n')
//for in Arrays

colorArrays = ['red', 'blue', 'green', 'yellow']

for (var keys in colorArrays){
    console.log(keys+ '->' + colorArrays[keys])
}

//Arrays are also objects whose keys are just index.

console.log('\n')
//for of loop are for iterable datastructures like,
// Arrays, String, many moree.

var scores = [60,90,80,75]

for (var results of scores){
    console.log(results)
}
// Here the iterating variable is the value of 
//the index of the arrays
console.log('\n')
//Entries method to get the index in  for of loop
for (var [index, results] of scores.entries()){
    console.log(index+'->'+ results)
}


console.log('\n')
//for of a string
myString = 'safayed'

for (var ab of myString ){
    console.log(ab, '\n')
}
////////////////////////////////////////////////////////////////////

//////////// FUNCTIONS 

//////////////////////////////////////////////////////////////////

function funcName (parameter){
// write code here
console.log('\nMy Name is ', parameter)
}

funcName('Safayed')


//Function in expression

var add = function(a,b){

    return a+b
}

console.log('\nThis is the result of the expression function ',add(10,5));

// this function has no name hence
// it is called a anonymous function
// the variable add is where this nameless function is assign


var sum = add

console.log('does the same job as add',sum(12,12));

// variable sum is assign add so the anonymous


//ES6

//problem with var 
// var can be redecalred with same identifer 


var sa = 12;
//redecalration
var sa = 24;


