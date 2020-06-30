using AutoMapper;
using DojranSteel.API.Models;
using DojranSteel.API.Dtos;

namespace DojranSteel.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
       public AutoMapperProfiles()
       {
           CreateMap<MeshProduct, MeshProductForListDto>();
           CreateMap<MeshProductForEditDto, MeshProduct>();
           CreateMap<MorningProduct, MorningProductForListDto>();
       } 
    }
}