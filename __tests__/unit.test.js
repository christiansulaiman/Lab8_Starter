// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

/** 
 * 
 * SECTION FOR TESTING PHONE NUMBERS
 * FIRST 2 ARE GOOD, LAST 2 ARE BAD
 * 
 * **/
test('regular phone number', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
})

test('regular phone number with brackets in area code section', () => {
    expect(functions.isPhoneNumber('(123)-456-7890')).toBe(true);
})

test('garbage phone number with not enough digits', () => {
    expect(functions.isPhoneNumber('123-45')).toBe(false);
})

test('no phone number entered', () => {
    expect(functions.isPhoneNumber('')).toBe(false);
})

/** 
 * 
 * SECTION FOR TESTING EMAILS
 * FIRST 2 ARE GOOD, LAST 2 ARE BAD
 * 
 * **/
test('good personal email', () => {
    expect(functions.isEmail('good@gmail.com')).toBe(true);
})

test('good business email', () => {
    expect(functions.isEmail('good@valvesoftware.com')).toBe(true);
})

test('no @', () => {
    expect(functions.isEmail('badgmail.com')).toBe(false);
})

test('no .', () => {
    expect(functions.isEmail('bad@gmailcom')).toBe(false);
})

/** 
 * 
 * SECTION FOR TESTING PASSWORDS
 * FIRST 2 ARE GOOD, LAST 2 ARE BAD
 * 
 * **/
test('Strong Password', () => {
    expect(functions.isStrongPassword('xd123')).toBe(true);
})

test('Super Strong Password', () => {
    expect(functions.isStrongPassword('I_am_12_X')).toBe(true);
})

test('Too many characters', () => {
    expect(functions.isStrongPassword('ThisISway2l0ng!!!!!1t5notg00d')).toBe(false);
})

test('Too little characters', () => {
    expect(functions.isStrongPassword('x')).toBe(false);
})

/** 
 * 
 * SECTION FOR TESTING DATES
 * FIRST 2 ARE GOOD, LAST 2 ARE BAD
 * 
 * **/
test('MM/DD/YYYY', () => {
    expect(functions.isDate('03/22/2023')).toBe(true);
})

test('DD/MM/YYYY', () => {
    expect(functions.isDate('18/06/2023')).toBe(true);
})

test('Extra month digit', () => {
    expect(functions.isDate('111/19/2022')).toBe(false);
})

test('Missing 2 year digits', () => {
    expect(functions.isDate('12/09/23')).toBe(false);
})

/** 
 * 
 * SECTION FOR TESTING HEX NUMBERS
 * FIRST 2 ARE GOOD, LAST 2 ARE BAD
 * 
 * **/
test('White color', () => {
    expect(functions.isHexColor('#FFF')).toBe(true);
})

test('Orange color', () => {
    expect(functions.isHexColor('#FFA500')).toBe(true);
})

test('Less than 3 characters', () => {
    expect(functions.isHexColor('#F2')).toBe(false);
})

test('More than 6 characters', () => {
    expect(functions.isHexColor('#002359F')).toBe(false);
})