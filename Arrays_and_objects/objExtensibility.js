// A. Prevent further additions of properties to the student object
const student = { name: "John", age: 25 };
Object.preventExtensions(student);

// B. Check if the student object is extensible
const extensibleStatus = Object.isExtensible(student);

// C. Create a new object called Teacher with a subject property set to Math
const teacher = { subject: "Math" };

// D. Seal the teacher object preventing any additions or deletions of properties
Object.seal(teacher);

// E. Check if the teacher object is sealed
const sealedStatus = Object.isSealed(teacher);

// F. Print the ExtensibleStatus and SealedStatus to the console
console.log("Extensible Status:", extensibleStatus);
console.log("Sealed Status:", sealedStatus);
