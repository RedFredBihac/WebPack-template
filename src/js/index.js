/* ovdje importujemo scss*/
import '../scss/style.scss';

const shopingCart = ['P1', 'P2', 'P3', 'P4', 'P5'];
console.log(shopingCart);

var person = {
 name: 'Admir',
 age: 35
}

console.log(person);

class Client {
 constructor(first, last) {
  this.first = first;
  this.last = last;
 }
 display() {
  return `${this.first} and ${this.last}`;
 }

}
const client = new Client('Admir', 'Džaferović');
console.log(client.display());