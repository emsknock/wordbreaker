export default (input: string) => ({

    // Like with the word-count feature, this definitely isn't the most
    // performant way to do this, but if performance is a concern, NodeJS
    // is inherently the wrong decision.
    withoutSpaces: input.replace(/\s+/g, "").length,

    withSpaces: input.length - 1,

});