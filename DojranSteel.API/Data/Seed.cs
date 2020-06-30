using System.Collections.Generic;
using DojranSteel.API.Models;
using Newtonsoft.Json;

namespace DojranSteel.API.Data
{
    public class Seed
    {
        private readonly DataContext _context;

        public Seed(DataContext context)
        {
            _context = context;
        }

        public void SeedProducts()
        {
            var productsData = System.IO.File.ReadAllText("Data/ProductsSeedData.json");
            var products = JsonConvert.DeserializeObject<List<MeshProduct>>(productsData);
            foreach (var product in products)
            {
                _context.MeshProduct.Add(product);
            }
            _context.SaveChanges();
        }
        public void SeedMorningProducts()
        {
            var productsData = System.IO.File.ReadAllText("Data/ProductsSeedData.json");
            var products = JsonConvert.DeserializeObject<List<MorningProduct>>(productsData);
            foreach (var product in products)
            {
                _context.MorningProduct.Add(product);
            }
            _context.SaveChanges();
        }

    }
}