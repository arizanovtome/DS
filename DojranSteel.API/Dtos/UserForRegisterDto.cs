using System.ComponentModel.DataAnnotations;

namespace DojranSteel.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength (8, MinimumLength = 4, ErrorMessage = "Choose password between 4 and 8 char")]
        public string Password { get; set; }
    }
}