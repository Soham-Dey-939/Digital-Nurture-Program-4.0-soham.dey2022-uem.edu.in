public class Computer {
    private String CPU;
    private String RAM;
    private String Storage;
    private String GPU;
    private boolean hasSSD;

    private Computer(Builder builder) {
        this.CPU = builder.CPU;
        this.RAM = builder.RAM;
        this.Storage = builder.Storage;
        this.GPU = builder.GPU;
        this.hasSSD = builder.hasSSD;
    }

    @Override
    public String toString() {
        return "Computer{" +
                "CPU= '" + CPU + '\'' +
                ", RAM= '" + RAM + '\'' +
                ", Storage= '" + Storage + '\'' +
                ", GPU= '" + GPU + '\'' +
                ", hasSSD= " + hasSSD +
                '}'
                ;
    }

    public static class Builder {
        private String CPU;
        private String RAM;
        private String Storage;
        private String GPU;
        private boolean hasSSD;

        public Builder setCPU(String CPU) {
            this.CPU = CPU;
            return this;
        }

        public Builder setRAM(String RAM) {
            this.RAM = RAM;
            return this;
        }

        public Builder setStorage(String Storage){
            this.Storage = Storage;
            return this;
        }

        public Builder setGPU(String GPU){
            this.GPU = GPU;
            return this;
        }

        public Builder setSSD(boolean hasSSD){
            this.hasSSD = hasSSD;
            return this;
        }

        public Computer build(){
            return new Computer(this);
        }
    }
}
