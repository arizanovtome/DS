export interface MeshProduct {
    id: number;
    sapCode: number;
    description: string;
    materialGroupNumber: number;
    productionLine: string;
    theoreticalWeight: number;
    baseUnitOfMeasure: string;
    width: number;
    lenght: number;
    lineWireDistance: number;
    crossWireDistance: number;
    rawLineWireSize: number;
    rawCrossWireSize: number;
    lineWireSize: number;
    crossWireSize: number;
    piecesInBundle: number;
    numberOfLineWires: number;
    numberOfCrossWires: number;
    weightOfLineWires: number;
    weightOfCrossWires: number;
    maxWeldsPerMinute: number;
    budgetedEficiency: number;
    budgetedWeldsPerMinute: number;
    bundleWeight: number;
}
