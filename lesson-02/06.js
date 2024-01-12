let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let changedCity = JSON.parse(JSON.stringify(passportWithAddress));
changedCity.address.city = "Bobryisk";
console.log(passportWithAddress.address.city);
console.log(changedCity.address.city);