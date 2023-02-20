let computer_pick = 0
let player_pick = 0
basic.showString("Welcome to Rock, Paper, Scissors.")
basic.showString("Press A for Rock, B for Paper, and A+B for scissors.")
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        player_pick = 1
    } else if (input.buttonIsPressed(Button.B)) {
        player_pick = 2
    } else if (input.buttonIsPressed(Button.AB)) {
        player_pick = 3
    }
    computer_pick = randint(1, 3)
    if (player_pick == 1 && computer_pick == 1) {
        basic.showString("You tied!")
    } else if (player_pick == 1 && computer_pick == 2) {
        basic.showString("You lost!")
    } else if (player_pick == 1 && computer_pick == 3) {
        basic.showString("You won!")
    } else if (player_pick == 2 && computer_pick == 1) {
        basic.showString("You won!")
    } else if (player_pick == 2 && computer_pick == 2) {
        basic.showString("You tied!")
    } else if (player_pick == 2 && computer_pick == 3) {
        basic.showString("You lost!")
    } else if (player_pick == 3 && computer_pick == 1) {
        basic.showString("You lost!")
    } else if (player_pick == 3 && computer_pick == 2) {
        basic.showString("You won!")
    } else if (player_pick == 3 && computer_pick == 3) {
        basic.showString("You tied!")
    }
})
