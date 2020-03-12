using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EMART.AdminService.Models;
using EMART.AdminService.Repositories;
using Microsoft.AspNetCore.Authorization;

namespace EMART.AdminService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class AdminController : ControllerBase
    {
        private readonly IAdminRepo _repo;
        public AdminController(IAdminRepo repo)
        {
            _repo = repo;
        }
        [HttpPost]
        [Route("AddCategory")]
        public IActionResult AddCategory(Category item)
        {
            try
            {
                _repo.AddCategory(item);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }

        }
        [HttpGet]
        [Route("GetAll")]
        public IActionResult GetAllCategories()
        {
            try
            {
                return Ok(_repo.GetAllCategories());

            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("GetAllSubCategories")]
        public IActionResult GetSubCategory()
        {
            try
            {
                return Ok(_repo.GetSubCategories());
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpPost]
        [Route("AddSubCategory")]
        public IActionResult AddSubCategory(SubCategory item)
        {
            try
            {
                _repo.AddSubCategory(item);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteCatrgory/{category_id}")]
        public IActionResult DeleteCategory(string category_id)
        {
            try
            {
                _repo.DeleteCategory(category_id);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteSubCatrgory/{subcategory_id}")]
        public IActionResult DeleteSubCategory(string subcategory_id)
        {
            try
            {
                _repo.DeleteSubCategory(subcategory_id);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("GetCategory/{Cid}")]
        public IActionResult GetCategoryById(string Cid)
        {
            try
            {
                return Ok(_repo.GetCategory(Cid));
            }
            catch(Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetSubCategory/{SubId}")]
        public IActionResult GetSubCategory(string SubId)
        {
            try
            {
                return Ok(_repo.GetSubCategory(SubId));
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpPut]
        [Route("UpdateCategory")]
        public IActionResult EditCategory(Category category)
        {
            try
            {
                _repo.EditCategory(category);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }

        }
        [HttpPut]
        [Route("UpdateSubCategory")]
        public IActionResult EditSubCategory(SubCategory subCategory)
        {
            try
            {
                _repo.EditSubCategory(subCategory);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }

        }
    }
}