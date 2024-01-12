let passport = {
    name: "Petr",
    surname: "Petrov",
};

const copiedPassport = structuredClone(passport)
copiedPassport.name = "Ivan";
console.log(passport.name)
console.log(copiedPassport.name)