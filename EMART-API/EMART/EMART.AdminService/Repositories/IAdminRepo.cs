﻿using System;
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
        List<Category> GetAllCategories();
        Category GetCategory(string categoryid);
        SubCategory GetSubCategory(string Subid);
        List<SubCategory> GetSubCategories();
        void EditCategory(Category category);
        void EditSubCategory(SubCategory subCategory);
    }
}
