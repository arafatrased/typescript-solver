# Blog: TypeScript and Its uses

## What is typescript?
TypeScript is a programming language made by Microsoft.It is like JavaScript but with extra features.
The biggest feature is that it allows you to use types.
Types help you catch errors before running the code.
TypeScript code is changed into JavaScript so it can run in the browser. It helps to find mistakes early while developing and makes code easier to understand doing of big projects. 

## Difference between any, unknown and never

1. ANY
any means you can use the variable for anything.
TypeScript won’t check for errors.

```bash
let x: any = 5;
x = "hello";
```


2. UNKNOWN
unknown is like any, but safer.
You have to check the type before using it.

```bash
let y: unknown = "world";
if (typeof y === "string") {
  console.log(y.toUpperCase());
}
```
3. NEVER
never means the code should never reach this point.
It is used in functions that throw errors or never finish.
```bash
function showError(msg: string): never {
  throw new Error(msg);
}
```
## What is an Enum?

An enum is a way to give names to numbers or strings.
It helps make your code easier to read.

```bash
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
 }

let myRole = Role.User;
console.log(myRole); // "USER"
```

TypeScript makes JavaScript better and safer. It helps you write code with fewer bugs. Learning about any, unknown, never, and enums will help you a lot.
Start using TypeScript to make your code clean and strong!