/**
 * Demo to move servo to desired angle - this is received from a transmitter
 * 
 * https://makecode.microbit.org/_YUeittH0FgUX
 * 
 * In this case servo is controlled by RobotBit by Kittenbot
 */
// Test Function
// Prees B on Micro:Bit to move serve to this angle
// 
input.onButtonPressed(Button.B, function () {
    robotbit.Servo(robotbit.Servos.S8, 45)
})
// When desired angle received from transmitter , make sure it is not out of normal servo range ( 0 - 180 ) & then move servo to that angle
radio.onReceivedNumber(function (receivedNumber) {
    Rec_Num = receivedNumber
    Servo_Angle = Rec_Num
    if (Servo_Angle > 180) {
        Servo_Angle = 180
    } else if (Servo_Angle < 0) {
        Servo_Angle = 0
    }
    robotbit.Servo(robotbit.Servos.S8, Servo_Angle)
})
// Test function
// 
// Press A on Micro:Bit to move servo to random angle
input.onButtonPressed(Button.A, function () {
    robotbit.Servo(robotbit.Servos.S8, randint(0, 180))
})
// Set initial servo angle to 90 - this is the center posistion of most servos 0 - 180
// 
let Rec_Num = 0
let Servo_Angle = 0
radio.setGroup(55)
Servo_Angle = 90
robotbit.Servo(robotbit.Servos.S8, Servo_Angle)
basic.showIcon(IconNames.Chessboard)
