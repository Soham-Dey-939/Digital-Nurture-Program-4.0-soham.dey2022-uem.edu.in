public class RealImage implements Image {
    private String name;
    public RealImage(String name) {
        this.name = name;
        remoteServer();
    }

    private void remoteServer() {
        System.out.println("Loading " + name + " from remote server...");
        try {
            Thread.sleep(2000);
        }
        catch(InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        System.out.println(name + " has been loaded from remote server.");
    }

    @Override
    public void display() {
        System.out.println("Displaying " + name);
    }
}
