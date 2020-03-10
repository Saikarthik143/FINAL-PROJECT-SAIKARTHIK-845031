using System;
using System.Collections.Generic;

namespace EMART.SellerService.Models
{
    public partial class Category
    {
        public Category()
        {
            Cart = new HashSet<Cart>();
            Items = new HashSet<Items>();
        }

        public string Categoryid { get; set; }
        public string Categoryname { get; set; }
        public string Briefdetails { get; set; }

        public virtual ICollection<Cart> Cart { get; set; }
        public virtual ICollection<Items> Items { get; set; }
    }
}
