const person = {
    name:'Priyanka',
    city:'delhi',
    getIntro: function(){
        return `My name is ${this.name} and I live in ${this.city}`;
    }
}
const btn = document.getElementById('btn');
btn.addEventListener('click', person.getIntro.bind(person));