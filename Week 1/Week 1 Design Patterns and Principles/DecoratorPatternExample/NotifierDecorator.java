public abstract class NotifierDecorator implements Notifier {
    protected Notifier notifierDecorator;

    public NotifierDecorator(Notifier notifier) {
        this.notifierDecorator = notifier;
    }

    @Override
    public void send(String message) {
        notifierDecorator.send(message);
    }
}