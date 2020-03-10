using System;
using System.Collections.Generic;

namespace EMART.AdminService.Models
{
    public partial class Items
    {
        public Items()
        {
            PurchaseHistory = new HashSet<PurchaseHistory>();
        }

        public string Iid { get; set; }
        public string Itemname { get; set; }
        public int Price { get; set; }
        public string Description { get; set; }
        public int Stocknumber { get; set; }
        public string Remarks { get; set; }
        public string Categoryid { get; set; }
        public string SubCategoryid { get; set; }
        public string Imagename { get; set; }
        public string Sid { get; set; }

        public virtual Category Category { get; set; }
        public virtual Seller S { get; set; }
        public virtual SubCategory SubCategory { get; set; }
        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}
