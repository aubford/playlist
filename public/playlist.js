$(function(){


  var getter = $.ajax ({

    url: "https://lit-fortress-6467.herokuapp.com/object",
    method: "GET",
    dataType: "json"

  })


  var poster = $.ajax ({

    url: "https://lit-fortress-6467.herokuapp.com/post",
    method: "POST"

  })
  getter.done(function(response){
    console.log(response)
  })
  poster.done(function(response){
    console.log(response)
  })
/////////////////////

  getter.done(function(response){
    response.results.forEach(function(e){
        $(".overwide").append("<img class='album' src='images/e['cover_art']'")
    })
  })











})
