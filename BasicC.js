function countLetters(input) {
    let freq = {};

    for (let char of input) {
        if (char !== " ") {
            freq[char] = (freq[char] || 0) + 1;
        }
    }

    let sortedKeys = Object.keys(freq).sort();
    let sortedResult = {};
    
    sortedKeys.forEach(key => {
        sortedResult[key] = freq[key];
    });

    console.log(sortedResult);
}

countLetters("Hello World");  
countLetters("Bismillah");    
countLetters("MasyaAllah");   
