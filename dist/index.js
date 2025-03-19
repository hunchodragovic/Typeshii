"use strict";
function printUser(user) {
    console.log(`${user.name} is ${user.age} years old.`);
}
// printUser({ name: "Bob" }); // ❌ Error: 'age' is missing
printUser({ name: "Bob", age: 30 }); // ✅ Works fine
