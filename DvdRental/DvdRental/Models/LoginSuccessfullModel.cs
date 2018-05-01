using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DvdRental.Models
{
    public class LoginSuccessfullModel
    {
        public LoginSuccessfullModel()
        {
            Value = null;
        }

        public LoginSuccessfullModel(string value)
        {
            Value = value;
        }

        public string Value { get; set; }
    }
}
