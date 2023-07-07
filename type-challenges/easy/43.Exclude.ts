/* _____________ 여기에 코드 입력 _____________ */

type MyExclude<T, U> = T extends U ? never : T;

/**
 * https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
 *
 * type StrArrOrNumArr = ToArray<string | number> is same as
 * type StrArrOrNumArr = ToArray<string> | ToArray<number>
 *
 * MyExclude<"a" | "b" | "c", "b" | "c"> is same as
 * MyExclude<"a", "b" | "c"> | MyExclude<"b", "b" | "c"> | MyExclude<"c", "b" | "c">
 */

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<MyExclude<"a" | "b" | "c", "a">, "b" | "c">>,
  Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, "c">>,
  // eslint-disable-next-line @typescript-eslint/ban-types
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>
];
