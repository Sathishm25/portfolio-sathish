/*func = function myFunc() 
{
    console.log("Function working");
};

num =  x = 123;

module.exports = {
    func:func,
    num: num,
    dummy: () => {console.log('Chennai')}
}*/

class myClass {
    constructor(name) {
        this.name = name;
    }
    myFunc() {
        console.log('My Name is ' + this.name)
    }
}

module.exports.myClass = myClass;