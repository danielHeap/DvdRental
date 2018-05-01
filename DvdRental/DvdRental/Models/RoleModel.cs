using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DvdRental.Models
{
    public class RoleModel
    {
        public ActorModel Actor { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
    }
}
