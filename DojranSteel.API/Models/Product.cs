namespace DojranSteel.API.Models

{
    public abstract class Product
    {
        public int Id { get; set; }
        public int SapCode { get; set; }
        public string Description { get; set; }
        public int MaterialGroupNumber { get; set; }
        public string ProductionLine { get; set; }
        public decimal TheoreticalWeight { get; set; }
        public string BaseUnitOfMeasure { get; set; }
    }
}