import textLength from "./text-length";

const test = (title: string, testCase: string, withSpaces: number, withoutSpaces: number) =>
    it(title, () => {
        expect(textLength(testCase)).toEqual({ withSpaces, withoutSpaces });
    });

test(
    "handles the assignment's test",
    "hello 2 times  ",
    15, 11
);

test(
    "handles two words",
    "Hello World",
    11, 10
);

test(
    "handles a single word",
    "Foobar",
    6, 6
);

test(
    "handles multiple words",
    "When the sunlight strikes raindrops in the air",
    46, 39
);

test(
    "handles punctuation",
    "Word. Word, word: word! Word?",
    29, 25
);

test(
    "handles multiple spaces",
    "    foo    bar    hello    world    ",
    36, 16
);

/*
	The assignment didn't explicitly specify how other whitespace characters
	than spaces should be handled. I'm _assuming_ they're counted as spaces
	too (e.g. newlines often act as word-boundaries along with spaces).
*/

test(
    "counts newlines",
    "Hello\nWorld",
    11, 10
);

test(
    "counts tabs",
    "Hello\tWorld",
    11, 10
);

test(
    "counts carriage returns",
    "Hello\rWorld",
    11, 10
);