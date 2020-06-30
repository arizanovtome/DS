namespace DojranSteel.API.Models
{
    public class MeshEfectivity
    {
        public int Id { get; set; }
        public string ProductionLine { get; set; }
       public decimal RawCrossWireSize { get; set; }
        public decimal CrossWireSize { get; set; }
        public decimal AverageWeldsMinute { get; set; }
        public decimal WireEfectivity { get; set; }
        public decimal CrossWireDistance { get; set; }
        public decimal SquareEfectivity { get; set; }
    }
}