# any
- 어떤 타입이어도 상관없는 타입입니다.
- 이걸 최대한 쓰지 않는게 핵심입니다.
- 왜냐면 컴파일 타임에 타입 체크가 정상적으로 이뤄지지 않기 때문에입니다.
- 그래서 컴파일 옵션 중에는 any를 써야하는데 쓰지 않으면 오류를 뱉도록 하는 옵션도 있습니다.
    - nolmplicitAny

```typescript
function returnAny(message): any {
  console.log(message);
}

returnVoid('리턴은 아무거나');
```

- any는 계속해서 개체를 통해 전파됩니다.
- 결국, 모든 편의는 타입 안전성을 잃는 대가로 온다는 것을 기억하십시오.
- 타입 안정성은 TypeScript를 사용하는 주요 동기 중 하나이며 필요하지 않은 경우에는 any를  
사용하지 않도록 해야합니다.

```typescript
let looselyTyped: any = {};

let d = looselyTyped.a.b.c.d;
// ^ = let d: any
```