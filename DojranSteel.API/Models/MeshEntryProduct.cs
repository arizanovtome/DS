using System;
namespace DojranSteel.API.Models

{
    public class MeshEntryProduct
    {
        public int Id { get; set; }
        public int SapCode { get; set; }
        public string Description { get; set; }
        public string ProductionLine { get; set; }
        public DateTime Date { get; set; }
        public int QuantityProducedPc { get; set; }
        public float QuantityProducedTn { get; set; }
        public int AvailableTime { get; set; }
        public float BudgetedQuantity { get; set; }
    }
}