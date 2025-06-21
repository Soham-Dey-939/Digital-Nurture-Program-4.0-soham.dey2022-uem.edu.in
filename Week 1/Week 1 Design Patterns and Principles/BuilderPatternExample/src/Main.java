public class Main {
    public static void main(String[] args){
        System.out.println();

        Computer basicComputer = new Computer.Builder()
                .setCPU("AMD Ryzen 5 5600")
                .setRAM("8GB")
                .setStorage("512GB HDD")
                .build();

        Computer gamingComputer = new Computer.Builder()
                .setCPU("AMD Ryzen 7 9800X3D")
                .setRAM("32GB")
                .setStorage("1TB SSD")
                .setGPU("NVIDIA RTX GeForce 5080")
                .setSSD(true)
                .build();

        System.out.println("Basic Computer -> " + basicComputer);
        System.out.println("Gaming Computer -> " + gamingComputer);
    }
}