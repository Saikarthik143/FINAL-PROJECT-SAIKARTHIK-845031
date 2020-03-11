using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMART.AdminService.Models;

namespace EMART.AdminService.Repositories
{
    public class AdminRepository:IAdminRepo
    {
        private readonly EMARTDBContext _context;
        public AdminRepository(EMARTDBContext context)
        {
            _context = context;
        }
        public void AddCategory(Category obj)
        {
            _context.Add(obj);
            _context.SaveChanges();
        }


        public List<Category> GetAllCategories()
        {
            return _context.Category.ToList();
        }
        public void AddSubCategory(SubCategory obj)
        {
            _context.Add(obj);
            _context.SaveChanges();
        }

        public void DeleteCategory(string cid)
        {
            Category category = _context.Category.Find(cid);
            _context.Category.Remove(category);
            _context.SaveChanges();
        }

        public void DeleteSubCategory(string scid)
        {
            SubCategory subcategory = _context.SubCategory.Find(scid);
            _context.SubCategory.Remove(subcategory);
            _context.SaveChanges();
        }

        public Category GetCategory(string categoryid)
        {
            return _context.Category.Find(categoryid);
        }

        public SubCategory GetSubCategory(string Subid)
        {
            return _context.SubCategory.Find(Subid);
        }

        public List<SubCategory> GetSubCategories()
        {
            return _context.SubCategory.ToList();
        }
    }
}
