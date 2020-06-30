using System.Collections.Generic;
using System.Threading.Tasks;
using DojranSteel.API.Models;

namespace DojranSteel.API.Data
{
    public interface IDojranSteelRepository
    {
         void Add<T> (T entity) where T: class;
         void Delete<T> (T entity) where T: class;
         Task<bool> SaveAll();
         Task<IEnumerable<MeshProduct>> GetMeshProducts();
         Task<IEnumerable<MorningProduct>> GetMorningProducts();
         Task<MeshProduct> GetMeshProduct(int id);
        Task<IEnumerable<MeshEfectivity>> GetMeshEfectivities();
         Task<MeshEfectivity> GetMeshEfectivity(int id);
    }
}