const Engineer = require('../lib/Engineer');

// Creating an engineer object  
test('creates an Engineer object', () => {
  const engineer = new Engineer('Kanye', 10, 'ye@gmail.com', 'yeezy1');

  expect(engineer.github).toEqual(expect.any(String));
});

// Gets github from getGithub()
test('Gets engineer github value', () => {
  const engineer = new Engineer('Kanye', 10, 'ye@gmail.com', 'yeezy1');

  expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// Gets role from getRole() 
test('Gets role of employee', () => {
  const engineer = new Engineer('Kanye', 10, 'ye@gmail.com', 'yeezy1');

  expect(engineer.getRole()).toEqual("Engineer");
});