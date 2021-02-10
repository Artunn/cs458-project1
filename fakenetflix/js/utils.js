"use strict";

console.log("Hello To Test")

// let re = new RegExp('\S+@\S+\.\S+');
const mailRegex = /\S+@\S+\.\S+/;

function validateMailString( email) {
    return mailRegex.test(email);
}