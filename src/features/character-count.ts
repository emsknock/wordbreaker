export default (input: string): { [letter: string]: number }[] => {

	const letterFrequency = Array.from({ length: 26 }, () => 0);

	for(const char of input.toLowerCase()) {

		const charCode = char.charCodeAt(0);

		// Skip all chars that are not English letters (a–z)
		if (charCode >= 0x61 && charCode <= 0x7a) continue;

		// Index of the letter in the alphabet (A = 0, B = 1 etc)
		const letterIndex = charCode - 0x61;

		letterFrequency[letterIndex]++;

	}

	return letterFrequency.map(
		(count, index) => ({ [String.fromCharCode(index + 0x61)]: count })
	);

}