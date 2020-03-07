using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMART.BuyerService.Models;

namespace EMART.BuyerService.Repositories
{
    public class BuyerRepository : IBuyerRepo
    {
        private readonly EMARTDBContext _context;
        public BuyerRepository(EMARTDBContext context)
        {
            _context = context;
        }

        public void AddToCart(Cart cart)
        {
            _context.Add(cart);
            _context.SaveChanges();
        }

        public void BuyItem(PurchaseHistory purchase)
        {
            _context.Add(purchase);
            _context.SaveChanges();
        }

        public void DeleteCart(string cartid)
        {
            Cart cart = _context.Cart.Find(cartid);
            _context.Cart.Remove(cart);
            _context.SaveChanges();
        }

        public void EditProfile(Buyer buyer)
        {
            _context.Buyer.Update(buyer);
            _context.SaveChanges();
        }

        public List<Cart> GetCarts(string bid)
        {
            return _context.Cart.Where(e => e.Bid == bid).ToList();
        }

        public List<Category> GetCategories()
        {
            return _context.Category.ToList();
        }

        public List<Items> GetItems()
        {
            return _context.Items.ToList();
        }

        public Buyer GetProfile(string bid)
        {
            return _context.Buyer.Find(bid);
        }

       

        public List<SubCategory> GetSubCategories(string CategoryId)
        {
            List<SubCategory> subCategories= _context.SubCategory.Where(e=>e.Categoryid==CategoryId).ToList();
            return subCategories;
        }

        public List<PurchaseHistory> Purchase(string bid)
        {
            List<PurchaseHistory> b1 = _context.PurchaseHistory.Where(e => e.Bid == bid).ToList();

            return b1;
        }

        public List<Items> Search(string name)
        {
            return _context.Items.Where(e => e.Itemname== name).ToList();
        }

        

        public List<Items> SearchItemByCategory(string id)
        {
            return _context.Items.Where(e => e.Categoryid == id).ToList();
        }

        public List<Items> SearchItemBySubCategory(string id)
        {
            return _context.Items.Where(e => e.SubCategoryid == id).ToList();
        }
    }
}
