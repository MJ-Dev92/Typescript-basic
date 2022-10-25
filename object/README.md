# object
-  "**primitive type 이 아닌 것**"을 나타내고 싶을 떄 사용하는 타입

# non-primitive type
- **not** number, string, boolean, bigint, symbol, null, or undefined
``` typescript
let obj: object = {};

obj = {name: 'Mark'};

obj = [{name: 'Mark'}];

obj = 39; // Error

obj = 'Mark'; // Error

obj = true; // Error

obj = 100n; // Error

obj = Symbol(); // Error

obj = null; // Error

obj = undefined; // Error
``` 