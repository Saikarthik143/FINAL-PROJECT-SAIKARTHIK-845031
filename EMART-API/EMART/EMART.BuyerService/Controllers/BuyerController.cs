using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EMART.BuyerService.Models;
using EMART.BuyerService.Repositories;

namespace EMART.BuyerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BuyerController : ControllerBase
    {
        private readonly IBuyerRepo _repo;
        public BuyerController(IBuyerRepo repo)
        {
            _repo = repo;
        }
        [HttpGet]
        [Route("GetItems")]
        public IActionResult GetItems()
        {
            try
            {
                return Ok(_repo.GetItems());
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPut]
        [Route("Edit")]
        public IActionResult EditProfile(Buyer id)
        {
            try
            {
                _repo.EditProfile(id);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("Get/{id}")]
        public IActionResult GetProfile(string id)
        {
            try
            {
                return Ok(_repo.GetProfile(id));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("View/{Bid}")]
        public IActionResult Purchase(string Bid)
        {
            try {
                return Ok(_repo.Purchase(Bid));
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
            
        }
        [HttpGet]
        [Route("SearchItems/{name}")]
        public IActionResult SearchItem(string name)
        {
            try
            {
                return Ok(_repo.Search(name));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPost]
        [Route("BuyItem")]
        public IActionResult BuyItem(PurchaseHistory purchase)
        {
            try
            {
                _repo.BuyItem(purchase);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("GetCategory")]
        public IActionResult GetCategory()
        {
            try
            {
                return Ok(_repo.GetCategories());
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("GetSubCategory/{Cid}")]
        public IActionResult SubCategory(string Cid)
        {
            try
            {
                return Ok(_repo.GetSubCategories(Cid));
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
    }
}