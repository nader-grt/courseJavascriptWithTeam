import * as fs from "fs";
import * as readline from "readline";

async function printFileContent(fileName: string): Promise<void> {
  try {
    // Open the file for reading (equivalent to ios::in)
    const fileStream = fs.createReadStream(fileName, "utf-8");

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity, // Handles both \n and \r\n line endings
    });

    // Read file line by line
    for await (const line of rl) {
      console.log(line);
    }

    console.log("\nFile reading completed!");
  } catch (error) {
    console.error("Error reading file:", error);
  }
}

async function printContentFromFile(): Promise<void> {
  await printFileContent("MyFile.txt");
}

export default printContentFromFile;
