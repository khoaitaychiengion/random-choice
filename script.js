let fileLines = [];

document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const fileContent = e.target.result;
            fileLines = fileContent.split('\n');
        };
        reader.readAsText(file);
    }
});

document.getElementById('listButton').addEventListener('click', function() {
    if (fileLines.length === 0) {
        alert('Please select a file first.');
        return;
    }

    const randomIndex = Math.floor(Math.random() * fileLines.length);
    const randomLine = fileLines[randomIndex];

    const fileContentDiv = document.getElementById('fileContent');
    fileContentDiv.textContent = randomLine;
});