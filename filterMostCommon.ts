import { readFileSync, writeFileSync } from "fs";

const data = JSON.parse(
	readFileSync("./results/basic.json", { encoding: "utf-8" })
);
const entries = Object.entries(data);

const map = new Map();

for (let entry of entries) {
	const [word, data] = entry as [string, { [nextWord: string]: number }];

	if (Object.values(data).length === 0) continue;

	const mostCommon = Object.entries(data).sort((a, b) => b[1] - a[1])[0];
	map.set(word, mostCommon[0]);
}

writeFileSync(
	"./results/nextMostCommon.json",
	JSON.stringify(Object.fromEntries(map))
);
