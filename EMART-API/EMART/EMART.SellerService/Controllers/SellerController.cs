using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EMART.SellerService.Models;
using EMART.SellerService.Repository;

namespace EMART.SellerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SellerController : ControllerBase
    {
        private readonly ISellerRepo _repo;
        public SellerController(ISellerRepo repo)
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
            catch(Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
    }
}