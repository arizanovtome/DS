using System.Collections.Generic;
using System.Threading.Tasks;
using DojranSteel.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DojranSteel.API.Data
{
    public class DojranSteelRepository : IDojranSteelRepository
    {
        private readonly DataContext _context;

        public DojranSteelRepository(DataContext context)
        {
            _context = context;
        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<MeshProduct> GetMeshProduct(int id)
        {
            var MeshProduct = await _context.MeshProduct.FirstOrDefaultAsync(p => p.Id == id);

            return MeshProduct;
        }
            
        public async Task<IEnumerable<MeshProduct>> GetMeshProducts()
        {
            var meshProducts = await _context.MeshProduct.ToListAsync();

            return meshProducts;
        }
        public async Task<IEnumerable<MorningProduct>> GetMorningProducts()
        {
            var morningProducts = await _context.MorningProduct.ToListAsync();

            return morningProducts;
        }

        public async Task<MeshEfectivity> GetMeshEfectivity(int id)
        {
            var MeshEfectivity = await _context.MeshEfectivity.FirstOrDefaultAsync(p => p.Id == id);

            return MeshEfectivity;
        }
            
        public async Task<IEnumerable<MeshEfectivity>> GetMeshEfectivities()
        {
            var meshEfectivities = await _context.MeshEfectivity.ToListAsync();

            return meshEfectivities;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}