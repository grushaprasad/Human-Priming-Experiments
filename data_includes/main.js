// PennController.Sequence( "instructions", randomize("practice_trial1"), "start_exp1", randomize("without_precursor"), "end_part1", randomize("practice_trial2"), "start_exp2", randomize("with_precursor"), "demographic", "send_results", "exp_end");

PennController.Sequence("instructions", "experiment");

PennController.ResetPrefix(null);

//PennController.PreloadZip("https://consonant-perception-exp1.s3.us-east-2.amazonaws.com/mp3_test.zip");


PennController("instructions",

    newTextInput("worker_id", "Please enter your MTurk worker ID")
        .settings.css("font-size", "large")
        .settings.log()
        .settings.lines(0)
        .settings.size(400, 50)
        .print()
    ,

    newButton("enter_id", "Continue")
        .settings.css("font-size", "larger")
        .settings.center()
        .print()
        .wait()
        .remove()
    ,

    getTextInput("worker_id")
        .remove()
    ,

    newText("instrutions", "<p> In this experiment, you will see pairs of sentences and you will then be asked to answer a question about one of the two sentences. In total, you will be seeing 50 pairs of sentences.  </p>" )
        .settings.size(800, 100)
        .settings.css("font-size", "larger")
        .print()
    ,
    
    newButton("start_practice1", "Begin practice")
        .settings.css("font-size", "larger")
        .settings.css("object-position", "250px 125px")
        .settings.center()
        .print()
        .wait()
        .remove()
    ,

    getText("instrutions")
        .remove()
    
);

PennController.Template(row => PennController( "experiment" ,
    
    newText("Prime", row.prime)
        .settings.css("font-size", "larger")
        .print()
    ,
    
    newButton("prime", "Continue")
        .settings.css("font-size", "larger")
        .settings.css("margin", "4em")
        .settings.log()
        .print()
        .wait()
        .remove()
    ,

    getText("Prime")
        .remove()
    ,

    newText("Target", row.target)
        .settings.css("font-size", "larger")
        .print()
    ,
        
    newButton("target", "Continue")
        .settings.css("font-size", "larger")
        .settings.css("margin", "4em")
        .settings.log()
        .print()
        .wait()
        .remove()
    ,

    getText("Target")
        .remove()
    ,

    newText("transition", "Please wait for the question")
        .settings.css("font-size", "larger")
        .print()
    ,

    newTimer("ITI", 1000)
        .start()
        .wait()
    ,

    getText("transition")
        .remove()
    ,

    newText("Question", row.question)
        .settings.css("font-size", "larger")
        .print()
    ,

    newScale("response",   "Yes", "No")
        .settings.log()
        .settings.labelsPosition("top")  // Position the labels
        .settings.css("font-size", "larger")
        .settings.css("margin", "4em")
        .print()
        .wait()
    ,

    getText("Question")
        .remove()

    ,

    getScale("response")
        .remove()
    ,


    newTimer("ITI", 1000)
        .start()
        .wait()
    )


    .log("prime_type", row.prime_type)
    .log("target_type", row.target_type)
    .log("prime_id", row.prime_id)
    .log("target_id", row.target_id)
    .log("answer", row.answer)
    .log("ques_ind", row.ques_ind)
    .log("group", row.Group)
);





