using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EMART.UserService.Models;
using EMART.UserService.Repositories;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.Configuration;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.AspNetCore.Authorization;

namespace EMART.UserService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
   
    public class UserController : ControllerBase
    {
        private readonly IUserRepo _repo;
        private readonly IConfiguration configuration;
        public UserController(IConfiguration configuration,IUserRepo repo)
        {
            this.configuration = configuration;
            _repo = repo;
        }
        
        [HttpGet]
        [Route("login/{uname}/{pwd}")]
        public IActionResult Login(string uname, string pwd)
        {
            Token token = null;
            try
            {

                Buyer buyer = _repo.BuyerLogin(uname, pwd);
                if (buyer != null)
                {
                    token = new Token() { buyerid = buyer.Bid, token = GenerateJwtToken(uname), message = "success",uname=buyer.Username};
                }
                else
                {
                    token = new Token() { token = null, message = "unsuccess" };
                }
                return Ok(token);

            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("Slogin/{uname}/{pwd}")]
        public IActionResult SLogin(string uname, string pwd)
        {
            Token token = null;
            try
            {

                Seller seller = _repo.SellerLogin(uname, pwd);
                if (seller != null)
                {
                    token = new Token() { sellerid = seller.Sid, token = GenerateJwtToken(uname), message = "success",uname=seller.Username};
                }
                else
                {
                    token = new Token() { token = null, message = "unsuccess" };
                }
                return Ok(token);

            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        private string GenerateJwtToken(string uname)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, uname),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, uname),
                new Claim(ClaimTypes.Role,uname)
            };
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JwtKey"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            // recommended is 5 min
            var expires = DateTime.Now.AddDays(Convert.ToDouble(configuration["JwtExpireDays"]));
            var token = new JwtSecurityToken(
                configuration["JwtIssuer"],
                configuration["JwtIssuer"],
                claims,
                expires: expires,
                signingCredentials: credentials
            );

            var response = new Token
            {
                uname = uname,
                token = new JwtSecurityTokenHandler().WriteToken(token)
            };
            return new JwtSecurityTokenHandler().WriteToken(token);
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