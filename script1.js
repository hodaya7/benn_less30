$(document).ready(function(){
    var cnt=0;
    $(".btn").click(function(){
        if($(".input").val()!= ""){
            var newElem = $("<div class='task'></div>");
            newElem.text($(".input").val());
            $(".ele-container").append(newElem);
            cnt++;
            $(".input").val("");
            if (cnt==5)
            $(".btn").prop("disabled", true);
        }
    });

    $(".btn-remove").click(function(){
           $(".task").remove();
        //$(".ele-container .task").remove();
        cnt=0;
        $(".btn").prop("disabled", false);
    });
});

