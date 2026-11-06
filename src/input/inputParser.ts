import { INSTRUCTION, DIRECTION, Direction, Instruction, PlateauSize, Position } from "../types";

// check instruction is valid 
export function isInstruction(value: string): value is Instruction {
    return INSTRUCTION.some((v) => v === value);
}

// check direction is valid
export function isDirection(value: string): value is Direction {
    return DIRECTION.some((v) => v === value);
}

// take input string, split the characters and check if each one is valid
export function parseInstructions(rawInstructions: string): Instruction[] {
    let splitInst = rawInstructions.split("");
    let result: Instruction[] = [];

    for (let char of splitInst) {
        if (!isInstruction(char)) {
            throw new Error ('Invalid instruction');
        } else {
            result.push(char)
        }
    }

    return result;
}



// export function parsePlateauSize(rawSize: string): PlateauSize {
// }

// export function parsePosition(rawPosition: string): Position {
// }