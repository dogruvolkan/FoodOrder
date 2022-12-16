﻿

let apiURL = "https://forkify-api.herokuapp.com/api/v2/recipes";
let apikey = "6b059121-1f70-491f-be9f-9afa96cdaef2";

async function GetRecipes(recipeName, id, isAllShow) {

    let resp = await fetch(`${apiURL}?search=${recipeName}&key=${apikey}`);
    let result = await resp.json();
    console.log(result);
    let Recipes = isAllShow ? result.data.recipes : result.data.recipes.slice(1, 7);
    showRecipes(Recipes, id);
}


function showRecipes(recipes, id) {

    $.ajax({
        contentType: "application/json; charset=utf-8",
        dataType: "html",
        type: "POST",
        url: "/Recipe/GetRecipeCard",
        data: JSON.stringify(recipes),
        success: function (htmlResult) {
            $("#" + id).html(htmlResult);
        }
    })
}

async function getOrderRecipe(id , showId) {
    let resp = await fetch(`${apiURL}/${id}?key=${apikey}`);
    let result = await resp.json();
    let recipe = result.data.recipe;
    showOrderRecipeDetails(recipe, showId);
}

function showOrderRecipeDetails(data, showId) {
    $.ajax({
        contentType: "application/json; charset=utf-8",
        dataType: "html",
        type: "POST",
        url: "/Recipe/ShowOrder",
        data: JSON.stringify(data),
        success: function (htmlResult) {
            $("#" + showId).html(htmlResult);
        }
    })
}