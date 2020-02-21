using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EMART.UserService.Models;
using EMART.UserService.Repositories;
namespace EMART.UserService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepo _repo;
        public UserController(IUserRepo repo)
        {
            _repo = repo;
        }
        [HttpGet]
        [Route("login/{uname}/{pwd}")]
        public IActionResult Login(string uname, string pwd)
        {
            try
            {
                return Ok(_repo.BuyerLogin(uname, pwd));
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("Slogin/{uname}/{pwd}")]
        public IActionResult SLogin(string uname, string pwd)
        {
            try
            {
                return Ok(_repo.SellerLogin(uname, pwd));
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpPost]
        [Route("AddBuyer")]
        public IActionResult AddBuyer(Buyer buyer)
        {
            try
            {
                _repo.BuyerRegister(buyer);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpPost]
        [Route("AddSeller")]
        public IActionResult AddSeller(Seller seller)
        {
            try
            {
                _repo.SellerRegister(seller);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
    }
}