using Microsoft.EntityFrameworkCore.Migrations;

namespace DojranSteel.API.Migrations
{
    public partial class RenameField : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "AvaiableTime",
                table: "EntryProduct",
                newName: "AvailableTime");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "AvailableTime",
                table: "EntryProduct",
                newName: "AvaiableTime");
        }
    }
}
