using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMART.UserService.Models;

namespace EMART.UserService.Repositories
{
    public class UserRepository : IUserRepo
    {
        private readonly EMARTDBContext _context;
        public UserRepository(EMARTDBContext context)
        {
            _context = context;
        }
        public Buyer BuyerLogin(string username, string password)
        {
            Buyer buyer = _context.Buyer.SingleOrDefault(e => e.Username == username && e.Password == password);
            
            //var x = _context.Seller.Where(e => e.Username == username && e.Password == password).ToList();
            if (buyer.Username == username && buyer.Password == password)
            {

                return buyer;
            }
            else
                Console.WriteLine("login");
            return null;
        }

        public void BuyerRegister(Buyer buyer)
        {
            _context.Add(buyer);
            _context.SaveChanges();
        }

        public Seller SellerLogin(string username, string password)
        {
            Seller seller = _context.Seller.SingleOrDefault(e => e.Username == username && e.Password == password);
            //var x = _context.Seller.Where(e => e.Username == username && e.Password == password).ToList();
            if (seller.Username == username && seller.Password == password)
            {

                return seller;
            }
            else
                Console.WriteLine("login");
                return null;
        }

        public void SellerRegister(Seller seller)
        {
            _context.Add(seller);
            _context.SaveChanges();
        }
    }
}
