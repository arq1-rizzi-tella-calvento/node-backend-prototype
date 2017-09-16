import request from 'supertest';
import app from '../../app/app';
import subjectsList from '../../app/models/subjects'

describe('Routes for interacting with subjects', () => {
  test('Obtains all the subjects', async () => {
    const response = await  request(app).get('/subjects');
    const subjects = response.body;
    expect(subjects).toEqual(subjectsList);
  })
});