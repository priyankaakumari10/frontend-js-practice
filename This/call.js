const person = {
    name: "Priyanka",
    city: "delhi",  
    sing: function() {
        return `${this.name} sings LA LA LA`;
    }
};

const person2 = {
    name: "Ankit",
    city: "mumbai"
};

person.sing.call(person2)