using System;
using System.Collections.Generic;

namespace EMART.AdminService.Models
{
    public partial class Category
    {
        public Category()
        {
            Items = new HashSet<Items>();
            SubCategory = new HashSet<SubCategory>();
        }

        public string Categoryid { get; set; }
        public string Categoryname { get; set; }
        public string Briefdetails { get; set; }

        public virtual ICollection<Items> Items { get; set; }
        public virtual ICollection<SubCategory> SubCategory { get; set; }
    }
}
