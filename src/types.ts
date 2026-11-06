export const INSTRUCTION = ["L", "R", "M"] as const;
export type Instruction = (typeof INSTRUCTION)[number];

export const DIRECTION = ["N", "E", "S", "W"] as const;
export type Direction = (typeof DIRECTION)[number];

export interface Position {
    readonly x: number;
    readonly y: number;
    readonly facing: Direction;
}

export interface PlateauSize {
    readonly x: number;
    readonly y: number;
}