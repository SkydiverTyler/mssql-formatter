/*
    MSSQL Formatter
    https://github.com/SkydiverTyler/mssql-formatter
    (c) Tyler Jones
    2024 May 29
*/

const INPUT = document.querySelector("#sql-input");
const OUTPUT = document.querySelector("#sql-output");

// On every change to text box value
INPUT.addEventListener("change", (event) => {
    // Get input text
    inputQueryText = event.target.value;
    // Format
    const formattedQueryText = format(inputQueryText);
    // Set output text
    OUTPUT.textContent = formattedQueryText;
});

const format = (input, options) => {
    const output = input
        .replaceAll("\t", " ")
        .replaceAll("\r\n", ";")
        .replaceAll("\n", ";");

    return output;
};
