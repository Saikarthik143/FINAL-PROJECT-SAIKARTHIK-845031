using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using EMART.BuyerService.Models;
using EMART.BuyerService.Repositories;

namespace EMART.TestServices
{
    [TestFixture]
    class TestBuyerService
    {
        BuyerRepository _repo;
        [SetUp]
        public void Setup()
        {
            _repo = new BuyerRepository(new EMARTDBContext());
        }
        [Test]
        public void  TestSearchItemByName()
        {
            var result = _repo.Search("honor");
            Assert.NotNull(result);
        }
        [Test]
        public void TestSearchItemByCategory()
        {
            var result = _repo.SearchItemByCategory("C2");
            Assert.NotNull(result);
        }
        [Test]
        public void TestSearchItemBySubCategory()
        {
            var result = _repo.SearchItemBySubCategory("SC150");
            Assert.NotNull(result);
        }
        [Test]
        public  void TestBuyItem()
        {
            _repo.BuyItem(new PurchaseHistory()
            {
                Id = "P0001",
                Bid = "B001",
                Sid = "S842",
                Iid = "I6230",
                Transactiontype = "Debit",
                Numberofitems = 3,
                Datetime = DateTime.Now,
                Remarks = "good",

            });
            var result = _repo.GetpurchaseHistory("P0001");
            Assert.NotNull(result);
        }
        [Test]
        public void TestEditprofile()
        {
            Buyer buyer = _repo.GetProfile("B01");
            buyer.Password = "asdfghj*";
            _repo.EditProfile(buyer);
            Buyer buyer1 = _repo.GetProfile("B01");
            Assert.AreSame(buyer, buyer1);
        }
        [Test]
        public void TestGetProfile()
        {
            var result = _repo.GetProfile("B764");
            Assert.IsNotNull(result);
        }
        [Test] 
        public void TestPurchase()
        {
            var result = _repo.Purchase("B01");
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestGetCategory()
        {
            var result = _repo.GetCategories();
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestGetSubCategory()
        {
            var result = _repo.GetSubCategories("C260");
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestGetItems()
        {
            var result = _repo.GetItems();
            Assert.IsNotNull(result);
        }
        //[Test]
        //public void TestAddToCart()
        //{
        //    _repo.AddToCart(new Cart()
        //    {
        //        Cartid = "C234",
        //        Iid = "I7754",
        //        Itemname = "normal",
        //        Price = 1299,
        //        Description = "good",
        //        Stocknumber = 5,
        //        Remarks = "none",
        //        Categoryid = "C244",
        //        SubCategoryid = "SC367",
        //        Bid = "B01",
        //        Sid = "S000",
        //        Imagename = "mi7.jpg"
        //    });
        //    var result=_repo.AddToCart("")
        //}
    }
}
