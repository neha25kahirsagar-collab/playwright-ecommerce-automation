const { test, expect } = require('@playwright/test');

const host = ['jsonplaceholder', 'typicode', 'com'].join('.');
const API_URL = `https://${host}`;

test.describe('REST API Automation Suite', () => {

  test('GET - Verify fetching user details returns 200', async ({ request }) => {
    const response = await request.get(`${API_URL}/users/1`);
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.id).toBe(1);
    expect(body).toHaveProperty('email');
  });

  test('POST - Verify creating a new order returns 201', async ({ request }) => {
    const response = await request.post(`${API_URL}/posts`, {
      data: {
        title: 'QA Automation Order',
        body: 'Automated order test via Playwright',
        userId: 101,
      },
    });

    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body.title).toBe('QA Automation Order');
  });

});
