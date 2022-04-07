const Employee = require('../lib/Employee');

// Creates an employee object 
test('creates an employee object', () => {
  const employee = new Employee('Kanye', 10, 'ye@gmail.com');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

// Gets id from getId() 
test('Gets employee name', () => {
  const employee = new Employee('Kanye', 10, 'ye@gmail.com');

  expect(employee.getName()).toEqual(expect.any(String));
});

// Gets id from getId() 
test('Gets employee ID', () => {
  const employee = new Employee('Kanye', 10, 'ye@gmail.com');

  expect(employee.getId()).toEqual(expect.any(Number));
});

// Gets emails from getEmail()
test('Gets employee email', () => {
  const employee = new Employee('Kanye', 10, 'ye@gmail.com');

  expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// Gets role from getRole()
test('Gets role of employee', () => {
  const employee = new Employee('Kanye', 10, 'ye@gmail.com');

  expect(employee.getRole()).toEqual("Employee");
}); 