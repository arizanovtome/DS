namespace DojranSteel.API.Dtos
{
    public class MorningProductForListDto
    {
        public int Id { get; set; }
        public int SapCode { get; set; }
        public string Description { get; set; }
        public string ProductionLine { get; set; }
        public string ProductionPerHour { get; set; }
        public string BaseUnitOfMeasure { get; set; }
    }
}