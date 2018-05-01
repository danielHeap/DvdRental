using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DvdRental.Models
{
    public class MovieModel
    {
        public int Id { get; set; }
        public string PhotoPath { get; set; }
        public string Name { get; set; }
        public DateTime ReleaseDate { get; set; }
        public string Director { get; set; }
        public string Scenarist { get; set; }
        public List<RoleModel> Cast { get; set; }
    }
}
