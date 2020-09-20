import wordCount from "./word-count";

it("handles the assignment's test", () => {
    expect(wordCount("hello 2 times  ")).toBe(3);
});

it("counts two words correctly", () => {
    expect(wordCount("Hello World")).toBe(2);
});

it("counts a single word correctly", () => {
    expect(wordCount("Foobar")).toBe(1);
});

it("counts multiple words correctly", () => {
    expect(wordCount("When the sunlight strikes raindrops in the air")).toBe(8);
});

it("counts words correctly with punctuation", () => {
    expect(wordCount("Word. Word, word: word! Word?")).toBe(5);
});

it("handles leading and trailing spaces", () => {
    expect(wordCount("    foo bar    ")).toBe(2);
});

it("handles newlines", () => {
    expect(wordCount("Hello\nWorld")).toBe(2);
});

it("handles tabs", () => {
    expect(wordCount("Hello\tWorld")).toBe(2);
});

it("handles carriage returns", () => {
    expect(wordCount("Hello\rWorld")).toBe(2);
});