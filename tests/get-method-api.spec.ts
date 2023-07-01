import { test, expect, APIRequestContext, request } from '@playwright/test';
test('Verify get method data from response api and status code', async () => {
    const newRequest: APIRequestContext = await request.newContext();
    const apiResponse = await newRequest.get('https://reqres.in/api/users?page=2'
    );
    const response = await apiResponse.json();
    console.log(response.data[0]);
    expect(apiResponse.status()).toBe(200);
    expect(response.data[0].id).toBe(7)
    expect(response.data[0].email).toBe('michael.lawson@reqres.in');
    expect(response.data[0].first_name).toBe('Michael');
    expect(response.data[0].last_name).toBe('Lawson');
    expect(response.data[0].avatar).toBe('https://reqres.in/img/faces/7-image.jpg');
})
test('Verify post method data from response api and status code', async () => {
    const newRequest: APIRequestContext = await request.newContext();
    const apiResponse = await newRequest.post('https://reqres.in/api/users',
        {
            data:
            {
                "name": "morpheus",
                "job": "leader"
            }
        }
    );
    const response = await apiResponse.json();
    console.log(response);
    expect(apiResponse.status()).toBe(201);
    expect(response.name).toBe('morpheus');
    expect(response.job).toBe('leader');
    expect(response.id).toBeTruthy();
    const regexPattern: RegExp = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
    expect(response.createdAt).toMatch(regexPattern);

})