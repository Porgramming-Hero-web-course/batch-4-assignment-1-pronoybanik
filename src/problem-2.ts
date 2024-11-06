{
    const removeDuplicates = (numbers: number[]): number[] => {
        return numbers.filter((value, index) => numbers.indexOf(value) === index);
    }

    const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
    console.log(result);

}