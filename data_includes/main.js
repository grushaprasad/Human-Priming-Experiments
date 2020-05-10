PennController.Sequence( "instructions", randomize("practice_trial1"), "start_exp1", randomize("without_precursor"), "end_part1", randomize("practice_trial2"), "start_exp2", randomize("with_precursor"), "demographic", "send_results", "exp_end");

PennController.ResetPrefix(null);

//PennController.PreloadZip("https://consonant-perception-exp1.s3.us-east-2.amazonaws.com/mp3_test.zip");


PennController("instructions",

    newTextInput("worker_id", "Please enter your MTurk worker ID")
        .settings.css("font-size", "larger")
        .settings.log()
        .settings.lines(0)
        .settings.size(400, 50)
        .print()
    ,

    newButton("enter_id", "Continue")
        .settings.css("font-size", "larger")
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
        .settings.center()
        .print()
        .wait()
        .remove()
    ,

    getText("instrutions")
        .remove()
    
);