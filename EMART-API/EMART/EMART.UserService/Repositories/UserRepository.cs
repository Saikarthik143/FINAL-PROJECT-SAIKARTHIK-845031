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
        public bool BuyerLogin(string username, string password)
        {
            var x = _context.Buyer.Where(e => e.Username == username && e.Password == password).ToList();
            if (x.Count == 0)
            {
                return false;
            }
            else


                return true;
        }

        public void BuyerRegister(Buyer buyer)
        {
            _context.Add(buyer);
            _context.SaveChanges();
        }

        public bool SellerLogin(string username, string password)
        {
            var x = _context.Seller.Where(e => e.Username == username && e.Password == password).ToList();
            if (x.Count == 0)
            {
                return false;
            }
            else
                return true;
        }

        public void SellerRegister(Seller seller)
        {
            _context.Add(seller);
            _context.SaveChanges();
        }
    }
}
