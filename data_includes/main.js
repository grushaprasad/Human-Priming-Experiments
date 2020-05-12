// PennController.Sequence( "instructions", randomize("practice_trial1"), "start_exp1", randomize("without_precursor"), "end_part1", randomize("practice_trial2"), "start_exp2", randomize("with_precursor"), "demographic", "send_results", "exp_end");

PennController.Sequence("consent", "instructions", "experiment");

PennController.ResetPrefix(null);

//PennController.PreloadZip("https://consonant-perception-exp1.s3.us-east-2.amazonaws.com/mp3_test.zip");


PennController("consent",

    newHtml("consent", "consent.html")
        .settings.log()
        .print()
    ,

    newButton("continue", "Continue")
        .settings.css("font-size", "larger")
        .print()
        .wait(
            getHtml("consent").test.complete()
                .failure( getHtml("consent").warn() )
        )
);


PennController("instructions",

    newHtml("instructions", "instructions.html")
        .settings.log()
        .print()
    ,

    newButton("continue", "Start experiment")
        .settings.css("font-size", "larger")
        .print()
        .wait(
            getHtml("instructions").test.complete()
                .failure( getHtml("instructions").warn() )
        )
);



PennController.Template(row => PennController( "experiment" ,
    
    newText("Prime", row.prime)
        .settings.center()
        .print()
    ,
    
    newButton("prime", "Continue")
        .settings.center()
        .settings.log()
        .print()
        .wait()
        .remove()
    ,

    getText("Prime")
        .remove()
    ,

    newText("Target", row.target)
        .settings.center()
        .print()
    ,
        
    newButton("target", "Continue")
        .settings.center()
        .settings.log()
        .print()
        .wait()
        .remove()
    ,

    getText("Target")
        .remove()
    ,

    newText("transition", "Please wait for the question")
        .settings.center()
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
        .settings.center()
        .print()
    ,

    newScale("response",   "Yes", "No")
        .settings.log()
        .settings.labelsPosition("top")  // Position the labels
        .settings.center()
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


PennController("demographic",

    newHtml("demographics", "demographic.html")
        .settings.log()
        .print()
    ,

    newButton("continue", "Continue")
        .settings.css("font-size", "larger")
        .print()
        .wait(
            getHtml("demographics").test.complete()
                .failure( getHtml("demographics").warn() )
        )
);

PennController("participant_obs",

    newHtml("participant_obervations", "participant_obervations.html")
        .settings.log()
        .print()
    ,

    newButton("continue", "Finish experiment")
        .settings.css("font-size", "larger")
        .print()
        .wait(
            getHtml("participant_obervations").test.complete()
                .failure( getHtml("participant_obervations").warn() )
        )
);


PennController("exp_end", 
    newText("end", "Thank you for participating in this experiment. Your survey code is TyhRSx3k7")
        .print()
    ,

    newTimer("forever", 1)
        .wait()            // Timer never started: will wait forever
)








