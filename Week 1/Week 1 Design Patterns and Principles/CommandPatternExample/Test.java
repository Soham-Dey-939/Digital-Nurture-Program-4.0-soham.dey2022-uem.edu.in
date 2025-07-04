public class Test {
    public static void main(String[] args){
        Light light = new Light();
        LightOnCommand lightOnCommand = new LightOnCommand(light);
        LightOffCommand lightOffCommand = new LightOffCommand(light);
        RemoteControl remoteControl = new RemoteControl();

        remoteControl.setCommand(lightOnCommand);
        remoteControl.pressbutton();

        remoteControl.setCommand(lightOffCommand);
        remoteControl.pressbutton();
    }
}
