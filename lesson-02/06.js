let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
console.log(passportWithAddress.address[1]);

 let changedCity = JSON.parse(JSON.stringify(passportWithAddress));
 changedCity.address[1] = "Bobryisk";
 console.log(changedCity.address[1]);
 console.log(passportWithAddress.address[1]);