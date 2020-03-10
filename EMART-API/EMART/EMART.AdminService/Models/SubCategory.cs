using System;
using System.Collections.Generic;

namespace EMART.AdminService.Models
{
    public partial class SubCategory
    {
        public SubCategory()
        {
            Items = new HashSet<Items>();
        }

        public string SubCategoryid { get; set; }
        public string SubCategoryName { get; set; }
        public string Categoryid { get; set; }
        public string Brief { get; set; }
        public decimal Gst { get; set; }

        public virtual ICollection<Items> Items { get; set; }
    }
}
