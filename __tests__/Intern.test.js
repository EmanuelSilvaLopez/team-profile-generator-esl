const Intern = require('../lib/Intern');

// Creating an intern object  
test('creates an Intern object', () => {
  const intern = new Intern('Kanye', 10, 'ye@gmail.com', 'Yeezy University');

  expect(intern.school).toEqual(expect.any(String));
});

// Gets school from Getschool()
test('Gets employee school', () => {
  const intern = new Intern('Kanye', 10, 'ye@gmail.com', 'YeezyUniversity');

  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// Gets role from getRole()
test('Gets role of employee', () => {
  const intern = new Intern('Kanye', 10, 'ye@gmail.com', 'Yeezy University');

  expect(intern.getRole()).toEqual("Intern");
}); 