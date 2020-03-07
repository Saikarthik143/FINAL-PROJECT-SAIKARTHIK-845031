using System;
using System.Collections.Generic;

namespace EMART.SellerService.Models
{
    public partial class SubCategory
    {
        public SubCategory()
        {
            Cart = new HashSet<Cart>();
            Items = new HashSet<Items>();
        }

        public string SubCategoryid { get; set; }
        public string SubCategoryName { get; set; }
        public string Categoryid { get; set; }
        public string Brief { get; set; }
        public decimal Gst { get; set; }

        public virtual Category Category { get; set; }
        public virtual ICollection<Cart> Cart { get; set; }
        public virtual ICollection<Items> Items { get; set; }
    }
}
