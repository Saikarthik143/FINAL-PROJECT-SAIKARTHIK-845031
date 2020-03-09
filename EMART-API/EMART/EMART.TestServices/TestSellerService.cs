using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using EMART.SellerService.Models;
using EMART.SellerService.Repository;

namespace EMART.TestServices
{
    [TestFixture]
    class TestSellerService
    {
        SellerRepository _repo;
        [SetUp]
        public void Setup()
        {
            _repo = new SellerRepository(new EMARTDBContext());
        }
        [Test]
        public void TestGetProfile()
        {
            var result = _repo.GetProfile("S969");
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestEditProfile()
        {
            Seller seller = _repo.GetProfile("S000");
            seller.Username = "Eswar";
            _repo.EditProfile(seller);
            Seller seller1 = _repo.GetProfile("S000");

            Assert.AreSame(seller, seller1);
        }
    }
}
