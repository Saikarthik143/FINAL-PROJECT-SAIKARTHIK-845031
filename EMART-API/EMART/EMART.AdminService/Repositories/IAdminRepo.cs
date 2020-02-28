using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMART.AdminService.Models;


namespace EMART.AdminService.Repositories
{
   public interface IAdminRepo
    {
        void AddCategory(Category category);
        void AddSubCategory(SubCategory subcategory);
        void DeleteCategory(string cid);
        void DeleteSubCategory(string scid);
        
    }
}
