export default (input: string) =>
// Like with the text-length feature, this definitely isn't the most
// performant way to do this, but if performance is a concern, NodeJS
// is fundamentally the wrong decision.
    input.trim().split(/\s+/g).length;