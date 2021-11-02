'use strict';

// Testing Requirements

// Assert the following

//     404 on a bad route
//     404 on a bad method
//     The correct status codes and returned data for each REST route
//         Create a record using POST
//         Read a list of records using GET
//         Read a record using GET
//         Update a record using PUT
//         Destroy a record using DELETE

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('The web server', () => {
  // Throw 404 on a bad route
  it('gives a 404 on a bad route', async () => {
    const response = await mockRequest.put('/tacos');
    expect(response.status).toBe(404);
  });
  // Thrown 404 on a bad route
  it('gives a 404 on a bad CRUD method', async () => {
    const response = await mockRequest.put('/person');
    expect(response.status).toBe(404);
  });
});

describe('The taco routes', () => {
  // Create a record using POST
  it('correctly posts a new taco', async () => {
    const postObject = { 'name': 'Hard Shell (Supreme)', 'type': 'Regular Taco' };
    const response = await mockRequest.post('/tacos').send(postObject);
    expect(response.body).toStrictEqual({ 'id': 1, 'name': 'Hard Shell (Supreme)', 'type': 'Regular Taco' });
  });
  // Read a list of records using GET
  it('returns all taco records', async () => {
    const response = await mockRequest.get('/tacos');
    expect(response.body).toStrictEqual([{ 'id': 1, 'name': 'Hard Shell (Supreme)', 'type': 'Regular Taco' }]);
  });
  // Read a record using GET
  it('returns a specific taco by id', async () => {
    const response = await mockRequest.get('/tacos/1');
    expect(response.body).toStrictEqual({ 'id': 1, 'name': 'Hard Shell (Supreme)', 'type': 'Regular Taco' });
  });
  // Update a record using PUT
  it('correctly updates a new taco', async () => {
    const putObject = { 'name': 'Soft Shell (Yellow Corn)', 'type': 'Regular Taco' };
    const response = await mockRequest.put('/tacos/1').send(putObject);
    expect(response.body).toStrictEqual({ 'id': 1, 'name': 'Soft Shell (Yellow Corn)', 'type': 'Regular Taco' });
  });
  // Destroy a record using DELETE
  it('correctly deletes a taco', async () => {
    const response = await mockRequest.delete('/tacos/1');
    expect(response.status).toBe(200);
  });
});

describe('The drinks routes', () => {
  // Create a record using POST
  it('correctly posts a new drink', async () => {
    const postObject = { 'name': 'Cafe Bien Hoa Tan', 'type': 'Hot Instant Coffee', 'size': '150ml' };
    const response = await mockRequest.post('/drinks').send(postObject);
    expect(response.body).toStrictEqual({ 'id': 1, 'name': 'Cafe Bien Hoa Tan', 'type': 'Hot Instant Coffee', 'size': '150ml' });
  });
  // Read a list of records using GET
  it('returns all drink records', async () => {
    const response = await mockRequest.get('/drinks');
    expect(response.body).toStrictEqual([{ 'id': 1, 'name': 'Cafe Bien Hoa Tan', 'type': 'Hot Instant Coffee', 'size': '150ml' }]);
  });
  // Read a record using GET
  it('returns a specific drink by id', async () => {
    const response = await mockRequest.get('/drinks/1');
    expect(response.body).toStrictEqual({ 'id': 1, 'name': 'Cafe Bien Hoa Tan', 'type': 'Hot Instant Coffee', 'size': '150ml' });
  });
  // Update a record using PUT
  it('correctly updates a new drink', async () => {
    const putObject = { 'name': 'Vinacafé 3-in-1', 'type': 'Hot Instant Coffee', 'size': '20g' };
    const response = await mockRequest.put('/drinks/1').send(putObject);
    expect(response.body).toStrictEqual({ 'id': 1, 'name': 'Vinacafé 3-in-1', 'type': 'Hot Instant Coffee', 'size': '20g' });
  });
  // Destroy a record using DELETE
  it('correctly deletes a drink', async () => {
    const response = await mockRequest.delete('/drinks/1');
    expect(response.status).toBe(200);
  });
});