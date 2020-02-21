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
        public void AddItems(Items items)
        {
            _context.Add(items);
            _context.SaveChanges();
        }
    }
}
