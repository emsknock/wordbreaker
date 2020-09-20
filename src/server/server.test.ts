import server from ".";

let response: Record<string, unknown>;

beforeAll(async () => {
    response = await server
        .inject()
        .post("/analyze")
        .payload({ text: "hello 2 times  " })
        .end()
        .then(res => res.json());
});

it("returns all required fields", () => {
    expect(Object.keys(response)).toEqual([
        "characterCount",
        "textLength",
        "wordCount",
    ]);
});

it("seems to fetch correct data for all the fields", () => {
    expect(response.wordCount).toBe(3);
    expect(response.textLength).toEqual({ withSpaces: 15, withoutSpaces: 11 });
    expect(response.characterCount).toEqual([
        { "e": 2 }, { "h": 1 }, { "i": 1 }, { "l": 2 }, { "m": 1 }, { "o": 1 }, { "s": 1 }, { "t": 1 }
    ]);
});