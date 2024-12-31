function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(' ');
}

let user = ["Jane", "Doe"];
console.log(greeterArray(user));//This will fix the error
console.log(greeter(user[0]));//Another way to fix the error