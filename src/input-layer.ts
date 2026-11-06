const INSTRUCTIONS = ["L", "R", "M"] as const;
type Instructions = (typeof INSTRUCTIONS)[number];

const DIRECTIONS = ["N", "E", "S", "W"] as const;
type Directions = (typeof DIRECTIONS)[number];
