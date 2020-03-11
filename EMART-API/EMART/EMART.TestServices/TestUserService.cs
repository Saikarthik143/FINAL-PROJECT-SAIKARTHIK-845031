using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using EMART.UserService.Repositories;
using EMART.UserService.Models;


namespace EMART.TestServices
{
    [TestFixture]
    class TestUserService
    {
        UserRepository _repo;
        [SetUp]
        public void Setup()
        {
            _repo = new UserRepository(new EMARTDBContext());
        }
        [Test]
        public void TestBuyerLogin()
        {

            var result = _repo.BuyerLogin("siddarth", "karthik@");
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestSellerLogin()
        {
            Seller seller = _repo.SellerLogin("karthik", "qwertyu*");
            Assert.AreEqual(seller.Username,"karthik");
        }
        [Test]
        public void TestAddBuyer()
        {
            _repo.BuyerRegister(new Buyer()
            {
                Bid = "B31",
                Username = "saibla",
                Password = "qasqws",
                Emailid = "as@gmail.com",
                Mobile = "9876543210",
                Createdatetime = DateTime.Now,
            });
            var result = _repo.BuyerLogin("saibla", "qasqws");
            Assert.NotNull(result);
        }
        [Test]
        public void TestSellerRegister()
        {
            _repo.SellerRegister(new Seller()
            {
                Sid = "S1204",
                Username = "balaai",
                Password = "asdwd",
                Emailid = "asw@gmail.com",
                CompanyName = "google",
                Website = "www.google.com",
                Gstin = "wsfdwefd",
                Briefaboutcompany = "good excellent",
                Address = "fdgewf3",
                Mobile = "9475850968"
            });
            var result = _repo.SellerLogin("balaai", "asdwd");
            Assert.NotNull(result);
        }
    }
}
