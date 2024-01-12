let passport = {
    name: "Petr",
    surname: "Petrov",
};

const copiedPassport = structuredClone(passport)
copiedPassport.name = "Ivan";
console.log(passport)
console.log(copiedPassport.name)