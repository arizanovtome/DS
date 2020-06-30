using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DojranSteel.API.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "MeshEfectivity",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ProductionLine = table.Column<string>(nullable: true),
                    RawCrossWireSize = table.Column<decimal>(nullable: false),
                    CrossWireSize = table.Column<decimal>(nullable: false),
                    AverageWeldsMinute = table.Column<decimal>(nullable: false),
                    WireEfectivity = table.Column<decimal>(nullable: false),
                    CrossWireDistance = table.Column<decimal>(nullable: false),
                    SquareEfectivity = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MeshEfectivity", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MeshEntryProduct",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    SapCode = table.Column<int>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    ProductionLine = table.Column<string>(nullable: true),
                    Date = table.Column<DateTime>(nullable: false),
                    QuantityProducedPc = table.Column<int>(nullable: false),
                    QuantityProducedTn = table.Column<float>(nullable: false),
                    AvailableTime = table.Column<int>(nullable: false),
                    BudgetedQuantity = table.Column<float>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MeshEntryProduct", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MeshProduct",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    SapCode = table.Column<int>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    MaterialGroupNumber = table.Column<int>(nullable: false),
                    ProductionLine = table.Column<string>(nullable: true),
                    TheoreticalWeight = table.Column<decimal>(nullable: false),
                    BaseUnitOfMeasure = table.Column<string>(nullable: true),
                    Width = table.Column<decimal>(nullable: false),
                    Lenght = table.Column<decimal>(nullable: false),
                    LineWireDistance = table.Column<decimal>(nullable: false),
                    CrossWireDistance = table.Column<decimal>(nullable: false),
                    RawLineWireSize = table.Column<decimal>(nullable: false),
                    RawCrossWireSize = table.Column<decimal>(nullable: false),
                    LineWireSize = table.Column<decimal>(nullable: false),
                    CrossWireSize = table.Column<decimal>(nullable: false),
                    PiecesInBundle = table.Column<int>(nullable: false),
                    NumberOfLineWires = table.Column<int>(nullable: false),
                    NumberOfCrossWires = table.Column<int>(nullable: false),
                    WeightOfLineWires = table.Column<decimal>(nullable: false),
                    WeightOfCrossWires = table.Column<decimal>(nullable: false),
                    MaxWeldsPerMinute = table.Column<decimal>(nullable: false),
                    BudgetedEficiency = table.Column<decimal>(nullable: false),
                    BudgetedWeldsPerMinute = table.Column<decimal>(nullable: false),
                    BundleWeight = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MeshProduct", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MorningProduct",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    SapCode = table.Column<int>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    ProductionLine = table.Column<string>(nullable: true),
                    ProductionPerHour = table.Column<float>(nullable: false),
                    BaseUnitOfMeasure = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MorningProduct", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Username = table.Column<string>(nullable: true),
                    PasswordHash = table.Column<byte[]>(nullable: true),
                    PasswordSalt = table.Column<byte[]>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Values",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Values", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MeshEfectivity");

            migrationBuilder.DropTable(
                name: "MeshEntryProduct");

            migrationBuilder.DropTable(
                name: "MeshProduct");

            migrationBuilder.DropTable(
                name: "MorningProduct");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Values");
        }
    }
}
