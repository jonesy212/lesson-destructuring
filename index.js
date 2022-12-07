
// const person = {
//     name: "Harry Mack",
//     age: 30,
//     expertise: "jaw-dropping visual freestyle rapping",
//     // youtube: "www.youtube.com/harrymack",
//     firearms:{
//         handgun: "40 cal"
//     }
//   };


//   const { name, age, expertise, youtube} = person

//   const {handgun} = person.firearms

//   console.log(`${name}  has a  ${handgun}`)





// //   swapping variables

// let atWork = 'Ben';
// let onBreak = 'John';

// console.log(atWork, 'at work');
// console.log(onBreak, 'taking a break');

// [atWork, onBreak] = [onBreak, atWork]

// console.log('--switch--')

// console.log(atWork,'is now at work');
// console.log(onBreak,'is now on break');


// let master = "me";
// let student = "you";

// [master, student] = [student, master]

// console.log  ('student',student);
// console.log('master',master);





















 




// //Destructuring functions

// // when returning an object
// const cryptoConverter = (amount) => {
//     const crypto = {
//         BTC: amount / 19000, //<--PRICE OF CRYPTO//
//         ETH: amount /  595,
//         LTC: amount / 88,
//         XEM: amount / 0.20,
//         TEST: amount/ 2
//     }
//     return crypto;
// }

// const {BTC, ETH, LTC, XEM, TEST} = cryptoConverter(1000);

// console.log(BTC, ETH, TEST)


// // DESCTUCTURING IN PARAMETERS

const myBill ={
    total: 125,
    tax: .0825,
    tip: undefined,
}

// const calcBill = (bill) => bill.total + (bill.tip * bill.total) + (bill.tax * bill.total);
// const finalBill = calcBill(myBill)
// console.log(finalBill)

//better way

const calcBill = ({total, tax=.0825, tip=.25}) => total + (tip*total) + (tax*total)
const finalBill = calcBill(myBill)
console.log(finalBill)


// // exercise

// const names = ['John','Jacob', 'Jingleheimer'];

// const [name1, name2, name3] = names

// console.log((name1), name2)


// const foo = () => [1,2,3];

// const returnNumber = foo()

// console.log(returnNumber[0],returnNumber[1])


// // let a ='Jack';
// // let b = 'Jill';
// // console.log('a: ',a, 'b: ',b); 

// // [a,b] = [b,a]

// // console.log('a: ',a, 'b: ',b);

// // DESTRUCTED NESTING
// const array = [1, [2, [[3,4],5],6]]

// const [a, [b, c, d]] = array

// console.log("a:", a, "b:", b, "c:", c, "d:",d )


// // spread operator

// const skatePants = ['Volcom', 'Matix', 'RCVA'];
// const skateShoes = ['Emeria', 'Nike', 'Vans'];

// // combine both arrays
// // replace 
// let combined = skatePants.concat(skateShoes)
// console.log(combined)
// // with
// let combining = [...skatePants, 'INSERTED ', ...skateShoes];
// console.log(combining)


// // Spread operator examples

// const musician = {
//     name: "Bek",
//     shoes: ['Nike', 'Clings']
// }

// musician.shoes = [...musician.shoes, ...skateShoes]
// console.log(musician)

// console.log([...musician.name[2]])
// console.log(...musician.shoes[1])


// //real world example

// const comments = [
//     {id: 1, comment: 'Keep on trucking brotha'},
//     {id: 2, comment: 'Losing space'},
//     {id: 3, comment: 'Cherish those around you'},
//     {id: 4, comment: 'Cherish those around you'},
// ]

// const id= 2;
// const commentIndex = comments.findIndex((w) => w.id == id);

// console.log('commented',commentIndex)

// const nice_comment =[...comments.slice(0, commentIndex), ...comments.slice(commentIndex + 1)]
// console.log(nice_comment)

   

// //combine arrays using spread operator and 
// const courses= ['Javascript', 'HTML', 'CSS'];
// const [course1, course2,course3]= courses

// const classes= ['Introduction', 'HTML Intro', 'Advanced CSS'];
// const [class1, class2, class3] = classes


// const combineArrays=() => {
//     let combined = ['Courses: ',...courses ,...classes]
//     console.log(combined)
// }

// combineArrays()

// let numbers = [2,4,5,3,4] 
// const addEveryOther= (number)=> {

//     ///odd numbers
//     return number.filter((val, ind) => {
//         if(ind % 2 ){
//             odd= numbers.reduce((a,b) => a + b)
//             return odd
//         } 
//     })
//     .reduce((sum, number) => {
//         console.log('total value ');
//         return  sum + number
//     })
// }

// console.log(addEveryOther(numbers))

// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satuyrda'];

// const [
//     day1,
//     day2,
//     ...restDays
// ] = days;


// console.log(restDays)

// //spreading into a function
// const dogs = ['german shepard', 'bulldog', 'poodle'];

// const moreDogs = ['Labrador', 'Golden Retriever', 'Great Dane'];

// dogs.push(...moreDogs)
// console.log(dogs)

// const greeting = (first, last) => console.log(`hello ${first} ${last}`)

// const him = ['John', 'Doe'];
// greeting(...him)


// //array of converted amounts in a function
// const currencyConverter = (rate, ...amounts) =>  amounts.map((amount)=>rate * amount)
// const converted = currencyConverter(1.5, 5, 10, 23,  44, 87)
// console.log(converted)



// const teams = ['You', 'They', 'Mal', 'Allen'];
// const [captain, coCapt, ...team] = teams
// console.log(captain, coCapt, team)

// // Object Literals
// // create a vehicle

// const make = 'Dodge';
// const model = 'Challenger';
// const year = 2022;

// // before
// // const vehicle = {
// //     make: make,
// //     model: model,
// //     year: year,
// // }

// //AFTER SHORTHAND
// const vehicle ={
//     make,
//     model,
//     year
// }
// console.log(vehicle)


//FUNCTION
const makeVehicle = (make, model, year) => ({
    make,
    model,
    year
})

const SUV  = makeVehicle('Mercedes', 'AMG G 63', 2022);
console.log(SUV)


// const key = 'name';
// const value = 'Jason';

// const reverseString = (str) => (!str.length) ? '' : reverseString(str.substr(1)) + str.charAt(0);

// const individual ={
//     [key]:value,
//     [`${key}Reverse`]:reverseString(value)
// }

// console.log(individual)


// //FOR OF LOOP:


// const jewelry = ['ring', 'earrings', 'chain'];

// // Array.prototype.myUscase = function(){
// //     for(i = 0; i< jewelry.length; i++){
// // jewelry[i]= jewelry[i].toUpperCase();
// //     } 
// // }
// //for each loop
// // jewelry.forEarch((jewelry) =>{
// //     if(shoe === 'Supra')
// //     // break//cuases error in for each
// // })
// // if a functon

// // for in loop
// // array prototype to build a function

// // above will cause a return of a [FUNTION]
 
// // USING A for of loop removes that [FUNTION]
// // for( const index of jewelry){
// //     if (index === 'ring' ){
// //     break //<---- break and continue works here
// //     }
// //     console.log(jewelry)
// // }


// //GENERATORS
// // const jewel = jewelry.entries();
// // console.log(jewel)
// // can type shoe.next() < and manually

// //GREAT WHEN not knowing which loop to use due to how you are tyring to access information
// //EXECPT OBJECTS
// for (const [i,jewel] of jewelry.entries()) {
//     console.log(`${jewel} is in index ${i}`)
// }

// //SUM FUNCTION
// // irating through things that aren't an array
// function addTotal() {

//     let total = 0;
//     for(const nums of arguments) {
//         total += nums;
//     }
//     console.log(total,'total');
//     return total
//     // console.log(arguments)//<-- not available in an arrow
// }

// addTotal(3, 4, 5, 4, 35, 22)


// const someNames = 'Mike';

// for (const char of someNames) {
//     console.log(char)
// }

// // HTML tip using

// //using div{}* "a number here"
//     // will create multiple of these divs based on the number * by

// //  how to iterate through html elements



//
// const header = document.querySelectorAll('h5')//check console in browers and see the h5s forEach is usable

// for (const h of header) {
//     console.log(h)
//     h.addEventListener('click', function () {
//      console.log(this.textContent)
//     })
// }




// const makeDiv = document.querySelector('.btn')

// makeDiv.addEventListener('click', addDiv)

// function addDiv(){
//     const newDiv = document.createElement('div')
//     console.log('add')
// }
// addDiv()


// const fruits = ['apple', 'orange', 'banana']

// for (const [i, fruit] of fruits.entries()) {
//     console.log(i,fruit)
// }

// for (const [i,jewel] of jewelry.entries()) {
//     console.log(`${jewel} is in index ${i}`)
// }

// let numbers1 = [1]

// for (let [i,number] of numbers1.entries()) {
//     while (number <= 22) {
//         numbers1.push(number)
//         number += 2
//         console.log(i,' on number',number)
//     }
//     return
// }
// console.log('on ',numbers1)

//for OF loop with OBJECTS

// const biker = {
//     name: 'Sift',
//     bike: 'Max10',
//     injuries: 10,
//     bonesBroke: 2,
// };

// for(const [prop, value] of Object.entries(biker)) {
//     console.log(prop, value)
// }

//array.FROM() and @Array.OF()
// doesn't exist in array.prototype

//takes irateble info and turns it to an array


// const rocks = ['small', 'medium', 'large'];

// const headers = document.querySelectorAll('h5');
// const headerArray = Array.from(headers);
// headerArray.map((node) => console.log(node.textContent)); //<---doesn't work with JUST const headers

// console.log(headerArray)

// // class decleration
// class Person {
//     constructor(name, hobby){
//         this.name = name;
//         this.hobby = hobby
//     }
//     greet() {
//         console.log(`${this.name}, this should be a wonderful delight`)  
//     }

//     myHobby() {
//         console.log(`${this.name} like to ${this.hobby}`)
//     }

//     //lives on the person CLASS
//     static saySomething() {
//         'coding is fun'
//     }
// }

// const person1 = new Person('Jack', 'coding');
// const person2 = new Person('Jill', 'Skydiving');

// console.log(person1.greet(), person1.myHobby())
// console.log(person2.greet(), person2.myHobby())


// class User {
//     constructor(userName, age) {
//         this.userName = userName;
//         this.age = age;
//         this.hobbies = [];
//     }
//     greeting() {
//         console.log(`Welcome ${this.userName},  I hope you take as much from this as possible`)
//     }
//     addHobby(hobby) {
//         this.hobbies.push(hobby);
//         return this.hobbies
//     }
// }

// //create a person that SHARES some of the attributes from above class


// class Admin extends User {
//     constructor(userName, age, area) {
//         super(userName, age);
//         this.area = area
//     }
//     createUser(name) {
//         console.log(`Created new user:  ${name}`)
//         return new Admin(this.userName, this.age, this.area, name);
//     }
// }

// const user1 = new User('Mike', 25)
// const admin1 = new Admin('superAdmin', 23, 'Science')

// console.log(user1.addHobby('coding'))
// console.log(user1.addHobby('skateboarding'))
// console.log(admin1)
// console.log(admin1.createUser('Max'))
// console.log(admin1)
// console.log(admin1.addHobby('filing papers'))

// function* anotherGenerator(i) {
//     yield i + 1;
//     yield i + 2;
//     yield i + 3;
//   }
  
//   function* generator(i) {
//     yield i;
//     yield* anotherGenerator(i);
//     yield i + 10;
//   }
  
//   const gen = generator(10);
  
//   console.log(gen.next().value); // 10
//   console.log(gen.next().value); // 11
//   console.log(gen.next().value); // 12
//   console.log(gen.next().value); // 13
//   console.log(gen.next().value); // 20

// function* idMaker() {
//     let index = 0;
//     while (true) {
//       yield index++;
//     }
//   }
  
//   const gen = idMaker();
  
//   cbonsole.log(gen.next().value); // 0
//   console.log(gen.next().value); // 1
//   console.log(gen.next().value); // 2
//   console.log(gen.next().value); // 3


// //extending generators
const names = ['ben', 'allen', 'michael']

function* listOfHumans() {
    for (let i = 0; i < names.length; i++) {
        yield names[i];
    }
}

const humans = listOfHumans();

if (names) {
    console.log('human',humans.next())
    console.log(humans.next())
    console.log(humans.next())
}




// const homes = ['single-family', 'multi-family', 'one bedroom']


// function listHomes() {
//     for (let i = 0; i < homes.length; i++) {
//         yield homes[i];
//     }
// }








//////****//     SET() 

// set() unique type of array
// action happen together
//items can't be accessed individually

// //1st way
// const homes = new Set();


// homes.add('single');
// homes.add('family');
// homes.add('mansion');

// // console.log(homes)< can be ran with above

// //delete item
// homes.delete('single');
// console.log(homes)

// const names = new Set();

// names.add('john')
// names.add('mik')
// names.add('avlvin')

// //make set iratable
// const humans = names.values();

// for (const name of humans) {
//     console.log(name)
// }

// console.log(names)


// initiate set with values

const teams = ['jake', 'mal', 'allen'];
const members = new Set(teams);


console.log(teams)
// before//to see how many items are in the array
console.log(members.size)
// after//delete
members.delete('allen')
//to see how many items are in the array
console.log(members.size)


console.log(teams)
console.log(members)


const competitors = new Set();

competitors.add('Mills')
competitors.add('Jam')
competitors.add('Phill')

// /set iterable
const competed = competitors.values()

console.log(competed)
competed.next()

console.log(competed)



// //WEAKSET()

let person1 = { id: 1, name: 'Melvine' };
let person2 = { id: 2, name: 'Trae' };

//can't loop over
//doesn't have a clear method due to garbage collecting


const weakSauce = new WeakSet([person1, person2]);

person1 = null;
console.log(weakSauce);

//doesn't full work... look up more on weak sauce









//////****//     //MAP
const people = new Map();

people.set('allen', 1)
people.set('ben', 2)
people.set('bill', 3)

// console.log(people)

//delete people
// people.delete('ben')
console.table(people)


//MAP LOOP
// people.forEach((item)=> console.log(item));

//FOR LOOP

// for (const item of people) {
//     constole.log(item);
// }
// destructuring people
for (const [key, value] of people) {
    console.log(key, value);
}

//MAPS work with objects
// maps uses a key value pair
const friend = new Map();

friend.set('mike', 1);
friend.set('jim', 3);
friend.set('bill', 2);


console.log(friend)
//with MAPS .GET will return the value
console.log(friend.get('jim'));
//cant delete individual items
friend.delete('jim');
console.log(friend)

//loop in a n array
friend.forEach((item) => console.log(item));

//loop in a n array with destructuring
for (const [key, value] of friend) {
    console.log(key, value)
}




// ////****/ MORE ON MAPS
// key can be anything...store objects then track the info about the object without storing on the object itself

// const totalClicks = new Map();
// const headers = document.querySelectorAll('h5')
// console.log(headers)

// headers.forEach((h5) => {
//     console.log(h5)
//     totalClicks.set(h5, 0);
//     ///writing function the normal gives us access to the
//     //this keyword to the DOM
//     h5.addEventListener('click', function () {
//         //get key of the dome node this refereing to the DOM NODE
//         const count = totalClicks.get(this);
//         //every click will add to the count
//         totalClicks.set(this, count + 1);
//         console.log(totalClicks)
//     })
// });

// console.log(totalClicks);

// //Weakmap- can't be looped over
// let person1a = { name: 'mike' }
// let person1b = { name: 'joe' }

// const map = new Map();
// //when wanting to be able to delete trash/info in map use weak map
// //STOP DATA LEAKS
// const weak = new WeakMap();

// map.set(person1a, 'Hello mike');
// weak.set(person1b, 'Hello joe');

// //set person to null, but doesn't remove object from map
// person1a = null;
// //set person to nul and will remove object from map
// person1b = null;

// console.log(map);
// console.log(weak);



//PROMISES and FETCH OVERVIEW
console.log('start');

const pokemon = fetch('https://pokeapi.co/api/v2/pokemon/pikachu/');

//first response 
pokemon
    //GET RESPONSE IN JSON
    .then((data) => data.json())
    //RETURN DATA
    .then((data) => console.log(data))
    //ERORR HANDLING
    .catch((error) => console.log(error));

console.log(pokemon);
console.log('finish');

//BUILD A PROMISE
//promise constructor

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject({})
        //set time for this to run giving time for promes  to run
    }, 3000)
});

promise
    .then((data) => console.log(data))
    .catch((error) => console.log(error, 'no data'));


//MULIPLE PROMISES
const youtubePost = { id: 1, comment: 'You Rock!' }
const hobbies = ['Skateboarding', 'Coding'];

const post = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(youtubePost)
    }, 4000)
})


const hobby = new Promise((resolve, response) => {
    setTimeout(() => {
        resolve(hobbies);
        }, 4000)
})

Promise
    .all([post, hobbies])
    .then((data) => {
        const [ytPost, myHobbies] = data;
        console.log(ytPost, myHobbies)
    })

    


    //create to variables to hold promise
    //this is  browser function
    //must be opened on the live server










// //USING ACTUAL DATA
// //create two variables to fetch data
// const pokamon= fetch('https://pokeapi.co/api/v2/pokemon/pikachu');

// const chuckNorris = fetch('https://api.chucknorris.io/jokes/random');

// Promise
//     //group promises together
//     .all([pokamon, chuckNorris])
//     .then((response) => {
//         return Promise
//         .all(response.map((res) => res.json()));
//     })
//     .then((data) => {
//         const [poke, joke] = data;
//         console.log(`${poke.name}\n 
// ${joke.value}`);
//     })

// console.log('ASYNC AWAIT');

// //must have function based on promies to be able to sync await
// //promised based function
// //await must be made in 
// const holdOnNow = (time) => {
//     return new Promise((resolve, reject) => { 
//         if (time > 49090){
//             reject("sorry, I got tired bro")
//         }
//         setTimeout(() => {
//         resolve(`Take your time... (${time}ms)`, time)
//         })
//     })
// }



// const iGotIt = async () => {

//     try {
//         const res = await holdOnNow(500);
//         console.log(res);
//         const res1 = await holdOnNow(1500);
//         console.log(res1)
//         const res3 = await holdOnNow(4000);
//         console.log(res3);
//         const res4 = await holdOnNow(40000);
//         console.log(res4)

//     } catch (err) {
//         console.log(err)
//     }
// }
// iGotIt();


// //ASYNC/AWAIT: MULTIPLE PROMISES

// const gitData = async () => {
//     const p1 =  fetch("https://api.github.com/users/jonesy212");
//     const p2 =  fetch("https://api.github.com/users/devslopes");
//     const res = await Promise.all([p1, p2]);
//     const gitPromises = res.map(r => r.json());
//     const [myGithub, devslopes] = await Promise.all(gitPromises);
//     console.log(myGithub, devslopes);
// };

// gitData();

// //reuusable
// //ASYNC AWAIT PROMISE FETCH
// const getData = async (names) => {
//     const promises = names

//         .map(name => fetch(`https://api.github.com/users/${name}`)
//         .then(r => r.json()));
    
//     const account = await Promise.all(promises);
//     console.log(account);
// }

// getData(['jonesy212', 'devslopes', 'john'])



function* backupGenerator() {
    let x = 0;
    for (let i = 0; i < 10; i += 1) {
      yield x += 1;
    }
  }
 
  const gen = backupGenerator();
  gen.next();
console.log(gen.next().value); // What will be printed here?
  
console.log(
typeof (new (class F extends (String, Array) {})).substring
)