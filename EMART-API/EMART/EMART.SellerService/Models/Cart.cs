using System;
using System.Collections.Generic;

namespace EMART.SellerService.Models
{
    public partial class Cart
    {
        public string Cartid { get; set; }
        public string Iid { get; set; }
        public string Itemname { get; set; }
        public int? Price { get; set; }
        public string Description { get; set; }
        public int? Stocknumber { get; set; }
        public string Remarks { get; set; }
        public string Categoryid { get; set; }
        public string SubCategoryid { get; set; }
        public string Sid { get; set; }
        public string Bid { get; set; }
        public string Imagename { get; set; }

        public virtual Buyer B { get; set; }
        public virtual Category Category { get; set; }
    }
}
