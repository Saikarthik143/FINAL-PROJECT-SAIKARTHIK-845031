using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMART.BuyerService.Models;

namespace EMART.BuyerService.Repositories
{
  public  interface IBuyerRepo
    {
        List<Items> Search(string name);
        void BuyItem(PurchaseHistory purchase);
        void EditProfile(Buyer buyer);
        Buyer GetProfile(string bid);
        List<PurchaseHistory> Purchase(string bid);
        List<Category> GetCategories();
        List<SubCategory> GetSubCategories(string CategoryId);
        List<Items> GetItems();
    }
}
