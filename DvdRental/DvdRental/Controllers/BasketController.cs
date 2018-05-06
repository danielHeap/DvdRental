using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DvdRental.Models;
using DvdRental.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DvdRental.Controllers
{
    [Produces("application/json")]
    [Route("api/Basket/[action]")]
    public class BasketController : Controller
    {
        private static BasketModel _basket = new BasketModel();
        private static bool firstRun = true;
        private readonly IMoviesService _moviesService;

        public BasketController(
            IMoviesService moviesService
            )
        {
            _moviesService = moviesService;
            if (firstRun)
            {
                _basket.Add(_moviesService.GetMovie(1));
                _basket.Add(_moviesService.GetMovie(4));
                firstRun = false;
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetBasket()
        {
            var result = _basket.GetAll();
            if (result is null)
                return BadRequest();
            else
                return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> AddMovie(int movieId)
        {

            var movie = _moviesService.GetMovie(movieId);
            if (movie != null)
            {
                var size = _basket.Add(movie);
                return Ok(size);
            }
            else
                return BadRequest();
        }
        [HttpPost]
        public async Task<IActionResult> RemoveMovie(int movieId)
        {

            var movie = _moviesService.GetMovie(movieId);
            if (movie != null)
            {
                var size = _basket.Remove(movie);
                return Ok(size);
            }
            else
                return BadRequest();
        }
    }
}