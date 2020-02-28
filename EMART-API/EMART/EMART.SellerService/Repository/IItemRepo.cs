using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMART.SellerService.Models;

namespace EMART.SellerService.Repository
{
   public interface IItemRepo
    {
        void AddItems(Items items);
        
        List<Items> ViewItems(string Sid);
        void DeleteItem(string id);
        void UpdateItem(Items items);
        Items GetItem(string itemid);
        List<Category> GetAllCategories();
    }
}
