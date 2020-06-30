namespace DojranSteel.API.Models
{
    public class MeshProduct: Product
    {
        public decimal Width { get; set; }
        public decimal Lenght { get; set; }
        public decimal LineWireDistance { get; set; }
        public decimal CrossWireDistance { get; set; }
        public decimal RawLineWireSize { get; set; }
        public decimal RawCrossWireSize { get; set; }
        public decimal LineWireSize { get; set; }
        public decimal CrossWireSize { get; set; }
        public int PiecesInBundle { get; set; }
        public int NumberOfLineWires { get; set; } 
        public int NumberOfCrossWires { get; set; }
        public decimal WeightOfLineWires { get; set; }
        public decimal WeightOfCrossWires { get; set; }
        public decimal MaxWeldsPerMinute { get; set; }
        public decimal BudgetedEficiency { get; set; }
        public decimal BudgetedWeldsPerMinute { get; set; }
        public decimal BundleWeight { get; set; }
    }
}