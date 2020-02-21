using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMART.UserService.Models;

namespace EMART.UserService.Repositories
{
  public  interface IUserRepo
    {
        bool BuyerLogin(string username, string password);
        bool SellerLogin(string username, string password);

        void SellerRegister(Seller seller);
        void BuyerRegister(Buyer buyer);
    }
}
