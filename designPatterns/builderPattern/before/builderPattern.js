class Address {

    constructor(zip, street){
        this.zip = zip;
        this.street = street;
    }
}


class User {
    constructor(name, age, phone,  address ){
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
}

const user = new User("vivek", undefined, undefined, new Address(411051, "sinhgad road") );
console.log(user);
// -----------------------

// class User {
//     constructor(name){
//         this.name = name;
//     }
// }

// class UserBuilder {

//     constructor(name){
//         this.user = new User(name);
//     }

//     setAge(age) {
//         this.user.age = age;
//         return this;
//     }
//     setCity(city) {
//         this.user.city = city;
//         return this;
//     }
//       setAddres(address) {
//         this.user.address = address;
//         return this;
//     }

//     build(){
//         return this.user;
//     }
// }

// const userBuild = new UserBuilder("vivek").setAge(22).setAddres(new Address("411-051", "Sinhgad Road"));
// const user = userBuild.build();
// console.log(user);