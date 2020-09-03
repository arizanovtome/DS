using Microsoft.EntityFrameworkCore.Migrations;

namespace DojranSteel.API.Migrations
{
    public partial class AddedEntryProduct : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EntryProduct",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ProductionLine = table.Column<string>(nullable: true),
                    SapCode = table.Column<int>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    QuantityPieces = table.Column<int>(nullable: false),
                    QuantityTons = table.Column<float>(nullable: false),
                    AvaiableTime = table.Column<int>(nullable: false),
                    BudgetedQunatity = table.Column<float>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EntryProduct", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EntryProduct");
        }
    }
}
