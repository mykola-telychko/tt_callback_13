const fs = require('fs');

// read from file
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    console.log('Read data:', data);

// write to file
    const newData = data.toUpperCase();
    fs.writeFile('output.txt', newData, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return;
        }

        console.log('Data written to output.txt');
    });
});
