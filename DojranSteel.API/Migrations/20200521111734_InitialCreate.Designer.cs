﻿// <auto-generated />
using System;
using DojranSteel.API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace DojranSteel.API.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20200521111734_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity("DojranSteel.API.Models.MeshEfectivity", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<decimal>("AverageWeldsMinute");

                    b.Property<decimal>("CrossWireDistance");

                    b.Property<decimal>("CrossWireSize");

                    b.Property<string>("ProductionLine");

                    b.Property<decimal>("RawCrossWireSize");

                    b.Property<decimal>("SquareEfectivity");

                    b.Property<decimal>("WireEfectivity");

                    b.HasKey("Id");

                    b.ToTable("MeshEfectivity");
                });

            modelBuilder.Entity("DojranSteel.API.Models.MeshEntryProduct", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AvailableTime");

                    b.Property<float>("BudgetedQuantity");

                    b.Property<DateTime>("Date");

                    b.Property<string>("Description");

                    b.Property<string>("ProductionLine");

                    b.Property<int>("QuantityProducedPc");

                    b.Property<float>("QuantityProducedTn");

                    b.Property<int>("SapCode");

                    b.HasKey("Id");

                    b.ToTable("MeshEntryProduct");
                });

            modelBuilder.Entity("DojranSteel.API.Models.MeshProduct", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("BaseUnitOfMeasure");

                    b.Property<decimal>("BudgetedEficiency");

                    b.Property<decimal>("BudgetedWeldsPerMinute");

                    b.Property<decimal>("BundleWeight");

                    b.Property<decimal>("CrossWireDistance");

                    b.Property<decimal>("CrossWireSize");

                    b.Property<string>("Description");

                    b.Property<decimal>("Lenght");

                    b.Property<decimal>("LineWireDistance");

                    b.Property<decimal>("LineWireSize");

                    b.Property<int>("MaterialGroupNumber");

                    b.Property<decimal>("MaxWeldsPerMinute");

                    b.Property<int>("NumberOfCrossWires");

                    b.Property<int>("NumberOfLineWires");

                    b.Property<int>("PiecesInBundle");

                    b.Property<string>("ProductionLine");

                    b.Property<decimal>("RawCrossWireSize");

                    b.Property<decimal>("RawLineWireSize");

                    b.Property<int>("SapCode");

                    b.Property<decimal>("TheoreticalWeight");

                    b.Property<decimal>("WeightOfCrossWires");

                    b.Property<decimal>("WeightOfLineWires");

                    b.Property<decimal>("Width");

                    b.HasKey("Id");

                    b.ToTable("MeshProduct");
                });

            modelBuilder.Entity("DojranSteel.API.Models.MorningProduct", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("BaseUnitOfMeasure");

                    b.Property<string>("Description");

                    b.Property<string>("ProductionLine");

                    b.Property<float>("ProductionPerHour");

                    b.Property<int>("SapCode");

                    b.HasKey("Id");

                    b.ToTable("MorningProduct");
                });

            modelBuilder.Entity("DojranSteel.API.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<byte[]>("PasswordHash");

                    b.Property<byte[]>("PasswordSalt");

                    b.Property<string>("Username");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("DojranSteel.API.Models.Value", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Values");
                });
#pragma warning restore 612, 618
        }
    }
}