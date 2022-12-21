using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using FoodOrder.Models;

namespace FoodOrder.ContextDBConfig
{
    public class FoodOrderDBContext:IdentityDbContext<ApplicationUser>
    {
        
        public FoodOrderDBContext(DbContextOptions<FoodOrderDBContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }

        public DbSet<Order> Orders { get; set; }

    }
}
