{
    function countWordOccurrences(sentence: string, word: string): number {
        const sentenceWords = sentence.toLowerCase().split(" ");
        const targetWord = word.toLowerCase();
    
        return sentenceWords.filter(w => w === targetWord).length;
    }
    
    
    console.log(countWordOccurrences("I love typescript", "typescript")); 
    

}