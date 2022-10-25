# never
- never 탕비은 모든 타입의 subtype이며, 모든 타입에 할당 할 수 있습니다.
- 하지만, never에는 그 어떤 것도 할당할 수 없습니다.
- any 조차도 never에게 할당 할 수 없습니다.
- 잘못된 타입을 넣는 실수를 막고자 할 때 사용하기도 합니다.

```typescript
let a: string = 'hello';

if (typeof a !== 'string') {
  let b: never = a;
}

type Indexable<T> = T extends string ? T & { [index: string]: any } : never;
```
