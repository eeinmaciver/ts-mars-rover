import { INSTRUCTION, DIRECTION, Direction, Instruction, PlateauSize, Position } from "../types";

export function isInstruction(value: string): value is Instruction {
    return INSTRUCTION.some((v) => v === value);
}

export function isDirection(value: string): value is Direction {
    return DIRECTION.some((v) => v === value);
}

export function parseInstructions(rawInstructions: string): Instruction[] {

}

export function parsePlateauSize(rawSize: string): PlateauSize {
    
}

export function parsePosition(rawPosition: string): Position {
    
}