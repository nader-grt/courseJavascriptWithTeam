import * as fs from "fs";
import appendmode from "./appendmode";
import printContentFromFile from "./readfromfile";

function main(): void {
  const filePath = "MyFile.txt";

  try {
    // Open and write to the file (equivalent to ios::out)
    fs.writeFileSync(filePath, "Hi, this is the first line\n");
    fs.appendFileSync(filePath, "Hi, this is the second line\n");
    fs.appendFileSync(filePath, "Hi, this is the third line\n");

    console.log("File written successfully!");
  } catch (error) {
    console.error("Error writing to file:", error);
  }
}

//main();


//appendmode()

printContentFromFile();