import * as fs from "fs";

function appendModeFile(): void {
  const filePath = "MyFile2.txt";

  try {
    // Open in append mode — equivalent to ios::app
    fs.appendFileSync(filePath, "Hi, this is a new line***\n");
    fs.appendFileSync(filePath, "Hi, this is another new line***\n");

    console.log("New lines appended successfully!");
  } catch (error) {
    console.error("Error writing to file:", error);
  }
}

export default appendModeFile;
