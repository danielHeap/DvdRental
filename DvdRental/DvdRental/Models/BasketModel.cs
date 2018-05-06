using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DvdRental.Models
{
    public class BasketModel
    {
        private List<MovieModel> basket;

        public BasketModel()
        {
            basket = new List<MovieModel>();
        }

        public int Add(MovieModel movie)
        {
            basket.Add(movie);
            return basket.Count;
        }
        public int Remove(MovieModel movie)
        {
            basket.Remove(movie);
            return basket.Count;
        }

        public List<MovieModel> GetAll()
        {
            return basket.Distinct().ToList();
        }

        public bool IsIn(MovieModel movie)
        {
            try
            {
                if (basket.Any(x => x.Id == movie.Id))
                    return true;
            }
            catch (ArgumentNullException)
            {
                basket = new List<MovieModel>();
            }
            return false;
        }
    }
}
