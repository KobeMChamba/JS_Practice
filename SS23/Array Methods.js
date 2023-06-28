const hobbies = ["Sports", "Cooking", "Chess"]
console.log(hobbies[0]);

// Built in utility methods
hobbies.push("Fishing");
const index = hobbies.findIndex((item)=> {
    return item === "Sports";
})
//will return index if found    
console.log(index)
//even more consice 
const index_quick = hobbies.findIndex((item) => item === "Sports");
const editedHobbies = hobbies.map((item) => item + "!");
//mapping array to an array of objects
const editedHobbies_obj = hobbies.map((item) => ({text: item}));

function transformToObjects(numberArray) {
    // Todo: Add your logic
    // should return an array of objects
    return numberArray.map((item) => ({val: item}));
}

//spread op
const newHobbies = ["Reading"];
const mergedHobbies = [...hobbies, ...newHobbies];
console.log(mergedHobbies);
// can be used on objetcs
const extendedUser = {
    isAdmin: true,
    ...user
};

for (const hobby of hobbies) {
    console.log(hobby);
}