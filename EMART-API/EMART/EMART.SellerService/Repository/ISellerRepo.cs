using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMART.SellerService.Models;

namespace EMART.SellerService.Repository
{
   public interface ISellerRepo
    {
        Seller GetProfile(string Sid);
        void EditProfile(Seller Sid);
       
    }
}
