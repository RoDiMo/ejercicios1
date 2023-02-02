$(function() {

      $.ajax({
        url: "/dom/",
        type: "GET",
        dataType: "json",
        success: (data) => {

            $("#testdiv").append("<h1>Subtitulo</h1> <ul></ul>")
            let dato;
            for(dato of data.data){
                $("ul").first().append("<li></li>")
                $("li").last().append("<img src=" + dato.src + "  /> <p>" + dato.desc + "</p> <ul class = specs></ul>")
                for(spec of dato.specs){
                    $("ul").last().append("<li>" + spec + "</li>")
                }
            }
            $("img").click(function (){
                $(this).siblings().toggle()
            })
        },
        error: (error) => {
          console.log(error);
        }
      });
})