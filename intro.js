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
//datatypes in it 
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