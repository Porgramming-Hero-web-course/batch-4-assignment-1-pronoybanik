{
    interface PersonType<A, B> {
        name: A;
        age: B;
    }

    const person: PersonType<string, number> = { name: "Alice", age: 30 };

    function getProperty<T, K extends keyof T>(value: T, key: K) {
        return value[key];
    };

    const result = getProperty<PersonType<string, number>, "name">(person, "name")
    console.log(result);
}