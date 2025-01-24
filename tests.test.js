const request = require('supertest');
const app = require('./index'); // Import your app
const http = require('http');
require('jest-extended')
const db = require('./db');


// API test for the student table
// Step 1
describe('Get Student Data', () => {
  test('All student information', async () => {
    const response = await request(app).get('/Sdata');

    expect(response.status).toBe(200); // Check HTTP status
    expect(response.body.message).toBe('Success')
  });
});

// step 2
describe('Update student data', () => {
  it('Test Update Student Data', async () => {
    const payload = {
      fname: 'Shubham',
      mname: 'Balavant',
      lname: 'Randive',
      gender: 'Male',
      tenm: '91.00',
      twm: '66.33',
      add: 'Chakresharawadi Tal : Radhanagari Dist : Kolhapur',
      state: 'Maharastra',
      ffees: '10000',
      aadharno: '371882110553',
      id: '19'
    }

    const responce = await request(app)
      .put('/uptStudData').send(payload);

    expect(responce.body.message).toBe('Update Success')
  })
})


// Step 3
describe('Insert staff data', () => {
  it('Post API Message Field Test', async () => {
    const payload = {
      tname: 'Vaibhav Randive',
      email: 'vvrandive41211@gmail.com',
      username: 'VR',
      password: 'v@41211',
    };

    const response = await request(app)
      .post('/insertStaff')
      .send(payload);
    expect(response.status).toBe(200)

    const validMessages = [
      'Admin Registration Successful',
      'Email is already exist...',
    ];


    expect(validMessages).toContain(response.body.message);
  });
});

// stap 4

describe('Select staff data', () => {
  it('Select staff data', async () => {
    const payload = {
      email: 'bhagavat@gmail.com',
      pass: 'Bhagavat@234'
    }
    const response = await request(app)
      .post('/staffData')
      .send(payload);
    expect(response.status).toBe(200)
    const validResult = ['Success', 'Username and Password are invalid']
    expect(validResult).toContain(response.body.message)
  })
})