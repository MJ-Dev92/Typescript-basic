# Symbol

- ECMAScript 2015의 Symbol 입니다.
- new Symbol로 사용할 수 없습니다.
- Symbol을 함수로 사용해서 symbol 타입을 만들어 낼 수 있습니다.

```typescript
console.log(Symbol('foo') === Symbol('foo')); // false 
```
- 만약 Symbol이 에러가 뜬다면 lib를 활성화 시켜야 한다.
```typescript
"lib": ["ES2015", "DOM"], 
```