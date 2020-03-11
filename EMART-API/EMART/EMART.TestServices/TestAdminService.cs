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
                Categoryid = "C113",
                Categoryname = "sht",
                Briefdetails = "all type of short available",

            });
            var result = _repo.GetCategory("C113");
            Assert.NotNull(result);
        }
        [Test]
        public void TestAddSubCategory()
        {
            _repo.AddSubCategory(new SubCategory()
            {
                SubCategoryid = "SC113",
                SubCategoryName = "fral",
                Categoryid = "C113",
                Brief = "good",
                Gst = 3,

            });
            var result = _repo.GetSubCategory("SC113");
            Assert.NotNull(result);
        }
        [Test]
        public void TestDeleteCategory()
        {
            _repo.DeleteCategory("C113");
            var result = _repo.GetCategory("C113");
            Assert.Null(result);
        }
        [Test]
        public void TestDeleteSubCategory()
        {
            _repo.DeleteSubCategory("SC113");
            var result = _repo.GetSubCategory("SC113");
            Assert.Null(result);
        }
    }
}
