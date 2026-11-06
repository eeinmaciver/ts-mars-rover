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

export function parsePlateauSize(rawSize: string): PlateauSize {
    let splitSize = rawSize.split(" ");
    let numList: number[] = []

    if (splitSize.length !== 2) {
        throw new Error('Invalid plateau size');
    }

    for (let num of splitSize) {
        const n = Number(num);
        if (!Number.isInteger(n) || n < 0) {
            throw new Error ('Invalid size input');
        } else {
            numList.push(n)
        }
    }
    return {x: numList[0] ,y: numList[1]};
}

export function parsePosition(rawPosition: string): Position {
    let splitPosition = rawPosition.split(" ");
    const [rawX, rawY, rawFacing] = splitPosition;
    let positionList: number[] = [];

    if (splitPosition.length !== 3) {
        throw new Error('Invalid position');
    }

    for (let num of splitPosition.slice(0, 2)) {
        const n = Number(num);
        if (!Number.isInteger(n) || n < 0) {
            throw new Error ('Invalid position');
        } else {
            positionList.push(n);
        }
    }

    if (!isDirection(rawFacing)) {
        throw new Error ('Invalid direction');
    }

    return {x: positionList[0], y: positionList[1], facing: rawFacing}
}