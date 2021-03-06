/*!
 * jquery-tariff-calculator v1.0.0
 * Copyright 2015-2015 Jack kettle <jack.kettle2@mail.dcu.ie>
 * Licensed under MIT (https://github.com/jackkettle/jquery-tariff-calculator/blob/master/LICENSE)
 */
var SKILLS = [ {
    order: 0,
    level: "Elite",
    skill: "½ In ½ Out Triffus",
    shaped: 1,
    shape_bonus: .3,
    start_position: "Feet",
    end_position: "Feet",
    tariff: 1.8,
    fig_notation: "12 1 - 1 o",
    description: "Tripple back somersault with ½ twist in 1st somersault and ½ twists in 3rd somersault phase",
    id: 1
}, {
    order: 0,
    level: "Elite",
    skill: "½ In Rudi Out Triffus",
    shaped: 1,
    shape_bonus: .3,
    start_position: "Feet",
    end_position: "Feet",
    tariff: 2,
    fig_notation: "12 1 - 3 o",
    description: "Tripple back somersault with ½ twist in 1st somersault and 1½ twists in 3rd somersault phase",
    id: 2
}, {
    order: 0,
    level: "Elite",
    skill: "½ Out Triffus",
    shaped: 1,
    shape_bonus: .3,
    start_position: "Feet",
    end_position: "Feet",
    tariff: 1.7,
    fig_notation: "12 - - 1 o",
    description: "Triple somersault with ½ twist in the last somersault.",
    id: 3
}, {
    order: 0,
    level: "Elite",
    skill: "½ In - ½ Out",
    shaped: 1,
    shape_bonus: .2,
    start_position: "Feet",
    end_position: "Feet",
    tariff: 1.2,
    fig_notation: "8 1 1 o",
    description: "Double back somersault with ½ twist in each somersault phase",
    id: 4
}, {
    order: 0,
    level: "Elite",
    skill: "½ In - Back Out",
    shaped: 1,
    shape_bonus: .2,
    start_position: "Feet",
    end_position: "Feet",
    tariff: 1.1,
    fig_notation: "8 1 - o",
    description: "Double front somersault with ½ twist in 1st somersault",
    id: 5
}, {
    order: 0,
    level: "Elite",
    skill: "½ In - Randy Out",
    shaped: 1,
    shape_bonus: .2,
    start_position: "Feet",
    end_position: "Feet",
    tariff: 1.6,
    fig_notation: "8 1 5 o",
    description: "Double back somersault with ½ twist in 1st somersault and 2½ twists in 2nd somersault phase",
    id: 6
}, {
    order: 0,
    level: "Elite",
    skill: "½ In - Rudi Out",
    shaped: 1,
    shape_bonus: .2,
    start_position: "Feet",
    end_position: "Feet",
    tariff: 1.4,
    fig_notation: "8 1 3 o",
    description: "Double back somersault with ½ twist in 1st somersault and 1½ twists in 2nd somersault phase",
    id: 7
}, {
    order: 0,
    level: "Elite",
    skill: "½ Out",
    shaped: 1,
    shape_bonus: .2,
    start_position: "Feet",
    end_position: "Feet",
    tariff: 1.1,
    fig_notation: "8 - 1 o",
    description: "Double front somersault with ½ twist in 2nd somersault.",
    id: 8
}, {
    order: 0,
    level: "Elite",
    skill: "½ Out Quad",
    shaped: 1,
    shape_bonus: .4,
    start_position: "Feet",
    end_position: "Feet",
    tariff: 2.3,
    fig_notation: "16 - - - 1 o",
    description: "Quadruple somersault with ½ twist in the last somersault.",
    id: 9
}, {
    order: 1.4,
    level: "Novice",
    skill: "½ Twist Jump",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Feet",
    end_position: "Feet",
    tariff: .1,
    fig_notation: "0 1",
    description: "",
    id: 10
}, {
    order: 4.1,
    level: "Novice",
    skill: "½ Twist to Back Drop",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Feet",
    end_position: "Back",
    tariff: .2,
    fig_notation: "1 1",
    description: "",
    id: 11
}, {
    order: 1.1,
    level: "Advanced",
    skill: "½ Twist to Crash Dive",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Feet",
    end_position: "Back",
    tariff: .4,
    fig_notation: "3 1",
    description: "",
    id: 12
}, {
    order: 3.3,
    level: "Novice",
    skill: "½ Twist to Feet (from front)",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Front",
    end_position: "Feet",
    tariff: .2,
    fig_notation: "1 1",
    description: "",
    id: 13
}, {
    order: 4.3,
    level: "Novice",
    skill: "½ Twist to Feet (from back)",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Back",
    end_position: "Feet",
    tariff: .2,
    fig_notation: "1 1",
    description: "",
    id: 14
}, {
    order: 2.3,
    level: "Novice",
    skill: "½ Twist to Feet (from seat)",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Seat",
    end_position: "Feet",
    tariff: .1,
    fig_notation: "0 1",
    description: "",
    id: 15
}, {
    order: 3.1,
    level: "Novice",
    skill: "½ Twist to Front Drop",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Feet",
    end_position: "Front",
    tariff: .2,
    fig_notation: "1 1",
    description: "Backwards take off. Also known as an Airplane",
    id: 16
}, {
    order: 2.1,
    level: "Novice",
    skill: "½ Twist to Seat Drop",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Feet",
    end_position: "Seat",
    tariff: .1,
    fig_notation: "0 1",
    description: "",
    id: 17
}, {
    order: 0,
    level: "Elite",
    skill: "Double Front",
    shaped: 1,
    shape_bonus: .2,
    start_position: "Feet",
    end_position: "Feet",
    tariff: 1,
    fig_notation: "8 - - o",
    description: "Double frontsomersault",
    id: 81
}, {
    order: 1.5,
    level: "Novice",
    skill: "Full Twist Jump",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Feet",
    end_position: "Feet",
    tariff: .2,
    fig_notation: "0 2",
    description: "Variation of the Clara Twist Jump - The worst full twist ever undertaken by a person ever...",
    id: 19
}, {
    order: 0,
    level: "Elite",
    skill: "1 ¾ Front S/S",
    shaped: 1,
    shape_bonus: .2,
    start_position: "Feet",
    end_position: "Back",
    tariff: .8,
    fig_notation: "7 - o",
    description: "Also known as a 1 and 3",
    id: 20
}, {
    order: 0,
    level: "Elite",
    skill: "2 ¾ Front S/S",
    shaped: 1,
    shape_bonus: .2,
    start_position: "Feet",
    end_position: "Back",
    tariff: 1.3,
    fig_notation: "11 - - - o",
    description: "",
    id: 21
}, {
    order: 0,
    level: "Elite",
    skill: "Adolph",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Feet",
    end_position: "Feet",
    tariff: 1.2,
    fig_notation: "4 7 /",
    description: "3½ twisting front somersault. Also known as an Ady",
    id: 22
}, {
    order: 0,
    level: "Elite",
    skill: "Baby Fliffus",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Back",
    end_position: "Feet",
    tariff: .7,
    fig_notation: "5 1 -",
    description: "From back landing, 1 ¼ front somersault to feet with early half twist. Different move to barani ball-out, though it involves the same amount of rotation and twist from the same take off position.",
    id: 23
}, {
    order: 4,
    level: "Novice",
    skill: "Back Drop",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Feet",
    end_position: "Back",
    tariff: .1,
    fig_notation: "1 -",
    description: "",
    id: 24
}, {
    order: 0,
    level: "Elite",
    skill: "Back In - Full Out",
    shaped: 1,
    shape_bonus: .2,
    start_position: "Feet",
    end_position: "Feet",
    tariff: 1.2,
    fig_notation: "8 - 2 o",
    description: "Double back somersault with 1 twist in 2nd somersault phase",
    id: 25
}, {
    order: 2,
    level: "Intermediate",
    skill: "Back Pullover to Feet",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Back",
    end_position: "Feet",
    tariff: .3,
    fig_notation: "3 -",
    description: "¾ back somersault from back landing",
    id: 26
}, {
    order: 4,
    level: "Intermediate",
    skill: "Back S/S",
    shaped: 1,
    shape_bonus: .1,
    start_position: "Feet",
    end_position: "Feet",
    tariff: .5,
    fig_notation: "4 - o",
    description: "",
    id: 27
}, {
    order: 4.1,
    level: "Intermediate",
    skill: "Back S/S to Seat",
    shaped: 1,
    shape_bonus: .1,
    start_position: "Feet",
    end_position: "Seat",
    tariff: .5,
    fig_notation: "4 - o",
    description: "",
    id: 28
}, {
    order: 4.2,
    level: "Novice",
    skill: "To Feet (from back)",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Back",
    end_position: "Feet",
    tariff: .1,
    fig_notation: "1 -",
    description: "",
    id: 29
}, {
    order: 1.2,
    level: "Advanced",
    skill: "Ball Out",
    shaped: 1,
    shape_bonus: 0,
    start_position: "Back",
    end_position: "Feet",
    tariff: .6,
    fig_notation: "5 - o",
    description: "1 ¼ front somersault from back landing to feet",
    id: 30
}, {
    order: 0,
    level: "Elite",
    skill: "Ball Out - ½ Out",
    shaped: 1,
    shape_bonus: .2,
    start_position: "Back",
    end_position: "Feet",
    tariff: 1.2,
    fig_notation: "9 - 1 o",
    description: "",
    id: 31
}, {
    order: 0,
    level: "Elite",
    skill: "Ball Out - Adolf",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Back",
    end_position: "Feet",
    tariff: 1.3,
    fig_notation: "5 7 /",
    description: "",
    id: 32
}, {
    order: 0,
    level: "Elite",
    skill: "Ball Out - Barani",
    shaped: 1,
    shape_bonus: 0,
    start_position: "Back",
    end_position: "Feet",
    tariff: .7,
    fig_notation: "5 1 o",
    description: "1 ¼ front somersault (from back landing) with ½ twist to feet",
    id: 33
}, {
    order: 0,
    level: "Elite",
    skill: "Ball Out - Randy",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Back",
    end_position: "Feet",
    tariff: 1.1,
    fig_notation: "5 5 /",
    description: "1 ¼ front somersault (from back landing) with 2½ twists to feet",
    id: 34
}, {
    order: 0,
    level: "Elite",
    skill: "Ball Out - Rudy",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Back",
    end_position: "Feet",
    tariff: .9,
    fig_notation: "5 3 /",
    description: "1 ¼ front somersault (from back landing) with 1½ twists to feet",
    id: 35
}, {
    order: 3.1,
    level: "Intermediate",
    skill: "Barani",
    shaped: 1,
    shape_bonus: 0,
    start_position: "Feet",
    end_position: "Feet",
    tariff: .6,
    fig_notation: "4 1 o",
    description: "Front somersault with ½ twist",
    id: 36
}, {
    order: 0,
    level: "Elite",
    skill: "Barani In - Back Out",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Feet",
    end_position: "Feet",
    tariff: 1.1,
    fig_notation: "8 1 - /",
    description: "Double front somersault with ½ twist (in the first somersault phase)",
    id: 37
}, {
    order: 0,
    level: "Elite",
    skill: "Barani Out",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Feet",
    end_position: "Feet",
    tariff: 1.1,
    fig_notation: "8 - 1 /",
    description: "Double front somersault with ½ twist (in the second somersault phase).",
    id: 38
}, {
    order: 2.1,
    level: "Intermediate",
    skill: "Turnover / Bounce Roll",
    shaped: 1,
    shape_bonus: 0,
    start_position: "Back",
    end_position: "Back",
    tariff: .5,
    fig_notation: "4 - o",
    description: "Front somersault from back landing to back landing",
    id: 40
}, {
    order: 1.3,
    level: "Intermediate",
    skill: "Cat Twist",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Back",
    end_position: "Back",
    tariff: .2,
    fig_notation: "0 2",
    description: "Full twist from back to back rotating around longitudinal axis, the same axis as normal full twists. There is no somersault rotation",
    id: 41
}, {
    order: 1.4,
    level: "Advanced",
    skill: "Cody",
    shaped: 1,
    shape_bonus: .1,
    start_position: "Front",
    end_position: "Feet",
    tariff: .6,
    fig_notation: "5 - o",
    description: "Any somersault from front landing. Usually 1 ¼ back somersault from front to feet but ¾ front somersaulting cody is also seen",
    id: 42
}, {
    order: 2,
    level: "Advanced",
    skill: "Corkscrew",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Back",
    end_position: "Back",
    tariff: .5,
    fig_notation: "2 3",
    description: "From back landing, 1½ twists to back drop (with 180&deg; forward rotation). In other words a cradle with an extra full twist",
    id: 43
}, {
    order: 1.4,
    level: "Intermediate",
    skill: "Cradle",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Back",
    end_position: "Back",
    tariff: .3,
    fig_notation: "2 1",
    description: "Starting from back, ½ twist to back with 180&deg; forward rotation around lateral axis",
    id: 44
}, {
    order: 1,
    level: "Advanced",
    skill: "Crash Dive",
    shaped: 1,
    shape_bonus: 0,
    start_position: "Feet",
    end_position: "Back",
    tariff: .3,
    fig_notation: "3 - o",
    description: "¾ front somersault from feet to back landing",
    id: 45
}, {
    order: 0,
    level: "Elite",
    skill: "Double Back",
    shaped: 1,
    shape_bonus: .2,
    start_position: "Feet",
    end_position: "Feet",
    tariff: 1,
    fig_notation: "8 - - o",
    description: "Double back somersault",
    id: 46
}, {
    order: 0,
    level: "Elite",
    skill: "Double Bounce-Roll",
    shaped: 1,
    shape_bonus: .2,
    start_position: "Back",
    end_position: "Back",
    tariff: 1,
    fig_notation: "8 - - o",
    description: "Double front somersault (720&deg;) from back landing to back landing",
    id: 47
}, {
    order: 0,
    level: "Elite",
    skill: "Double Full",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Feet",
    end_position: "Feet",
    tariff: .9,
    fig_notation: "4 4 /",
    description: "Single back somersault with 2 twists",
    id: 48
}, {
    order: 3,
    level: "Novice",
    skill: "Front Drop",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Feet",
    end_position: "Front",
    tariff: .1,
    fig_notation: "1 -",
    description: "",
    id: 49
}, {
    order: 3,
    level: "Intermediate",
    skill: "Front S/S",
    shaped: 1,
    shape_bonus: .1,
    start_position: "Feet",
    end_position: "Feet",
    tariff: .5,
    fig_notation: "4 - o",
    description: "",
    id: 50
}, {
    order: 3.2,
    level: "Novice",
    skill: "To Feet (from front)",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Front",
    end_position: "Feet",
    tariff: .1,
    fig_notation: "1 -",
    description: "",
    id: 51
}, {
    order: 0,
    level: "Elite",
    skill: "Full",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Feet",
    end_position: "Feet",
    tariff: .7,
    fig_notation: "4 2 /",
    description: "Single back somersault with 1 twist",
    id: 52
}, {
    order: 0,
    level: "Elite",
    skill: "Full In - ½ Out",
    shaped: 1,
    shape_bonus: .2,
    start_position: "Feet",
    end_position: "Feet",
    tariff: 1.3,
    fig_notation: "8 2 1 o",
    description: "Double front somersault with 1 twist in 1st somersault, ½ twist in 2nd somersault",
    id: 53
}, {
    order: 0,
    level: "Elite",
    skill: "Full In - Back Out",
    shaped: 1,
    shape_bonus: .2,
    start_position: "Feet",
    end_position: "Feet",
    tariff: 1.2,
    fig_notation: "8 2 - o",
    description: "Double back somersault with 1 twist in 1st somersault",
    id: 54
}, {
    order: 0,
    level: "Elite",
    skill: "Full In - Double Full Out",
    shaped: 1,
    shape_bonus: .2,
    start_position: "Feet",
    end_position: "Feet",
    tariff: 1.6,
    fig_notation: "8 2 4 o",
    description: "",
    id: 55
}, {
    order: 0,
    level: "Elite",
    skill: "Full In - Full Out",
    shaped: 1,
    shape_bonus: .2,
    start_position: "Feet",
    end_position: "Feet",
    tariff: 1.4,
    fig_notation: "8 2 2 o",
    description: "Double back somersault with 1 twist in both 360&deg; phases",
    id: 56
}, {
    order: 0,
    level: "Elite",
    skill: "Full In - Rudi Out",
    shaped: 1,
    shape_bonus: .2,
    start_position: "Feet",
    end_position: "Feet",
    tariff: 1.5,
    fig_notation: "8 2 3 o",
    description: "Double front somersault with 1 twist in 1st somersault, 1½ twist in 2nd somersault",
    id: 57
}, {
    order: 0,
    level: "Elite",
    skill: "Full Out",
    shaped: 1,
    shape_bonus: .2,
    start_position: "Feet",
    end_position: "Feet",
    tariff: 1.2,
    fig_notation: "8 - 2 o",
    description: "Double back somersault with 1 twist in 2nd somersault",
    id: 58
}, {
    order: 2.4,
    level: "Novice",
    skill: "Full Twist to Feet (from seat)",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Seat",
    end_position: "Feet",
    tariff: .2,
    fig_notation: "0 2",
    description: "",
    id: 60
}, {
    order: 4.4,
    level: "Novice",
    skill: "Full Twist to Feet (from back)",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Back",
    end_position: "Feet",
    tariff: .3,
    fig_notation: "1 2",
    description: "",
    id: 61
}, {
    order: 3.4,
    level: "Novice",
    skill: "Full Twist to Feet (from front)",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Front",
    end_position: "Feet",
    tariff: .3,
    fig_notation: "1 2",
    description: "",
    id: 62
}, {
    order: 1.3,
    level: "Advanced",
    skill: "Lazy Back",
    shaped: 1,
    shape_bonus: 0,
    start_position: "Feet",
    end_position: "Front",
    tariff: .3,
    fig_notation: "3 - o",
    description: "",
    id: 63
}, {
    order: 1.2,
    level: "Intermediate",
    skill: "Log Roll",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Front",
    end_position: "Front",
    tariff: .2,
    fig_notation: "0 2",
    description: "Full twist from front to front rotating around the longitudinal axis. Not the same as Cruise (lateral axis) or a Turntable (dorso-ventral axis) both of which also start and end in front position",
    id: 64
}, {
    order: 0,
    level: "Elite",
    skill: "Miller",
    shaped: 1,
    shape_bonus: .2,
    start_position: "Feet",
    end_position: "Feet",
    tariff: 1.6,
    fig_notation: "8 2 1 o",
    description: "",
    id: 65
}, {
    order: 1.3,
    level: "Novice",
    skill: "Pike Jump",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Feet",
    end_position: "Feet",
    tariff: 0,
    fig_notation: "<",
    description: "",
    id: 66
}, {
    order: 0,
    level: "Elite",
    skill: "Poliarush / Miller Plus",
    shaped: 1,
    shape_bonus: .2,
    start_position: "Feet",
    end_position: "Feet",
    tariff: 1.8,
    fig_notation: "8 4 4 o",
    description: "Double back somersault with 2 twists in each. Also known as a killer. Named after",
    id: 67
}, {
    order: 0,
    level: "Elite",
    skill: "Randolph / Randy",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Feet",
    end_position: "Feet",
    tariff: 1,
    fig_notation: "4 5 /",
    description: "Single front somersault with 2½ twists",
    id: 68
}, {
    order: 0,
    level: "Elite",
    skill: "Randy Out",
    shaped: 1,
    shape_bonus: .2,
    start_position: "Feet",
    end_position: "Feet",
    tariff: 1.5,
    fig_notation: "8 - 5 o",
    description: "Double front somersault with 2½ twists in 2nd somersult",
    id: 69
}, {
    order: 1.1,
    level: "Intermediate",
    skill: "Roller",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Seat",
    end_position: "Seat",
    tariff: .2,
    fig_notation: "0 2",
    description: "Full twist from seat to seat rotating around the longitudinal axis. The same axis as normal full twists",
    id: 70
}, {
    order: 0,
    level: "Elite",
    skill: "Rudi Out",
    shaped: 1,
    shape_bonus: .2,
    start_position: "Feet",
    end_position: "Feet",
    tariff: 1.3,
    fig_notation: "8 - 3 o",
    description: "Double front somersault with 1½ twists in 2nd somersult",
    id: 71
}, {
    order: 0,
    level: "Elite",
    skill: "Rudi Out Triffus",
    shaped: 1,
    shape_bonus: .2,
    start_position: "Feet",
    end_position: "Feet",
    tariff: 1.8,
    fig_notation: "12 - - 3 o",
    description: "Tripple front somersault with 1½ twists",
    id: 72
}, {
    order: 0,
    level: "Elite",
    skill: "Rudolph / Rudi",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Feet",
    end_position: "Feet",
    tariff: .8,
    fig_notation: "4 3 /",
    description: "Single front somersault with 1½ twists",
    id: 73
}, {
    order: 2.5,
    level: "Novice",
    skill: "Seat ½ Twist to Seat Drop",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Seat",
    end_position: "Seat",
    tariff: .1,
    fig_notation: "0 1",
    description: "",
    id: 74
}, {
    order: 2,
    level: "Novice",
    skill: "Seat Drop",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Feet",
    end_position: "Seat",
    tariff: 0,
    fig_notation: "0 -",
    description: "",
    id: 75
}, {
    order: 2.2,
    level: "Novice",
    skill: "To Feet (from seat)",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Seat",
    end_position: "Feet",
    tariff: 0,
    fig_notation: "0 -",
    description: "",
    id: 76
}, {
    order: 1.2,
    level: "Novice",
    skill: "Straddle Jump",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Feet",
    end_position: "Feet",
    tariff: 0,
    fig_notation: "0 -",
    description: "",
    id: 77
}, {
    order: 0,
    level: "Elite",
    skill: "Triffus (Pike)",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Feet",
    end_position: "Feet",
    tariff: 1.8,
    fig_notation: "12 - - 1 <",
    description: "",
    id: 79
}, {
    order: 1.1,
    level: "Novice",
    skill: "Tuck Jump",
    shaped: 0,
    shape_bonus: 0,
    start_position: "Feet",
    end_position: "Feet",
    tariff: 0,
    fig_notation: "o",
    description: "",
    id: 80
}, {
    order: 0,
    level: "Elite",
    skill: "Periwinkle",
    shaped: 0,
    shape_bonus: .2,
    start_position: "Feet",
    end_position: "Back",
    tariff: 1,
    fig_notation: "7 2 - o",
    description: "1 ¾ front somersault with full twist in the first somersault",
    id: 82
} ];

function compare(a, b) {
    if (a.tariff < b.tariff) return -1;
    if (a.tariff > b.tariff) return 1;
    return 0;
}

SKILLS.sort(compare);

var ROUNT_LENGTH = 10;

var COLUMNS_LENGTH = 5;

var LEVELS = [ "Novice", "Intermediate", "Advanced", "Elite" ];

var SHAPES = [ "Tuck", "Pike", "Straight" ];

var HEADINGS = [ "Number", "Skill", "Shape", "Tariff", "Comments" ];

var DUPLICATE_MOVE_MESSAGE = "Duplicate move";

var INVALID_LINK_MESSAGE = "Invalid move link";

var TABLE_CLASS = "table table-striped table-hover table-responsive";

var WARNING_CLASS = "text-danger";

function getSkill(inputSkillName) {
    for (var i = 0; i < SKILLS.length; i++) {
        var element = SKILLS[i];
        if (inputSkillName == element.skill) {
            return element;
        }
    }
    return false;
}

function validateMoves(inputDOM) {
    var DOM = inputDOM + " ";
    for (var i = ROUNT_LENGTH; i >= 0; i--) {
        var initalSkillDom = $(DOM + "table tbody tr:eq(" + i + ") td:nth-child(2)").children();
        var initalSkill = initalSkillDom.val();
        if (!(initalSkill === "" || initalSkill === undefined)) {
            for (var j = i - 1; j >= 0; j--) {
                var checkSkill = $(DOM + "table tbody tr:eq(" + j + ") td:nth-child(2)").children().val();
                if (initalSkill == checkSkill) {
                    var initalSkillShape = $(DOM + "table tbody tr:eq(" + i + ") td:nth-child(3) form input:checked").val();
                    var checkSkillShape = $(DOM + "table tbody tr:eq(" + j + ") td:nth-child(3) form input:checked").val();
                    if (checkSkillShape != initalSkillShape && getSkill(initalSkill).shaped) {
                        removeWarnings(initalSkillDom.parents("tr"), DUPLICATE_MOVE_MESSAGE);
                    } else {
                        initalSkillDom.parents("tr").children("td:nth-child(5)").text(DUPLICATE_MOVE_MESSAGE);
                        initalSkillDom.parents("tr").children("td:nth-child(5)").addClass(WARNING_CLASS);
                        initalSkillDom.parents("tr").children("td:nth-child(4)").text("0");
                    }
                    break;
                } else {
                    removeWarnings(initalSkillDom.parents("tr"), DUPLICATE_MOVE_MESSAGE);
                }
            }
        }
    }
    for (var i = ROUNT_LENGTH; i >= 0; i--) {
        var initalSkillDom = $(DOM + "table tbody tr:eq(" + i + ") td:nth-child(2)").children();
        var initalSkill = getSkill(initalSkillDom.val());
        if (initalSkill != false) {
            if (i > 0) {
                var previousSkillDom = $(DOM + "table tbody tr:eq(" + (i - 1) + ") td:nth-child(2)").children();
                var previousSkill = getSkill(previousSkillDom.val());
                if (previousSkill != false && previousSkill.end_position != initalSkill.start_position) {
                    initalSkillDom.parents("tr").children("td:nth-child(5)").text(INVALID_LINK_MESSAGE);
                    initalSkillDom.parents("tr").children("td:nth-child(5)").addClass(WARNING_CLASS);
                    initalSkillDom.parents("tr").children("td:nth-child(4)").text("0");
                } else {
                    removeWarnings(initalSkillDom.parents("tr"), INVALID_LINK_MESSAGE);
                }
            }
        }
    }
}

function caculateTotalTariff(inputDOM) {
    var DOM = inputDOM + " ";
    var total = 0;
    var tmpNum = 0;
    for (var i = 0; i < ROUNT_LENGTH; i++) {
        var tmpString = $(DOM + "table tbody tr:eq(" + i + ") td:nth-child(4)").text();
        if (tmpString !== "") {
            tmpNum = parseFloat(tmpString);
            total += tmpNum;
        }
    }
    return total.toFixed(1);
}

function removeWarnings(DOM, MESSAGE) {
    if (DOM.children("td:nth-child(5)").text() == MESSAGE) {
        DOM.children("td:nth-child(5)").text("");
        DOM.children("td:nth-child(5)").removeClass(WARNING_CLASS);
    }
}

function initTariffCalculator(inputDOM) {
    var DOM = inputDOM + " ";
    $(DOM).append('<table class="' + TABLE_CLASS + '">');
    $(DOM + "table").append("<thead>", "<tbody>", "<tfoot>");
    $(DOM + "table thead").append("<tr>");
    HEADINGS.forEach(function(element) {
        $(DOM + "table thead tr").append("<th>" + element + "</th>");
    });
    for (var i = 0; i < ROUNT_LENGTH; i++) {
        $(DOM + "table tbody").append("<tr>");
    }
    for (var i = 0; i < COLUMNS_LENGTH; i++) {
        $(DOM + "table tbody tr").append("<td>");
    }
    $(DOM + "table tbody tr").each(function(index) {
        $(this).children(":nth-child(1)").append(index + 1);
    });
    $(DOM + "table tbody tr").each(function(index) {
        $(this).children(":nth-child(2)").append("<select>");
    });
    $(DOM + "table tbody tr td:nth-child(2)").each(function(index) {
        var selectInput = $(this).children("select");
        LEVELS.forEach(function(element, levelsIndex) {
            selectInput.append('<optgroup label="' + element + '" ></optgroup>');
        });
    });
    $(DOM + "table tbody tr td:nth-child(2)").each(function(index) {
        var selectInput = $(this).children("select");
        selectInput.prepend('<option value=""></option>');
        SKILLS.forEach(function(element, skillsIndex) {
            selectInput.children("optgroup[label=" + element.level + "]").append('<option value="' + element.skill + '" >' + element.skill + "</option>");
        });
    });
    $(DOM + " table tbody tr td:nth-child(3)").each(function(index) {
        var formInput = $(this).append("<form>");
        SHAPES.forEach(function(element, shapesIndex) {
            formInput.children("form").append("<span>" + element.charAt(0) + "</span>");
            formInput.children("form").append('<input name="' + index + '" value="' + element + '" type="radio">');
        });
    });
    $(DOM + "table tfoot").append("<tr><tr>");
    for (var i = 0; i < COLUMNS_LENGTH; i++) {
        $(DOM + "table tfoot tr:eq(0)").append("<td></td>");
    }
    $(DOM + "table tfoot tr:eq(0) td:eq(2)").append("<strong>Total tariff</strong>");
    $(DOM + "table tbody tr td:nth-child(2) select").change(function() {
        var skill = getSkill($(this).val());
        $(this).parents("tr").children("td:nth-child(4)").text(skill.tariff);
        validateMoves(DOM);
        $(DOM + "table tfoot tr:eq(0) td:nth-child(4)").text(caculateTotalTariff(DOM) + "");
    });
    $(DOM + "table tbody tr td:nth-child(3) form input:radio").change(function() {
        var skillName = $(this).parents("tr").children("td:nth-child(2)").children().val();
        if (skillName != "") {
            var skill = getSkill(skillName);
            if ($(this).val() == SHAPES[0]) {
                $(this).parents("tr").children("td:nth-child(4)").text(skill.tariff + "");
            } else if ($(this).val() == SHAPES[1] || $(this).val() == SHAPES[2]) {
                if (skill.shaped) {
                    var newTariff = parseFloat(skill.tariff) + parseFloat(skill.shape_bonus);
                    $(this).parents("tr").children("td:nth-child(4)").text(newTariff + "");
                }
            }
        }
        validateMoves(DOM);
        $(DOM + "table tfoot tr:eq(0) td:nth-child(4)").text(caculateTotalTariff(DOM) + "");
    });
}