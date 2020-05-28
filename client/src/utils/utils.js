import axios from 'axios';

const calculateSum = (a, b) => a + b;

const mult = (a, b) => a * b;

const getPatientInformation = (name, lastName, age, patientID) => {
    return `Patient information: name: ${name}, lastname: ${lastName}, age: ${age}, patientid: ${patientID}`
}

const formatPatientId = (patientID) => {
    //assume you are getting ids from another company
    // but you want to format them differently
    return '1Z' + patientID;
}

const getMaxDeposit = (cash = []) => {
    let max = 0;
    cash.forEach(value => {
        if (value > max) {
            max = value;
        }
    })
    return max;
}

const isNull = () => null;

const isFalsy = x => x;

const addNewPatient = (firstName, lastName) => {
    const user = { firstName, lastName }
    return user;
};

const checkAverageDeposit = (cash = []) => {
    const sum = cash.reduce((acc, cur) => {
        return acc + cur;
    }, 0)
    return sum / cash.length;
}

// fetch
const getSingleUser = () => {
    const url = "https://reqres.in/api/users/2";
    return fetch(url)
        .then(res => res.json())
        .catch(err => 'reqres api error')
}

// axios version
// const getSingleUser = () => {
//     const url = "https://reqres.in/api/users/2";
//     return axios
//         .get(url)
//         .then(res => res.data)
//         .catch(err => 'error from api')
// }


// Integration example
const isAnagram = (str1, str2) => {
    return formatStr(str1) === formatStr(str2);
}

// Helper function
function formatStr(str) {
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}


// MOCK example
const postUser = (users, callback) => {
    for (let i = 0; i < users.length; i++) {
      callback(users[i]);
    }
  }


module.exports = { calculateSum, mult, getPatientInformation, getMaxDeposit, isNull, isFalsy, addNewPatient, checkAverageDeposit, formatPatientId, getSingleUser, isAnagram, postUser };


