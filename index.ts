interface User {
  name: string;
  age: number;
}

function printUser(user: User): void {
  console.log(`${user.name} is ${user.age} years old.`);
}

// printUser({ name: "Bob" }); // ❌ Error: 'age' is missing
printUser({ name: "Bob", age: 30 }); // ✅ Works fine
