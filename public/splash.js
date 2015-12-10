$(function(){

    var getter = $.ajax ({

      url: "https://lit-fortress-6467.herokuapp.com/object",
      method: "GET",
      dataType: "json"

    })

    function randomNums(){
      var arr = [0,1,2,3,4]
      var output = []
      var count = 5
      for (var i = 0; i < 3; i++) {
        var a = Math.floor(Math.random() * count)
        var b = arr.splice(a, 1)
        output.push(b[0])
        count--
      }
     return output
    }



    getter.done(function(response){
              var randy = randomNums()
        for (var i = 0; i < 3; i++) {

              $(".right").append("<img class='randomImg center' src='images/"+response['results'][randy.pop()]['cover_art']+"'>")
        }
    })

    











})
