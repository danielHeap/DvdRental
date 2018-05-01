using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DvdRental.Models
{
    public class ActorModel
    {
        public ActorModel(string firstName, string lastName)
        {
            FirstName = firstName;
            LastName = lastName;
        }

        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
