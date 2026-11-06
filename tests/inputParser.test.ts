import { describe, test, expect } from "vitest";
import { parseInstructions, parsePlateauSize, parsePosition, isInstruction, isDirection } from "../src/input/inputParser";

describe("isInstruction", () => {
    test("return true for valid instruction", () => {
        expect(isInstruction("L")).toBe(true);
    });

    test("return false for invalid instruction", () => {
        expect(isInstruction("Z")).toBe(false);
    })
});

describe("isDirection", () => {
    test("return true for valid direction", () => {
        expect(isDirection("N")).toBe(true);
    });
  
    test("return true for valid direction", () => {
        expect(isDirection("Z")).toBe(false);
    });
});

describe("parseInstructions", () => {
    test("convert valid instructions into array", () => {
        expect(parseInstructions("LMR")).toEqual(["L", "M", "R"]);
    });
  
    test("throw error if invalid", () => {
        expect(() => parseInstructions("XYZ")).toThrow();
    });
});

describe("parsePlateauSize", () =>{
    test("convert valid string into PlateauSize", () => {
        expect(parsePlateauSize("5 5")).toEqual({x:5, y:5});
    });
  
    test("throw error if invalid", () => {
        expect(() => parsePlateauSize("banana 5")).toThrow();
    });

    test("throw error if input is not 2 values", () => {
        expect(() => parsePlateauSize("5")).toThrow();
    });    
});

describe("parsePosition", () =>{
    test("convert valid string into Position", () => {
        expect(parsePosition("1 2 N")).toEqual({x:1, y:2, facing:"N"});
    });
  
    test("throw error if direction invalid", () => {
        expect(() => parsePosition("banana 5")).toThrow();
    });

    test("throw error if a coordinate is not a number", () => {
        expect(() => parsePosition("1 X N")).toThrow();
    });    
});