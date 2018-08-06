$(document).ready(function () {
    var showPokemon = function (pokemones) {
        var name = "";
        var url = "";

        console.log(name);
        pokemones.forEach(function (pokemon) {
            console.log(pokemon);
            
        var name = pokemon.pokemon_species.name;
        var imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.entry_number}.png`;
        $("#elementos").append(armarTemplate(name, imagen));
        });
    }

    var armarTemplate = function (name, imagen) {
        var t = "<div class='elemento'><p>"+name+"</p><img src='" + imagen + "'/></div>";
        return t;
    }

    var ajaxPokemon = function (pokemon) {
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokedex/1`,
            type: 'GET',
            datatype: 'json',
        })
            .done(function (response) {
                console.log(response);
                showPokemon(response.pokemon_entries);
            })
            .fail(function () {
                console.log("error");
            });
    }
    $("#buscar-pokemon").click(function (event) {
        console.log("Entro");
        $("#elementos").empty();
        var pokemon = $("#poke-text").val();
        ajaxPokemon(pokemon);
    });
});

// $(document).ready(function () {

//     //main click event handler
//     $("#search").click(function () {
//         //fetch API data and display it on the content div
//         var pokemon = $("#pokemon").val();
//         var url = 'https://pokeapi.co/docsv2/1' + pokemon;

//         $.ajax({
//             type: 'GET',
//             dataType: 'json',
//             cache: false,
//             url: url,
//             success: function (data) {

//                 $("#content").empty();

//                 $("#content").append("<br /> <label>Pokemon Name:</label>" + " " + data.name);
//                 $("#content").append("<br /><label>Base Experience:</label>" + " " + data.base_experience);
//                 $("#content").append("<br /><label>Height:</label>" + " " + data.height);
//                 $("#content").append("<br /><label>Weight:</label>" + " " + data.weight);
//             }
//         });
//     });

//     $("#next").click(function (e) {
//         e.preventDefault();
//         currentPage = parseInt($("#pokemon").val());
//         nextPage = (currentPage + 1);
//         $("#pokemon").val(nextPage);

//         //call the search
//         $("#search").click();
//     });

//     $("#last").click(function (e) {
//         e.preventDefault();
//         currentPage = parseInt($("#pokemon").val());
//         if (currentPage > 0) {
//             nextPage = (currentPage - 1);
//         }
//         else {
//             nextPage = pageCount - 1;
//         }

//         $("#pokemon").val(nextPage);

//         //call the search
//         $("#search").click();
//     });

// });