using System;
using System.Collections.Generic;

namespace EMART.UserService.Models
{
    public partial class Items
    {
        public Items()
        {
            PurchaseHistory = new HashSet<PurchaseHistory>();
        }

        public string Iid { get; set; }
        public string ItemName { get; set; }
        public int Price { get; set; }
        public string Description { get; set; }
        public int StockNumber { get; set; }
        public string Remarks { get; set; }
        public string CategoryId { get; set; }
        public string SubCategoryid { get; set; }

        public virtual Category Category { get; set; }
        public virtual SubCategory SubCategory { get; set; }
        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}
