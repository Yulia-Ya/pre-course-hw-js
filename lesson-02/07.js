let marriedPerson = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let marriedPerson2 = structuredClone(marriedPerson);
marriedPerson2.married = true;

console.log(marriedPerson);
console.log(marriedPerson2);