using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using EMART.SellerService.Models;
using EMART.SellerService.Repository;

namespace EMART.TestServices
{
    [TestFixture]
    class TestItemService
    {
        ItemRepository _repo;
        [SetUp]
        public void Setup()
        {
            _repo = new ItemRepository(new EMARTDBContext());
        }
        [Test]
        public void TestAddItems()
        {
            _repo.AddItems(new Items()
            {
                Iid = "I098",
                Itemname = "note7",
                Price = 12999,
                Stocknumber = 5,
                Sid = "S00",
                Categoryid = "C260",
                SubCategoryid = "SC311",
                Description = "ram 8gb",
                Remarks = "6months warranty",
                Imagename = "mi7.jpg",
            });
            var result = _repo.GetItem("I098");
            Assert.NotNull(result);
        }
        [Test]
        public void TestViewItems()
        {
            var result = _repo.ViewItems("S969");
            Assert.NotNull(result);
        }
        [Test]
        public void TestDeleteItem()
        {
            _repo.DeleteItem("I9574");
            var result = _repo.GetItem("I9574");
            Assert.Null(result);
        }
        [Test]
        public void TestUpdateItem()
        {
            Items items = _repo.GetItem("I8471");
            items.Price = 2399;
            _repo.UpdateItem(items);
            Items items1 = _repo.GetItem("I8471");
            Assert.AreSame(items, items1);

        }
        [Test]
        public void TestGetAllCategories()
        {
          var result=  _repo.GetAllCategories();
            Assert.NotNull(result);
        }
        [Test]
        public void TestSubCategory()
        {
            var result = _repo.GetSubCategories("C2");
            Assert.NotNull(result);
        }
    }
}
