import isValidPassword from "../passwordValidation";

describe("VALIDATION_BASIC", () => {
  test("happy case", () => {
    expect(isValidPassword("K71Hnw81aE")).toBe(true);
  });

  test(`a password that is too long/short is invalid`, () => {
    expect(isValidPassword("124435235423523542345567")).toBe(false);
    expect(isValidPassword("J8hWf1A")).toBe(false);
  });

  test(`a password that only has numbers is invalid`, () => {
    expect(isValidPassword("1964827351")).toBe(false);
    expect(isValidPassword("1058248630")).toBe(true);
  });

  test(`a password that only has characters is invalid`, () => {
    expect(isValidPassword("kamrhGDhAU")).toBe(false);
    expect(isValidPassword("HBroHTFjhY")).toBe(true);
  });

  test(`a password with funny characters is invalid`, () => {
    expect(isValidPassword("12ab3@KLMD")).toBe(false);
    expect(isValidPassword("1/ab3@K#MD")).toBe(false);
  });

  test(`a password with only lower/upper case characters is invalid`, () => {
    expect(isValidPassword("aj4hw29r73")).toBe(false);
    expect(isValidPassword("KME63J02JT")).toBe(false);
  });

  test(`a forbidden password is invalid`, () => {
    expect(isValidPassword("amG84h6yeQ")).toBe(false);
    expect(isValidPassword("mc9Q20pdjH")).toBe(false);
    expect(isValidPassword("jnT6Q2f8U5")).toBe(false);
  });
});

describe("VALIDATION_SEQUENCES", () => {
  test(`a password with a directly ascending/descending sequence of numbers is invalid`, () => {
    expect(isValidPassword("a12345678H")).toBe(false);
    expect(isValidPassword("a21345678H")).toBe(true);
    expect(isValidPassword("A1f3gH7654")).toBe(false);
  });
});

describe("VALIDATION_VARIANCE", () => {
  test(`a password that has less that 4 different digits/characters is invalid`, () => {
    expect(isValidPassword("amG8Ag8mAs")).toBe(false);
    expect(isValidPassword("72jsJ27S2Q")).toBe(false);
    expect(isValidPassword("75hS857HsQ")).toBe(true);
  });
});
