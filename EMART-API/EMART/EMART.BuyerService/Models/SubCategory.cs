using System;
using System.Collections.Generic;

namespace EMART.BuyerService.Models
{
    public partial class SubCategory
    {
        public SubCategory()
        {
            Items = new HashSet<Items>();
        }

        public string SubCategoryid { get; set; }
        public string SubCategoryName { get; set; }
        public string CategoryId { get; set; }
        public string Brief { get; set; }
        public decimal Gst { get; set; }

        public virtual Category Category { get; set; }
        public virtual ICollection<Items> Items { get; set; }
    }
}
