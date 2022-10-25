# TypeScript Basic Types

# Static Types(Typescript) vs Dynamic Types(Javascript)

```javascript
// Javascript
function add(n1, n2) {
  if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    throw new Error('Incorrect input!');
  }
  return n1 + n2;
}

const result = add(39, 28);
``` 

``` typescript
//Typescript
function add(n1: number, n2: number) {
  return n1 + n2;
}

const result = add(39, 28);
```

- 프로그램이 유용하려면, 가장 간단한 데이터 단위로 작업 할 수 있어야한다.:  
numbers, strings, structures, boolean 값 등등

- TypeScript에서 우리는 JavaScript에서 기대하는 것과 동일한 타입을 지원하며,  
돕기 위해 추가적인 열거 타입이 제공 되었다.

- TypeScript에서 프로그램 작성을 위해 기본 제공하는 데이터 타입

- **사용자가 만든 타입은 결국은 이 기본 자료형들로 쪼개집니다.**

- Javascript 기본 자료형을 포함(superset)
    - **ECMAScript 표준에 따른 기본 자료형은 6가지**
        - Booleans
        - Number
        - String
        - Null
        - Undefined
        - Symbol(ECMAScript6에 추가)
        - Array: object형
- **프로그래밍을 도울 몇가지 타입이 더 제공된다.**
    - Any, Void, Never, Unkown
    - Enum
    - Tuple: object형

# Primitive Type
- 오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형 
- 프리미티브 형의 내장 함수를 사용 가능한것은 자바스크립트 처리 방식 덕분
- (ES2015 기준) 6가지
    - booleans
    - number
    - string
    - null
    - undefined
    - symbol(ES2015)
- literal 값으로 Primitive 타입의 서브 타입을 나타낼 수 있다.

```typescript
true;
'hello';
3.14;
null;
undefined
```

- 또는 래퍼 객체로 만들 수 있다.

```typescript
new Boolean(fales); // typeof new Boolean(false) : 'object'
new String('world'); // typeof new String('world') : 'object'
new Number(42); // typeof new Number(42) : 'object'
```
# Type Casing
- TypeScript의 핵심 primitive Types 은 모두 소문자이다.
- Number, String, Boolean. Symbol 또는 Object 유형이 위에서 권장한 소문자 버전  
과 동일하다고 생각하고 싶을 수 있습니다.
- 그러나 이러한 유형은 언어 primitives를 나타내지 않으며, 티입으로 사용해서는 안된다.

```typescript
function reverse(s: String): String {
  return s.split("").reverse().join("");
}
reverse("Hello World");
```

- 대신 number, string, boolean, object and symbol 타입을 사용하자

```typescript
function reverse(s: string): string {
  return s.split("").reverse().join("");
}
reverse("Hello World");
```



