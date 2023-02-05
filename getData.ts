import { readFileSync } from "fs";

function getBody(line: string) {
	const [_rating, _title, body] = line.split(",");
	return body;
}

export function getData(): string[] {
	const testData = readFileSync("./data/test.csv", { encoding: "utf-8" });
	const trainData = readFileSync("./data/train.csv", { encoding: "utf-8" });

	const testLines = testData.split("\n").map(getBody);
	const trainLines = trainData.split("\n").map(getBody);

	const lines = new Array().concat(testLines);

	return lines;
}
