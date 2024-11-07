{

    function sumArray(array: number[]): number {

        const sumValue = array.reduce((value, currentValue) => value + currentValue, 0)
        return sumValue;
    }
    const result = sumArray([1, 2, 3, 4, 5]);
    console.log(result);

}