using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DvdRental.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DvdRental.Controllers
{

    [Route("api/Logger/[action]")]
    public class LoggerController : Controller
    {
        private readonly ISimpleLogger _simpleLoger;

        public LoggerController(
            ISimpleLogger simpleLogger
            )
        {
            _simpleLoger = simpleLogger;
        }

        [HttpPost]
        public IActionResult Log(string message, string view)
        {
            _simpleLoger.Log(message, view);
            return Ok();
        }
    }
}
