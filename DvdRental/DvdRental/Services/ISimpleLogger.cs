namespace DvdRental.Services
{
    public interface ISimpleLogger
    {
        void Log(string message, string fileName);
    }
}