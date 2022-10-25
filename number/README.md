# Number / number
- JavaScript와 같이, TypeScript의 모든 숫자는 부동 소수점 값 입니다.
- TypeScript는 16진수 및 10진수 리너럴 외에도,  
ECMAScript2015에 도입된 2진수 및 8진수를 지원합니다
- NaN
- 1_000_000과 같은 표기 가능

``` typescript
let decimal = 6; // 10진수 리터럴
let hex = 0xf00d; // 16진수 리터럴
let binary = 0b1010; // 2진수 리터럴
let octal = 0o744; //  8진수 리터럴
let notANumber = NaN;
let underscoreNum = 1_000_000;
```