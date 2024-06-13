//הרוט הוא הדוקומנט- נבדוק אם הוא כבר נטען
$(document).ready(function () {
    //בגיי קווארי יהיה דולר במקום קווארי סלקטור
    var input = $(".guess").val();
    //alert("def val: " + input);
    //שינוי הערך
    $(".guess").val(100);

    $(".guess").addClass("another-class");

    //יצירת אלמנט
    var add = $("<h1 class='heading'>i created from jquery</h1>");
    //    $("body").append(add);
    $(".container").append(add);

    $(".container2").append($("<p class='heading'>p in container 2</p>"))

    //הסרה
    $(".container .another-heading").remove();

    //אבנט ליסנר
    //בצורה זו הכפתור חייב להיות קיים קודם
    $(".btn1").click(function () {
        alert("u clicked btn1");
    });

    //אבנט ליסטנר על בן של אלמנט
    //בצורה זו הכפתור יכול להתווסף בזמן עתידי
    $(".container").on("click", ".btn2", function () {
        alert("u clicked btn2")
    });

    // שהכפתורים הפנימיים יעבדו נשתמש בצורה של הדליגייט אפילו מחוץ לפונקציה הנוכחית- ויתווסף להם הארוע
    $(".container").on("click", ".btn3", function () {
        var newTask = $("<div class='new-task'>new task</div>");
        // newTask.text(this.className);//שהדיב יוצג עם שם המחלקה btn3
        var deleteButton = $(" <button type='button' class='delete-btn'>delete task</button>");
        newTask.append(deleteButton);
        $(".task-container").append(newTask);
    });

    $(".task-container").on("click", ".delete-btn", function () {
        alert("h")
    })

    //קלט
    $(".input").keypress(function (key) {
        if (key.which == 13 && $(".input").val() != "") {//אם לחץ אנטר ויש ערך
            var newTask = $("<div class='task'></div>");
            newTask.text($(".input").val());
            $(".task-container").append(newTask);
            $(".input").val("");
        }
    })

});



