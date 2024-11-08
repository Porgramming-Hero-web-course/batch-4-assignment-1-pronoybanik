{
    function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
        return keys.every(key => key in obj);
    }

    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    const result = validateKeys(person, ["name", "age"])
    console.log(result);

}