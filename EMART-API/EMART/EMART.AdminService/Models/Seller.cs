using System;
using System.Collections.Generic;

namespace EMART.AdminService.Models
{
    public partial class Seller
    {
        public Seller()
        {
            Cart = new HashSet<Cart>();
            Items = new HashSet<Items>();
            PurchaseHistory = new HashSet<PurchaseHistory>();
        }

        public string Sid { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string CompanyName { get; set; }
        public string Gstin { get; set; }
        public string Briefaboutcompany { get; set; }
        public string Address { get; set; }
        public string Website { get; set; }
        public string Emailid { get; set; }
        public string Mobile { get; set; }

        public virtual ICollection<Cart> Cart { get; set; }
        public virtual ICollection<Items> Items { get; set; }
        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}
