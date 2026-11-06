import { INSTRUCTION, Instruction, PlateauSize, Position } from "../types";

export function isInstruction(value: string): value is Instruction {
    return INSTRUCTION.some((v) => v === value);
}

// export function parseInstructions(rawInstructions: string): Instruction[] {

// }

// export function parsePlateauSize(rawSize: string): PlateauSize[] {
    
// }

// export function parsePosition(rawPosition: string): Position[] {
    
// }