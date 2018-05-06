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
            int i = 1;
            var TimRobbins = new ActorModel("Tim", "Robbins");
            var MorganFreeman = new ActorModel("Morgan", "Freeman");
            var BobGunton = new ActorModel("Bob", "Gunton");

            var fCluzet = new ActorModel("François", "Cluzet");
            var omarSy = new ActorModel("Omar", "Sy");

            ActorModel tomHanks = new ActorModel("Tom", "Hanks");
            ActorModel michaelDuncan = new ActorModel("Michael", "Duncan");

            ActorModel marlonBrando = new ActorModel("Marlon", "Brando");
            ActorModel alPacico = new ActorModel("Al", "Pacino");
            ActorModel martinBalsam = new ActorModel("Martin", "Balsam");
            ActorModel johnFiedler = new ActorModel("John", "Fiedler");

            movies.Add(new MovieModel
            {
                Id = i++,
                PhotoPath = "/images/movie-1.jpg",
                Name = "Skazani na Shawshank",
                Director = "Frank Darabont",
                Scenarist = "Frank Darabont",
                ReleaseDate = new DateTime(1994, 9, 10),
                Genres = new List<string>() { "Dramat" },
                Cast = new List<RoleModel>
                {
                    { new RoleModel{Actor=TimRobbins ,Name="Andy Dufresne" } },
                    {new RoleModel{Actor=MorganFreeman ,Name="Ellis Boyd \"Red\" Redding"} },
                    {new RoleModel{Actor=BobGunton ,Name="Naczelnik Samuel Norton"} }
                }
            });
            movies.Add(new MovieModel
            {
                Id = i++,
                PhotoPath = "/images/movie-2.jpg",
                Name = "Nietykalni",
                Director = "Olivier Nakache,Eric Toledano",
                Scenarist = "Olivier Nakache,Eric Toledano",
                ReleaseDate = new DateTime(2011, 9, 23),
                Genres = new List<string>() { "Dramat", "Biograficzny", "Komedia" },
                Cast = new List<RoleModel>
                {
                    {new RoleModel{Actor=fCluzet, Name="Philippe"} },
                    {new RoleModel{Actor=omarSy, Name="Driss"} }
                }
            }
                );
            movies.Add(new MovieModel
            {
                Id = i++,
                PhotoPath = "/images/movie-3.jpg",
                Name = "Zielona mila",
                Director = "Frank Darabont",
                Scenarist = "Frank Darabont",
                ReleaseDate = new DateTime(1999, 12, 6),
                Genres = new List<string>() { "Dramat" },
                Cast = new List<RoleModel>
                {
                    {new RoleModel{Actor=tomHanks, Name="Paul Edgecomb"} },
                    {new RoleModel{Actor=michaelDuncan, Name="John Coffey"} }
                }
            }
                );
            movies.Add(new MovieModel
            {
                Id = i++,
                PhotoPath = "/images/movie-4.jpg",
                Name = "Ojciec Chrzestny",
                Director = "Francis Ford Coppola",
                Scenarist = "Mario PuzoFrancis, Ford Coppola",
                ReleaseDate = new DateTime(1972, 3, 15),
                Genres = new List<string>() { "Dramat", "Gangsterski" },
                Cast = new List<RoleModel>
                {
                    {new RoleModel{Actor=marlonBrando, Name="Don Vito Corleone"} },
                    {new RoleModel{Actor=alPacico, Name="Michael Corleone"} }
                }
            }
                );
            movies.Add(new MovieModel
            {
                Id = i++,
                PhotoPath = "/images/movie-5.jpg",
                Name = "Dwunastu gniewnych ludzi",
                Director = "Sidney Lumet",
                Scenarist = "Reginald Rose",
                ReleaseDate = new DateTime(1957, 4, 10),
                Genres = new List<string>() { "Dramat sądowy" },
                Cast = new List<RoleModel>
                {
                    {new RoleModel{Actor=martinBalsam, Name="Przysięgły nr 1 "} },
                    {new RoleModel{Actor=johnFiedler, Name="Przysięgły nr 2 "} }
                }
            }
                );
            ActorModel robinWright = new ActorModel("Robin", "Wright");
            movies.Add(new MovieModel
            {
                Id = i++,
                PhotoPath = "/images/movie-6.jpg",
                Name = "Forrest Gump ",
                Director = "Robert Zemeckis",
                Scenarist = "Eric Roth",
                ReleaseDate = new DateTime(1994, 6, 23),
                Genres = new List<string>() { "Dramat", "Komedia" },
                Cast = new List<RoleModel>
                {
                    {new RoleModel{Actor=tomHanks, Name="Forrest Gump"} },
                    {new RoleModel{Actor=robinWright, Name="Jenny Curran"} }
                }
            }
                );
            ActorModel jackNicholson = new ActorModel("Jack", "Nicholson");
            ActorModel louiseFlechter = new ActorModel("Louise", "Flechter");
            movies.Add(new MovieModel
            {
                Id = i++,
                PhotoPath = "/images/movie-7.jpg",
                Name = "Lot nad kukułczym gniazdem ",
                Director = "Miloš Forman",
                Scenarist = "Bo GoldmanLawrence Hauben",
                ReleaseDate = new DateTime(1975, 11, 19),
                Genres = new List<string>() { "Dramat", "Psychologiczny" },
                Cast = new List<RoleModel>
                {
                    {new RoleModel{Actor=jackNicholson, Name="Randle Patrick McMurphy"} },
                    {new RoleModel{Actor=louiseFlechter, Name="Siostra Mildred Ratched"} }
                }
            }
                );
            ActorModel robertDuvall = new ActorModel("Tom", "Hagen");
            movies.Add(new MovieModel
            {
                Id = i++,
                PhotoPath = "/images/movie-8.jpg",
                Name = "Ojciec chrzestny II",
                Director = "Francis Ford Coppola",
                Scenarist = "Mario PuzoFrancis Ford Coppola",
                ReleaseDate = new DateTime(1974, 12, 12),
                Genres = new List<string>() { "Dramat", "Psychologiczny" },
                Cast = new List<RoleModel>
                {
                    {new RoleModel{Actor=alPacico, Name="Michael Corleone"} },
                    {new RoleModel{Actor=robertDuvall, Name="Tom Hagen"} }
                }
            }
                );
            ActorModel elijahWood = new ActorModel("Elijah", "Wood");
            ActorModel seanAstin = new ActorModel("Sean", "Astin");
            movies.Add(new MovieModel
            {
                Id = i++,
                PhotoPath = "/images/movie-9.jpg",
                Name = "Władca Pierścieni: Powrót króla",
                Director = "Peter Jackson",
                Scenarist = "Fran Walsh, Peter Jackson",
                ReleaseDate = new DateTime(2013, 12, 1),
                Genres = new List<string>() { "Fantasy", "Przygodowy" },
                Cast = new List<RoleModel>
                {
                    {new RoleModel{Actor=elijahWood, Name="Frodo Baggins"} },
                    {new RoleModel{Actor=seanAstin, Name="Sam Gamgee"} }
                }
            }
                );
            ActorModel liamNeeson = new ActorModel("Liam", "Neeson");
            ActorModel benKingsley = new ActorModel("Ben", "Kingsley");
            movies.Add(new MovieModel
            {
                Id = i++,
                PhotoPath = "/images/movie-10.jpg",
                Name = "Lista Schindlera",
                Director = "Steven Spielberg",
                Scenarist = "	Steven Zaillian",
                ReleaseDate = new DateTime(1993, 11, 30),
                Genres = new List<string>() { "Fantasy", "Przygodowy" },
                Cast = new List<RoleModel>
                {
                    {new RoleModel{Actor=liamNeeson, Name="Oskar Schindler"} },
                    {new RoleModel{Actor=benKingsley, Name="Itzhak Stern"} }
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
