using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DvdRental.Services
{
    public class SimpleLogger : ISimpleLogger
    {
        private static string directory = "log";
        public void Log(string message, string fileName)
        {
            var day = DateTime.Now.Day;
            var month = DateTime.Now.Month;
            var year = DateTime.Now.Year;
            string path = $"{directory}\\{year}-{month}-{day}-{fileName}-Log.txt";
            try
            {
                File.AppendAllText(path, $"{DateTime.Now}: {message} \n");
            }
            catch(DirectoryNotFoundException ex)
            {
                Directory.CreateDirectory(directory);
                File.AppendAllText(path, $"{DateTime.Now}: {message} \n");
            }
        }
    }
}
