﻿using Microsoft.AspNetCore.Mvc;

namespace FoodOrder.Controllers
{
    public class RecipeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
