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
        List<Items> SearchItemByCategory(string id);
        List<Items> SearchItemBySubCategory(string id);
        void BuyItem(PurchaseHistory purchase);
        void EditProfile(Buyer buyer);
        Buyer GetProfile(string bid);
       List<PurchaseHistory> Purchase(string bid);
        List<Category> GetCategories();
        List<SubCategory> GetSubCategories(string CategoryId);
        List<Items> GetItems();
        void  AddToCart(Cart cart);
        List<Cart> GetCarts(string bid);
        void DeleteCart(string cartid);
        PurchaseHistory GetpurchaseHistory(string id);
         
    }
}
