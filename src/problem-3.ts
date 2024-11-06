{
    const countWordOccurrences = (sentence: string, word: string): number => {
        const value = new RegExp(`${word}`, 'gi');
        const matches = sentence.match(value);
        return matches ? matches.length : 0;
    }


    console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"));


}