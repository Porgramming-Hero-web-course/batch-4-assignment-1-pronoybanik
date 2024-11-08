{
    function countWordOccurrences(sentence: string, word: string): number {
        const sentenceWords = sentence.toLowerCase().split(" ");
        const targetWord = word.toLowerCase();
    
        return sentenceWords.filter(w => w === targetWord).length;
    }
    
    const result = countWordOccurrences("I love typescript", "typescript")
    console.log(result); 
    

}