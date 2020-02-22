using EMART.SellerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EMART.SellerService.Repository
{
    public class SellerRepository : ISellerRepo
    {
        private readonly EMARTDBContext _context;
        public SellerRepository(EMARTDBContext context)
        {
            _context = context;
        }
        public void EditProfile(Seller Sid)
        {
            _context.Seller.Update(Sid);
            _context.SaveChanges();
        }

        public Seller GetProfile(string Sid)
        {
            return _context.Seller.Find(Sid);
        }
    }
}
