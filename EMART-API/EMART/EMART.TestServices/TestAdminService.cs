using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using EMART.AdminService.Models;
using EMART.AdminService.Repositories;

namespace EMART.TestServices
{
    [TestFixture]
    class TestAdminService
    {
        AdminRepository _repo;
        [SetUp]
        public void Setup()
        {
            _repo = new AdminRepository(new EMARTDBContext());
        }
        [Test]
        public void TestAddCategory()
        {
            _repo.AddCategory(new Category()
            {
                Categoryid = "C1234",
                Categoryname = "Shirts",
                Briefdetails = "all type of shirts available",

            });
            var result = _repo.GetCategory("C1234");
            Assert.NotNull(result);
        }
        [Test]
        public void TestAddSubCategory()
        {
            _repo.AddSubCategory(new SubCategory()
            {
                SubCategoryid = "S123",
                SubCategoryName = "formal",
                Categoryid = "C1234",
                Brief = "good",
                Gst = 3,

            });
            var result = _repo.GetSubCategory("S123");
            Assert.NotNull(result);
        }
        [Test]
        public void TestDeleteCategory()
        {
            _repo.DeleteCategory("C2");
            var result = _repo.GetCategory("C2");
            Assert.Null(result);
        }
        [Test]
        public void TestDeleteSubCategory()
        {
            _repo.DeleteSubCategory("S123");
            var result = _repo.GetSubCategory("S123");
            Assert.Null(result);
        }
    }
}
