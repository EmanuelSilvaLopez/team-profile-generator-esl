const Manager = require('../lib/Manager');

// Creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Kanye', 10, 'ye@gmail.com', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Kanye', 10, 'ye@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 