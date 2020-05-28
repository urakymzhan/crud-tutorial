
import { calculateSum, mult, getPatientInformation, getMaxDeposit, isNull, isFalsy, addNewPatient, checkAverageDeposit, formatPatientId, getSingleUser, isAnagram, postUser } from '../../utils/utils';

// comment out to see the result
// // - runs before and after each test
// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// // - only runs before and after all tests
// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database Closed...');


// toBe
test('Adding 1 + 1 equals 2', () => {
    expect(calculateSum(1, 1)).toBe(2)
})
test('Multiplying 1 * 1 equals 1', () => {
    expect(mult(1, 1)).toBe(1)
})

// not toBe
test('Adds 2 + 2 to NOT equal 5', () => {
    expect(calculateSum(2, 2)).not.toBe(5);
})

// toBe
test('Should return patient information in a correct format', () => {
    const patientInfo = `Patient information: name: John, lastname: Doe, age: 33, patientid: 1ZN46`;
    expect(getPatientInformation()).toBeDefined();
    expect(getPatientInformation('John', 'Doe', 33, '1ZN46')).toBe(patientInfo);
})

// toBe
test('Get max deposit', () => {
    const cash = [12, 3, 4, 5, 1, 2]
    expect(getMaxDeposit(cash)).toBe(12);
})

// toBeNull
test('Should be null', () => {
    expect(isNull()).toBeNull();
})

// toBeFalsy
test('Should be falsy', () => {
    // or any other falsy value: undefined, false
    expect(isFalsy(null)).toBeFalsy();
})

// toStrictEqual // using toBe for objects will fail
test('Should add new patient', () => {
    expect(addNewPatient('Test', 'Testin')).toStrictEqual({
        firstName: 'Test',
        lastName: 'Testin'
    });
});

// less than greater than
test('Average deposit should be uunder 800', () => {
    const cash = [100, 1200, 400, 300, 120, 200];
    expect(checkAverageDeposit(cash)).toBeLessThan(800);
});

// Regex
test('Patient ID should contain at least one letter Z', () => {
    expect(formatPatientId('N46')).toHaveLength(5);
    expect(formatPatientId('N46')).toMatch(/Z/);
})

test('Patient ID should not contain @ symbol', () => {
    expect(formatPatientId('N46')).not.toMatch(/@/); // i, g
})

// Arrays
test('Admin should be in username', () => {
    let username = ['john', 'karen', 'admin'];
    expect(username).toContain('admin');
})

// Testing async code

// Promise
test('User fetched first name should be Janet', () => {
    // expect.assertions(1);
    return getSingleUser().then(obj => {
        expect(obj.data.first_name).toEqual('Janet');
    })
})

// Async Await
// async and await are effectively syntactic sugar for the same logic as the promises
test('User fetched first name should be Janet', async () => {
    // expect.assertions(1);
    const obj = await getSingleUser()
    expect(obj.data.first_name).toEqual('Janet');
})


// isAnagram
test('isAnagram function exists', () => {
    expect(typeof isAnagram).toEqual('function');
});

test('"cinema" is an anagram of "iceman"', () => {
    expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

test('"Hello" is NOT an anagram of "Aloha"', () => {
    expect(isAnagram('Hello', 'Aloha')).toBeFalsy();
});


// Mock
// Mocking Functions Within a Test File
const add = jest.fn(() => 3);

test('add', () => {
    expect(add(1, 2)).toBe(3);
    expect(add).toHaveBeenCalledTimes(1);
    expect(add).toHaveBeenCalledWith(1, 2);
})


// import axios from 'axios';
// import { user } from '../../utils/Users';
// // Mocking Modules Within a Test File
// jest.mock('axios');

// test('should fetch mock user and first name be equal to Janet', () => {
//     const resp = user.data.first_name;
//     axios.get.mockResolvedValue(user);
//     // or you could use the following depending on your use case:
//     // axios.get.mockImplementation(() => Promise.resolve(resp))
//     //   return Users.all().then(data => expect(data).toEqual(users));
//     // console.log("mock is triggered")
//     return getSingleUser().then(obj => {
//         expect(obj.data.first_name).toEqual(resp);
//     })
// });

// Mocking Functions/Callback Within a Test File
const mockCallback = jest.fn(user => user + " posted");
postUser(['Person1', "Person2"], mockCallback);

test('test postUser callback', () => {
    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2);
    // The first argument of the first call to the function was Person1
    expect(mockCallback.mock.calls[0][0]).toBe('Person1');
    // The return value of the first call to the function was Person1 posted
    expect(mockCallback.mock.results[0].value).toBe("Person1 posted");
})



