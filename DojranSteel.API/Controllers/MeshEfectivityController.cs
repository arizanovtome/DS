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
    public class MeshEfectivityController : ControllerBase
    {
        private readonly IDojranSteelRepository _repo;
        private readonly IMapper _mapper;

        public MeshEfectivityController(IDojranSteelRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        [HttpGet("meshEfectivity")]
        public async Task<IActionResult> GetMeshEfectivities()
        {
            var meshEfectivities = await _repo.GetMeshEfectivities();

            var meshEfectivitiesToReturn = _mapper.Map<IEnumerable<MeshEfectivityDto>>(meshEfectivities);

            return Ok(meshEfectivitiesToReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetMeshEfectivity(int id)
        {
            var meshEfectivity = await _repo.GetMeshEfectivity(id);
          
           var meshEfectivityToReturn = _mapper.Map<MeshEfectivityDto>(meshEfectivity);

            return Ok(meshEfectivityToReturn);
        }

        // [HttpPut("meshproductedit/{id}")]
        // public async Task<IActionResult> UpdateMeshProduct(int id, MeshProductForEditDto meshProductForUpdateDto)
        // {
        //     var meshProductFromRepo = await _repo.GetMeshProduct(id);

        //     _mapper.Map(meshProductForUpdateDto, meshProductFromRepo);

        //     if (await _repo.SaveAll())
        //         return NoContent();
            
        //     throw new Exception($"Updating mesh product {id} failed on save");
        // }

        [HttpPut("add")]
        public async Task<IActionResult> AddMeshEfectivity(MeshEfectivity meshEfectivity)
        {
            var meshEfectivityForAdd = _mapper.Map<MeshEfectivityDto>(meshEfectivity);

            _repo.Add(meshEfectivity);

            if (await _repo.SaveAll())
                return NoContent();
            
            throw new Exception($"Add mesh product {meshEfectivityForAdd.Id} failed on save");
        }

    }
}