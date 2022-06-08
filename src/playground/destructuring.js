// const Person = {
//     name: "Nikita",
//     age: 26,
//     location: {
//         city: "Singapore",
//         temp: 32
//         }
// };
// const {name:firstName= "Anonymous",age} = Person;
// const {city,temp:temperature} = Person.location;
// if(city && temperature){
//     console.log(`It's ${temperature} in ${city}`);
// }
// console.log(`${firstName} is ${age} year old.`);

const Book = {
    title: "Ego is enemy",
    author: "Ryan",
    publisher:{
        //name: "Penguin"
    }
}
const {name:publisherName="Self Published"} = Book.publisher;
console.log(`${publisherName} is publisher`);