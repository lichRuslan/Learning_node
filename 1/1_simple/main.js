function User(name){
    this.name = name;
    this.sayHello = () => {
        console.log(`Hello ${this.name}`);
    };
}
var Name = new User('Rus');
Name.sayHello();