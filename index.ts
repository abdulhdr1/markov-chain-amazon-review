import { writeFileSync } from "fs";
import { getData } from "./getData.js";

console.time("read");
const lines = getData();
console.timeEnd("read");

const wordMap = new Map();
console.time("calculate");
for (let line of lines) {
	if (!line) continue;
	const cleanedBody = line.replace(/[^a-zA-Z]+/g, " ").replace(/\s+/g, " ");
	const words: string[] = cleanedBody.split(" ");

	for (let wordIndex in words) {
		let currentWord = words[wordIndex].toLowerCase().trim();
		if (words.length - 1 === Number(wordIndex)) continue;
		const nextWord = words[Number(wordIndex) + 1].toLowerCase().trim();
		if ([""].includes(nextWord) || [""].includes(currentWord)) continue;
		if (wordMap.has(currentWord)) {
			const state = wordMap.get(currentWord);
			if (state[nextWord]) {
				state[nextWord]++;
				continue;
			}
			state[nextWord] = 1;
		} else {
			wordMap.set(currentWord, {});
		}
	}
}
console.timeEnd("calculate");
console.time("write");
writeFileSync(
	"./results/basic.json",
	JSON.stringify(Object.fromEntries(wordMap))
);
console.timeEnd("write");
