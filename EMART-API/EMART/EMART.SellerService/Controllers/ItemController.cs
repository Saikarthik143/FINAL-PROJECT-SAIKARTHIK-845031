using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EMART.SellerService.Repository;
using EMART.SellerService.Models;
using Microsoft.AspNetCore.Authorization;

namespace EMART.SellerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ItemController : ControllerBase
    {
        private readonly IItemRepo _repo;
        public ItemController(IItemRepo repo)
        {
            _repo = repo;
        }
        [HttpPost]
        [Route("AddItems")]
        public IActionResult AddItems(Items items)
        {
            try
            {
                _repo.AddItems(items);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("View/{Sid}")]
        public IActionResult ViewItems(string Sid)
        {
            try
            {
                return Ok(_repo.ViewItems(Sid));
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetAllCategories")]
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
        [Route("GetSubCategory/{id}")]
        public IActionResult GetSubCategory(string id)
        {
            try
            {
                return Ok(_repo.GetSubCategories(id));

            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpDelete]
        [Route("Delete/{id}")]
        public IActionResult DeleteItem(string id)
        {
            try
            {
                _repo.DeleteItem(id);
                return Ok();
            }
            catch(Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        } 
        [HttpPut]
        [Route("Update")]
        public IActionResult Update(Items id)
        {
            try
            {
                _repo.UpdateItem(id);
                return Ok();
            }
            catch(Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetItem/{id}")]
        public IActionResult GetItem(string id)
        {
            try
            {
                return Ok(_repo.GetItem(id));
            }
            catch(Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
       
      

    }
}