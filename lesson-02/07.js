let marriedPerson = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let marriedPerson2 = structuredClone(marriedPerson);
marriedPerson2.married = true;

console.log(marriedPerson2);
console.log(marriedPerson);
