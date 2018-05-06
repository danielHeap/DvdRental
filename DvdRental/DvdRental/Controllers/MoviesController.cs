using Microsoft.AspNetCore.Mvc;
using DvdRental.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DvdRental.Controllers
{
    [Route("api/[controller]")]
    public class MoviesController : Controller
    {
        private readonly IMoviesService _movieService;

        public MoviesController(
            IMoviesService moviesService
            )
        {
            _movieService = moviesService;
        }
        [HttpGet("[action]")]
        public IActionResult Get(int? movieId=null)
        {
            if(movieId.HasValue)
            {
                var result = _movieService.GetMovie(movieId.Value);
                return Ok(result);
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpGet("[action]")]
        public IActionResult GetAll()
        {
            var result = _movieService.GetAllMovies();
            return Ok(result);
        }

        [HttpGet("[action]")]
        public IActionResult GetGeneres()
        {
            return Ok(_movieService.GetAllGeneres());
        }
    }
}
