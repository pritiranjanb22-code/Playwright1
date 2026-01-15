const text = "Username : Admin";
const username = text.split(":").slice(1).join(":").trim();
console.log(username); // Output: Admin