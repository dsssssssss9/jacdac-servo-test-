radio.onReceivedNumber(function (receivedNumber) {
    Rec_Num = receivedNumber
    Servo_Angle = Servo_Angle + Rec_Num
    if (Servo_Angle > 180) {
        Servo_Angle = 180
    } else if (Servo_Angle < 0) {
        Servo_Angle = 0
    }
    robotbit.Servo(robotbit.Servos.S8, Servo_Angle)
})
input.onButtonPressed(Button.B, function () {
    robotbit.Servo(robotbit.Servos.S8, 45)
})
input.onButtonPressed(Button.A, function () {
    robotbit.Servo(robotbit.Servos.S8, randint(0, 180))
})
let Rec_Num = 0
let Servo_Angle = 0
radio.setGroup(55)
Servo_Angle = 90
robotbit.Servo(robotbit.Servos.S8, Servo_Angle)
basic.showIcon(IconNames.StickFigure)
basic.forever(function () {
	
})
