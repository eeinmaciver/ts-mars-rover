import { describe, test, expect } from "vitest";
import { parseInstructions, isInstruction, isDirection } from "../src/input/inputParser";

// test isInstruction with true and false values
describe("isInstruction", () =>{
    test("return true for valid instruction", () => {
        expect(isInstruction("L")).toBe(true);
    });

    test("return false for invalid instruction", () => {
        expect(isInstruction("Z")).toBe(false);
    })
});

// test isDirection with true and false values
describe("isDirection", () =>{
    test("return true for valid direction", () => {
        expect(isDirection("N")).toBe(true);
    });
  
    test("return true for valid direction", () => {
        expect(isDirection("Z")).toBe(false);
    });
});

// test parseInstructions with valid array and throw error if invalid
describe("parseInstructions", () =>{
    test("convert valid instructions into array", () => {
        expect(parseInstructions("LMR")).toEqual(["L", "M", "R"]);
    });
  
    test("throw error if invalid", () => {
        expect(() => parseInstructions("XYZ")).toThrow();
    });
});