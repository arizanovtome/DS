using Microsoft.EntityFrameworkCore;
using DojranSteel.API.Models;

namespace DojranSteel.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) {}
        public DbSet<Value> Values { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<MeshProduct> MeshProduct { get; set; }
        public DbSet<MeshEfectivity> MeshEfectivity { get; set; }
        public DbSet<MorningProduct> MorningProduct { get; set; }
        public DbSet<MeshEntryProduct> MeshEntryProduct { get; set; }
    }
}