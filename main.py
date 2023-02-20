computer_pick = 0
player_pick = 0
basic.show_string("Welcome to Rock, Paper, Scissors.")
basic.show_string("Press A for Rock, B for Paper, and A+B for scissors.")

def on_forever():
    global player_pick, computer_pick
    if input.button_is_pressed(Button.A):
        player_pick = 1
    elif input.button_is_pressed(Button.B):
        player_pick = 2
    elif input.button_is_pressed(Button.AB):
        player_pick = 3
    computer_pick = randint(1, 3)
    if player_pick == 1 and computer_pick == 1:
        basic.show_string("You tied!")
    elif player_pick == 1 and computer_pick == 2:
        basic.show_string("You lost!")
    elif player_pick == 1 and computer_pick == 3:
        basic.show_string("You won!")
    elif player_pick == 2 and computer_pick == 1:
        basic.show_string("You won!")
    elif player_pick == 2 and computer_pick == 2:
        basic.show_string("You tied!")
    elif player_pick == 2 and computer_pick == 3:
        basic.show_string("You lost!")
    elif player_pick == 3 and computer_pick == 1:
        basic.show_string("You lost!")
    elif player_pick == 3 and computer_pick == 2:
        basic.show_string("You won!")
    elif player_pick == 3 and computer_pick == 3:
        basic.show_string("You tied!")
basic.forever(on_forever)
