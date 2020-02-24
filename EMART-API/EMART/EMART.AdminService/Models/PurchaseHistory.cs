using System;
using System.Collections.Generic;

namespace EMART.AdminService.Models
{
    public partial class PurchaseHistory
    {
        public string Id { get; set; }
        public string Bid { get; set; }
        public string Sid { get; set; }
        public string TransactionType { get; set; }
        public string Iid { get; set; }
        public int NumberOfItems { get; set; }
        public DateTime DateTime { get; set; }
        public string Remarks { get; set; }
        public string TransStatus { get; set; }

        public virtual Buyer B { get; set; }
        public virtual Items I { get; set; }
        public virtual Seller S { get; set; }
    }
}
