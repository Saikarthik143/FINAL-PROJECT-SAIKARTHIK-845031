using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EMART.SellerService.Models;
using EMART.SellerService.Repository;
using Microsoft.AspNetCore.Authorization;

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
        [HttpPut]
        [Route("Edit")]
        public IActionResult EditProfile(Seller id)
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
               return Ok( _repo.GetProfile(id));
                
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("GetReports/{sid}")]
        public IActionResult GetReports(string sid)
        {
            try
            {
                return Ok(_repo.GetReports(sid));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
    }
}