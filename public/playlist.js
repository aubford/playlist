$(function(){


  var getter = $.ajax ({

    url: "https://lit-fortress-6467.herokuapp.com/object",
    method: "GET",
    dataType: "json"

  })


  // var poster = $.ajax ({
  //
  //   url: "https://lit-fortress-6467.herokuapp.com/post",
  //   method: "POST"
  //
  // })


  function printAlbum (idNumber, array){
        var output = null
        array.forEach(function(e){
            if (idNumber == e['id']){
              output = e['artist']+ ": " + e["title"]
            }
        })
        return output
  }
/////////////////////

  getter.done(function(response){


    response.results.forEach(function(e){
        $(".overwide").append("<img name='" + e['title'] + "' id='" + e['id'] + "' class='album' src='images/" + e['cover_art'] + "'>")
    })

//////////////////

    $(".album").on("click", function(){

        var clickedId = $(this).attr("id")
        var nameVal = $(this).attr("name")

        var info = printAlbum(clickedId, response['results'])

        $("select").append("<option value='"+nameVal+"'>"+info+"</option>")


    })

    $(".clear").on("click", function(){
        $("select").children().remove()
    })

    $(".submitBin").on("click", function(){
      var names = []
      $("select").children().each(function(a,e){
            names.push($(this).val())
      })

      console.log(names)

      var poster = $.ajax ({

        url: "https://lit-fortress-6467.herokuapp.com/post",
        method: "POST",
        data: {names:"names"}

      })

      poster.done(function(payload){
      console.log(payload)
      })

    })




  })













})
