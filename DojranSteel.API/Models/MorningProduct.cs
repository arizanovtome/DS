namespace DojranSteel.API.Models

{
    public class MorningProduct
    {
        public int Id { get; set; }
        public int SapCode { get; set; }
        public string Description { get; set; }
        public string ProductionLine { get; set; }
        public float ProductionPerHour { get; set; }
        public string BaseUnitOfMeasure { get; set; }
    }
}