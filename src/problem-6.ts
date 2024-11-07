{


    interface ProfileType {
        name?: string;
        age?: number;
        email?: string;
    }

    const myProfile: ProfileType = { name: "Alice", age: 25, email: "alice@example.com" };

    const updateProfile = (profileValue: ProfileType, update: ProfileType): ProfileType => {
        return { ...profileValue, ...update };
    };

    console.log(updateProfile(myProfile, { age: 50 }));

}

