import readlineSync from "readline-sync";

// Define a structure for task duration
interface StTaskDuration {
  numbersOfDays: number;
  numbersOfHours: number;
  numbersOfMinutes: number;
  numbersOfSeconds: number;
}

// Read a positive number from the user
function readPositiveNumber(message: string): number {
  let number: number;
  do {
    number = Number(readlineSync.question(message));
  } while (number < 0);
  return number;
}

// Read task duration from the user
function readTaskDuration(): StTaskDuration {
  const taskDuration: StTaskDuration = {
    numbersOfDays: readPositiveNumber("\nEnter Number of Days? "),
    numbersOfHours: readPositiveNumber("\nEnter Number of Hours? "),
    numbersOfMinutes: readPositiveNumber("\nEnter Number of Minutes? "),
    numbersOfSeconds: readPositiveNumber("\nEnter Number of Seconds? "),
  };
  return taskDuration;
}

// Calculate total task duration in seconds
function taskDurationInSeconds(taskDuration: StTaskDuration): number {
  let totalDurationSeconds = 0;
  totalDurationSeconds += taskDuration.numbersOfDays * 24 * 60 * 60;
  totalDurationSeconds += taskDuration.numbersOfHours * 60 * 60;
  totalDurationSeconds += taskDuration.numbersOfMinutes * 60;
  totalDurationSeconds += taskDuration.numbersOfSeconds;
  return totalDurationSeconds;
}

// Main function
function main(): void {
  console.log("======================================================================");
  console.log("===                Training using TypeScript App                  ====");
  console.log("======================================================================");

  const duration = readTaskDuration();
  const totalSeconds = taskDurationInSeconds(duration);
  console.log(`\nTask Duration in Seconds: ${totalSeconds}\n`);
}

main();
