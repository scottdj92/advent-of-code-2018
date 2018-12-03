// Day 1
// https://adventofcode.com/2018/day/1
import fs from "fs";
import path from "path";
import signale from "signale";

const FILE_PATH = path.resolve(__dirname, "input.txt");

fs.readFile(FILE_PATH, "utf8", (error, data) => {
    signale.info("reading input...");
    if (error) {
        throw error;
    }

    const parsedArray = data
        .trim()
        .split("\n")
        .map((item) => parseInt(item.replace("\r", ""), 10));

    const calibrationValue = parsedArray.reduce((prev, curr) => prev + curr, 0);

    signale.info(`final output: ${calibrationValue}`);
});
