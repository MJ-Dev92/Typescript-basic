function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error("failed");
}

function infitieLoop(): never {
  while (true) {

  }
}

declare const a: string | number;

if (typeof a !== "string") {
  a;    // string + number - string = number
}

type Indexable<T> = T extends string ? T & { [index: string]: any } : never;

type ObjectIndexabel = Indexable<{}>;

// const b: Indexable<{}> = '';
