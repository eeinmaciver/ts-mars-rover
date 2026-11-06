import { describe, test, expect } from "vitest";
import { parseInstructions, parsePlateauSize, parsePosition, isInstruction } from "../src/input/inputParser";

describe("isInstruction", () =>{
    test("return true for valid input", () => {
        expect(isInstruction("L")).toBe(true);
    });

    test("return false for invalid input", () => {
        expect(isInstruction("Z")).toBe(false);
    })
});