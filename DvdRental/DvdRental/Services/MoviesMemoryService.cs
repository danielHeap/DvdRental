using DvdRental.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DvdRental.Services
{
    public class MoviesMemoryService : IMoviesService
    {
        private List<MovieModel> movies;

        public MoviesMemoryService()
        {
            movies = new List<MovieModel>();

            AddExmapleData();
        }
        private void AddExmapleData()
        {
            var TimRobbins = new ActorModel("Tim", "Robbins");
            var MorganFreeman = new ActorModel("Morgan", "Freeman");

            movies.Add(new MovieModel
            {
                Id = 1,
                PhotoPath = "/images/movie-1.jpg",
                Name = "Skazani na Shawshank",
                Director = "Frank Darabont",
                Scenarist = "Frank Darabont",
                ReleaseDate = new DateTime(1994, 9, 10),
                Cast = new List<RoleModel>
                {
                    { new RoleModel{Actor=TimRobbins ,Name="Andy Dufresne" } },
                    {new RoleModel{Actor=MorganFreeman ,Name="Ellis Boyd \"Red\" Redding"} }
                }
            });
            var fCluzet = new ActorModel("François", "Cluzet");
            var omarSy = new ActorModel("Omar", "Sy");
            movies.Add(new MovieModel
            {
                Id = 2,
                PhotoPath = "/images/movie-2.jpg",
                Name = "Nietykalni",
                Director = "Olivier Nakache,Eric Toledano",
                Scenarist = "Olivier Nakache,Eric Toledano",
                ReleaseDate = new DateTime(2011, 9, 23),
                Cast = new List<RoleModel>
                {
                    {new RoleModel{Actor=fCluzet, Name="Philippe"} },
                    {new RoleModel{Actor=omarSy, Name="Driss"} }
                }
            }
                );
        }

        public MovieModel GetMovie(int id)
        {
            return movies.FirstOrDefault(x => x.Id == id);
        }
        public IEnumerable<MovieModel> GetAllMovies()
        {
            return movies;
        }
    }
}
