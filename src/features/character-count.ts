export default (input: string): { [letter: string]: number }[] => {

	// Maps letters to their counts in the input:
	// A's char count is stored at 0, B's at 1 etc
	const letterFrequency = Array.from({ length: 26 }, () => 0);

	for (const char of input.toLowerCase()) {

		const charCode = char.charCodeAt(0);

		// Skip all chars that are not English letters (a–z)
		if (charCode < 0x61 || charCode > 0x7a) continue;

		// Index of the letter in the alphabet (A = 0, B = 1 etc)
		// 0x61 <=> lower case a — rest of the alphabet follows incrementally
		const letterIndex = charCode - 0x61;

		letterFrequency[letterIndex]++;

	}

	return letterFrequency
		// As per above, lower case 'a' maps to char code 0x61, so converting
		// a position in the English alphabet to a character is as simple as
		// adding the offset 0x61 to it:
		.map<[number, string]>((count, index) => [count, String.fromCharCode(index + 0x61)])
		.filter(([count]) => count > 0)
		.map(([count, letter]) => ({ [letter]: count }));

};