var ROUNT_LENGTH = 10;
var COLUMNS_LENGTH = 5;
var LEVELS = [
    "Novice",
    "Intermediate",
    "Advanced",
    "Elite"
];
var SHAPES = [
    "Tuck",
    "Pike",
    "Straight"
];
var HEADINGS = [
    "Number",
    "Skill",
    "Shape",
    "Tariff",
    "Comments"
];

var DUPLICATE_MOVE_MESSAGE = "Duplicate move";
var INVALID_LINK_MESSAGE = "Invalid move link";

var TABLE_CLASS = "table table-striped table-hover table-responsive";
var WARNING_CLASS = "text-danger";

function getSkill(inputSkillName) {
    for(var i = 0; i < SKILLS.length; i++){
        var element = SKILLS[i];
        if(inputSkillName == element.skill){
            return element;
        }
    }
    return false;
}

function validateMoves(inputDOM) {
    var DOM = inputDOM + " ";
    // Check duplicate moves
    for (var i = ROUNT_LENGTH; i >= 0; i--) {
        var initalSkillDom = $(DOM+"table tbody tr:eq("+i+") td:nth-child(2)").children();
        var initalSkill = initalSkillDom.val();
        if(!(initalSkill === "" || initalSkill === undefined)){
            for (var j = i - 1; j >= 0; j--) {
                var checkSkill = $(DOM+"table tbody tr:eq("+j+") td:nth-child(2)").children().val();
                if(initalSkill == checkSkill){
                    var initalSkillShape = $(DOM+"table tbody tr:eq("+i+") td:nth-child(3) form input:checked").val();
                    var checkSkillShape = $(DOM+"table tbody tr:eq("+j+") td:nth-child(3) form input:checked").val();;
                    if(checkSkillShape != initalSkillShape && getSkill(initalSkill).shaped){
                        removeWarnings(initalSkillDom.parents("tr"), DUPLICATE_MOVE_MESSAGE);
                    }else{
                        initalSkillDom.parents("tr").children("td:nth-child(5)").text(DUPLICATE_MOVE_MESSAGE);
                        initalSkillDom.parents("tr").children("td:nth-child(5)").addClass(WARNING_CLASS);
                        initalSkillDom.parents("tr").children("td:nth-child(4)").text("0");
                    }
                    break;
                }else{
                    removeWarnings(initalSkillDom.parents("tr"), DUPLICATE_MOVE_MESSAGE);
                }
            }
        }
    }
    // Check invalid links
    for (var i = ROUNT_LENGTH; i >= 0; i--) {
        var initalSkillDom = $(DOM+"table tbody tr:eq("+i+") td:nth-child(2)").children();
        var initalSkill = getSkill(initalSkillDom.val());

        if(initalSkill != false){
            if(i > 0){
                var previousSkillDom = $(DOM+"table tbody tr:eq("+(i-1)+") td:nth-child(2)").children();
                var previousSkill = getSkill(previousSkillDom.val());
                if(previousSkill != false && previousSkill.end_position != initalSkill.start_position){
                    initalSkillDom.parents("tr").children("td:nth-child(5)").text(INVALID_LINK_MESSAGE);
                    initalSkillDom.parents("tr").children("td:nth-child(5)").addClass(WARNING_CLASS);
                    initalSkillDom.parents("tr").children("td:nth-child(4)").text("0");
                }else{
                    removeWarnings(initalSkillDom.parents("tr"), INVALID_LINK_MESSAGE);
                }
            }
        }
    }
}

function caculateTotalTariff(inputDOM) {
    var DOM = inputDOM + " ";
    var total = 0.0;
    var tmpNum = 0.0;
    for (var i = 0; i < ROUNT_LENGTH; i++) {
        var tmpString = $(DOM+"table tbody tr:eq("+i+") td:nth-child(4)").text();
        if(tmpString !== ""){
            tmpNum = parseFloat(tmpString);
            total += tmpNum;
        }
    }
    return total.toFixed(1);
}

function removeWarnings(DOM, MESSAGE) {
    if(DOM.children("td:nth-child(5)").text() == MESSAGE){
        DOM.children("td:nth-child(5)").text("");
        DOM.children("td:nth-child(5)").removeClass(WARNING_CLASS);
    }
}

function initTariffCalculator(inputDOM){

    var DOM = inputDOM + " ";
    
    // Build table
    $(DOM).append("<table class=\""+TABLE_CLASS+"\">");
    $(DOM+"table").append("<thead>", "<tbody>", "<tfoot>");
    
    // Add headers
    $(DOM+"table thead").append("<tr>");
    HEADINGS.forEach(function(element) {
        $(DOM+"table thead tr").append("<th>"+element+"</th>");
    })
    
    // Build rows    
    for(var i = 0; i < ROUNT_LENGTH; i++){
        $(DOM + 'table tbody').append('<tr>');
    }
    
    // Add cells
    for(var i = 0; i < COLUMNS_LENGTH; i++){
        $(DOM + 'table tbody tr').append('<td>');
    };
    
    
    // Add index into cells
    $(DOM + 'table tbody tr').each(function (index) {
        $(this).children(":nth-child(1)").append(index + 1);
    });
    
    // Add select into cells
    $(DOM + 'table tbody tr').each(function (index) {
        $(this).children(":nth-child(2)").append('<select>');
    });
    
    // Add optgroup into select
    $(DOM + 'table tbody tr td:nth-child(2)').each(function (index) {
    
        var selectInput = $(this).children("select");
        LEVELS.forEach(function (element, levelsIndex) {
            selectInput.append('<optgroup label="'+element+'" ></optgroup>');
        })
    })
    
    // Add skills to correct optgroup
    $(DOM + 'table tbody tr td:nth-child(2)').each(function (index) {
        var selectInput = $(this).children("select");
        // Add inital empty select option    
        selectInput.prepend('<option value=""></option>');
        SKILLS.forEach(function (element, skillsIndex) {
            selectInput.children("optgroup[label="+element.level+"]").
                append('<option value="'+element.skill+'" >'+element.skill+'</option>');
        })
    })
    
    // Add radio buttons for shape
    $(DOM + ' table tbody tr td:nth-child(3)').each(function (index) {
        var formInput = $(this).append("<form>");
        SHAPES.forEach(function (element, shapesIndex) {
            formInput.children("form").append('<span>'+element.charAt(0)+'</span>')
            formInput.children("form").append('<input name="'+index+'" value="'+element+'" type="radio">');
        })
    })
    
    // Add bottom result row
    $(DOM + 'table tfoot').append('<tr><tr>');
    
    // Add cells to last
    for(var i = 0; i < COLUMNS_LENGTH; i++){
        $(DOM + 'table tfoot tr:eq(0)').append('<td></td>');
    };
    
    // Add text to info row
    $(DOM + 'table tfoot tr:eq(0) td:eq(2)').append('<strong>Total tariff</strong>');
    
    // Update tariff on skill change
    $(DOM + "table tbody tr td:nth-child(2) select").change(function () {
        var skill = getSkill($(this).val());
        $(this).parents("tr").children("td:nth-child(4)").text(skill.tariff)
    
        validateMoves(DOM);
        // Update total
        $(DOM + "table tfoot tr:eq(0) td:nth-child(4)").text(caculateTotalTariff(DOM)+"");
    });
    
    
    // Update tariff on shape change
    $(DOM + "table tbody tr td:nth-child(3) form input:radio").change(function(){
        var skillName = $(this).parents("tr").children("td:nth-child(2)").children().val();
        if(skillName != ""){
            var skill = getSkill(skillName);
            if($(this).val() == SHAPES[0]){
                $(this).parents("tr").children("td:nth-child(4)").text(skill.tariff+"")
            }
            else if($(this).val() == SHAPES[1] || $(this).val() == SHAPES[2]){
                if(skill.shaped){
                    var newTariff = parseFloat(skill.tariff) + parseFloat(skill.shape_bonus);
                    $(this).parents("tr").children("td:nth-child(4)").text(newTariff+"")
                }
            }
        }

        validateMoves(DOM);
        // Update total
        $(DOM + "table tfoot tr:eq(0) td:nth-child(4)").text(caculateTotalTariff(DOM)+"");
    });
}