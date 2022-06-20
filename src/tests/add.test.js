const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}!`;
test('Should add two numbers',() => {
    const result = add(3, 4);
    // if(result !== 7){
    //     throw new Error(`You added 4 and 3. The result was ${result}. Expected 7`);
    // }
    expect(result).toBe(7);
});
test('Should greet with name',() => {
    const greet = generateGreeting('Nikita');
    expect(greet).toBe('Hello Nikita!');
})