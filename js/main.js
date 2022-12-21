$(".btn_next").click(function() {
    var valattr = $(".form_block.active").attr('date-value');
    let num = Number(valattr);
    let blockNum = num+1;
    
    $(".lines .line.active").removeClass("active");
    $(".lines .line"+blockNum).addClass("active");
    $(".lines .line.active").prevAll().addClass("active");

    $(".form_block.active").removeClass("active");
    $(".form_block"+blockNum).addClass("active");

    if(blockNum == 2) {
        $(".form_buttons .btn_prev").removeClass("none");
    }
    if(blockNum == 4) {
        $(".step").removeClass("active");
        $(".step2").addClass("active");
        $(".step2").prevAll().addClass("done");
    }
    if(blockNum == 5) {
        $(".step").removeClass("active");
        $(".step3").addClass("active");
        $(".step3").prevAll().addClass("done");
    }
    if(blockNum == 6) {
        $(".step").removeClass("active");
        $(".step4").addClass("active");
        $(".step4").prevAll().addClass("done");
    }
    if(blockNum == 8) {
        $(".step").removeClass("active");
        $(".step5").addClass("active");
        $(".step5").prevAll().addClass("done");
    }
    if(blockNum == 9) {
        $(".step").removeClass("active");
        $(".step6").addClass("active");
        $(".step6").prevAll().addClass("done");
        $(".form_buttons").addClass("none");
        $(".lines .line").addClass("active");
    }
});

$(".btn_prev").click(function() {
    var valattr = $(".form_block.active").attr('date-value');
    let num = Number(valattr);
    let blockNum = num-1;

    $(".lines .line.active").removeClass("active");
    $(".lines .line"+blockNum).addClass("active");
    $(".lines .line.active").prevAll().addClass("active");
    
    $(".form_block.active").removeClass("active");
    $(".form_block"+blockNum).addClass("active");

    if(blockNum == 1) {
        $(".form_buttons .btn_prev").addClass("none");
    }
    if(blockNum == 7) {
        $(".step").removeClass("active");
        $(".step").removeClass("done");
        $(".step4").addClass("active");
        $(".step4").prevAll().addClass("done");
    }
    if(blockNum == 5) {
        $(".step").removeClass("active");
        $(".step").removeClass("done");
        $(".step3").addClass("active");
        $(".step3").prevAll().addClass("done");
    }
    if(blockNum == 4) {
        $(".step").removeClass("active");
        $(".step").removeClass("done");
        $(".step2").addClass("active");
        $(".step2").prevAll().addClass("done");
    }
    if(blockNum == 3) {
        $(".step").removeClass("active");
        $(".step").removeClass("done");
        $(".step1").addClass("active");
    }
});