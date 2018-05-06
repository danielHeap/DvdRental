using DvdRental.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DvdRental.Services
{
    public interface IMoviesService
    {
        MovieModel GetMovie(int id);
        IEnumerable<MovieModel> GetAllMovies();
        List<string> GetAllGeneres();
    }
}
