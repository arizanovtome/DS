using System;
namespace DojranSteel.API.Models

{
    public class EntryProduct
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string ProductionLine { get; set; }
        public int SapCode { get; set; }
        public string Description { get; set; }
        public int QuantityPieces { get; set; }
        public float QuantityTons { get; set; }
        public int AvailableTime { get; set; }
        public float BudgetedQunatity { get; set; }
    }
}