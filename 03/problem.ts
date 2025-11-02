function roundNumbers(num: number): void {
    console.log("Original:", num);
    console.log("Rounded:", Math.round(num));
    console.log("Floor:", Math.floor(num));
    console.log("Ceil:", Math.ceil(num));
}

roundNumbers(4.7);
roundNumbers(4.2);



function randomExample(): void {
    const randomNum = Math.random();
    console.log("Random number [0-1):", randomNum);
}

randomExample();
