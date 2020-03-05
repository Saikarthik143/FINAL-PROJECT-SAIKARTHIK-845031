using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMART.SellerService.Models;

namespace EMART.SellerService.Repository
{
    public class ItemRepository:IItemRepo
    {
        private readonly EMARTDBContext _context;
        public ItemRepository(EMARTDBContext context)
        {
            _context = context;
        }
        public void AddItems(Items items)
        {
            _context.Add(items);
            _context.SaveChanges();
        }

        public void DeleteItem(string id)
        {
            Items i = _context.Items.Find(id);
            _context.Items.Remove(i);
            _context.SaveChanges();

        }

       

        public Items GetItem(string itemid)
        {
            return _context.Items.Find(itemid);
        }

       

        public void UpdateItem(Items items)
        {
            _context.Items.Update(items);
            _context.SaveChanges();
        }

        public List<Category> GetAllCategories()
        {
            return _context.Category.ToList();
        }

        public List<Items> ViewItems(string Sid)
        {
            List<Items> a = _context.Items.Where(e => e.Sid == Sid).ToList();
            return a;
        }

        public List<SubCategory> GetSubCategories(string CategoryId)
        {
            List<SubCategory> subCategories = _context.SubCategory.Where(e => e.Categoryid== CategoryId).ToList();
            return subCategories;
        }
    }
}
