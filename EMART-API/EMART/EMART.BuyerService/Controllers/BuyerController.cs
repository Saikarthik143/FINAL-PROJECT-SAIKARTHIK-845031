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
            try
            {
                return Ok(_repo.Purchase(Bid));
            }
            catch (Exception e)
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
        [HttpGet]
        [Route("SearchItemByCategory/{id}")]
        public IActionResult SearchItemByCategory(string id)
        {
            try
            {
                return Ok(_repo.SearchItemByCategory(id));
            }
            catch(Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("SearchItemBySubCategory/{id}")]
        public IActionResult SearchItemBySubCategory(string id)
        {
            try
            {
                return Ok(_repo.SearchItemBySubCategory(id));
            }
            catch(Exception e)
            {
                return NotFound(e.InnerException.Message);
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
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpPost]
        [Route("AddtoCart")]
        public IActionResult AddToCart(Cart cart)
        {
            try
            {
                _repo.AddToCart(cart);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
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
        [Route("GetCart/{bid}")]
        public IActionResult GetCart(string bid)
        {
            try
            {
                return Ok(_repo.GetCarts(bid));
            }
            catch (Exception e)
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
        [HttpGet]
        [Route("GetCount/{bid}")]
        public IActionResult GetCount(string bid)
        {
            try
            {
                return Ok(_repo.GetCount(bid));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("CheckCartItem/{bid}/{iid}")]
        public IActionResult CheckCartItem(string bid,string iid)
        {
            try
            {
                return Ok(_repo.CheckCartItem(bid, iid));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("GetPurchase/{pid}")]
        public IActionResult GetPurchase(string pid)
        {
            try
            {
                return Ok(_repo.GetpurchaseHistory(pid));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteCart/{cartid}")]
        public IActionResult DeleteCart(string cartid)
        {
            try
            {
                _repo.DeleteCart(cartid);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
    }
}