import characterCount from "./character-count";

it("handles the assignment's test", () => {
    expect(characterCount("hello 2 times  ")).toEqual([
        { e: 2 }, { h: 1 }, { i: 1 }, { l: 2 }, { m: 1 }, { o: 1 }, { s: 1 }, { t: 1 }
    ]);
});

it("returns in alphabetical order", () => {
    expect(characterCount("fedcba")).toEqual([
        { a: 1 }, { b: 1 }, { c: 1 }, { d: 1 }, { e: 1 }, { f: 1 }
    ]);
});

it("ignores punctuation", () => {
    expect(characterCount("f!e?d:c,b.a-")).toEqual([
        { a: 1 }, { b: 1 }, { c: 1 }, { d: 1 }, { e: 1 }, { f: 1 }
    ]);
});

it("only returns letters a-z", () => {
    expect(characterCount("åöäßüçíabc")).toEqual([
        { a: 1 }, { b: 1 }, { c: 1 }
    ]);
});

it("treats uppercase letters the same as lower case", () => {
    expect(characterCount("FOOBAR foobar")).toEqual([
        { a: 2 }, { b: 2 }, { f: 2 }, { o: 4 }, { r: 2 }
    ]);
});

it("ignores whitespace", () => {
    expect(characterCount("f e\nd\tc\rba")).toEqual([
        { a: 1 }, { b: 1 }, { c: 1 }, { d: 1 }, { e: 1 }, { f: 1 }
    ]);
});