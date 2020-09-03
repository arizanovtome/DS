export interface MorningEntryProduct {
    id: number;
    date: Date;
    productionLine: string;
    sapCode: number;
    description: string;
    quantityPieces: number;
    quantityTons: number;
    availableTime: number;
    budgetedQunatity: number;
}
