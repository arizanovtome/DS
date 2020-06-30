using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using DojranSteel.API.Data;
using System.Threading.Tasks;
using DojranSteel.API.Dtos;
using AutoMapper;
using System;
using DojranSteel.API.Models;

namespace DojranSteel.API.Controllers
{
    [Authorize]
    [Route("api/")]
    [ApiController]
    public class MorningProductController : ControllerBase
    {
        private readonly IDojranSteelRepository _repo;
        private readonly IMapper _mapper;

        public MorningProductController(IDojranSteelRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        [HttpGet("morningproduct")]
        public async Task<IActionResult> GetMorningProducts()
        {
            var morningProducts = await _repo.GetMorningProducts();

            var morningProductsToReturn = _mapper.Map<IEnumerable<MorningProductForListDto>>(morningProducts);

            return Ok(morningProductsToReturn);
        }

        // [HttpGet("meshproduct/{id}")]
        // public async Task<IActionResult> GetMeshProduct(int id)
        // {
        //     var meshProduct = await _repo.GetMeshProduct(id);
          
        //    var meshProductToReturn = _mapper.Map<MeshProductForListDto>(meshProduct);

        //     return Ok(meshProductToReturn);
        // }

        // [HttpPut("meshproductedit/{id}")]
        // public async Task<IActionResult> UpdateMeshProduct(int id, MeshProductForEditDto meshProductForUpdateDto)
        // {
        //     var meshProductFromRepo = await _repo.GetMeshProduct(id);

        //     _mapper.Map(meshProductForUpdateDto, meshProductFromRepo);

        //     if (await _repo.SaveAll())
        //         return NoContent();
            
        //     throw new Exception($"Updating mesh product {id} failed on save");
        // }

        // [HttpPut("meshproductadd")]
        // public async Task<IActionResult> AddMeshProduct(MeshProduct meshProduct)
        // {
        //     var meshProductForAdd = _mapper.Map<MeshProductForAddDto>(meshProduct);

        //     _repo.Add(meshProduct);

        //     if (await _repo.SaveAll())
        //         return NoContent();
            
        //     throw new Exception($"Add mesh product {meshProductForAdd.Id} failed on save");
        // }

    }
}