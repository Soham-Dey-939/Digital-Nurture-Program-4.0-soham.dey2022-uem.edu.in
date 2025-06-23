public class ProxyImage implements Image {
    private RealImage realImage;
    private String fileName;

    public ProxyImage(String fileName) {
        this.fileName = fileName;
    }

    @Override
    public void display() {
        if (realImage == null) {
            System.out.println("Image not loaded yet. Loading from remote server...");
            realImage = new RealImage(fileName);
        }
        else {
            System.out.println("Using cached image for -> "+ fileName);
        }
        realImage.display();

    }
}
