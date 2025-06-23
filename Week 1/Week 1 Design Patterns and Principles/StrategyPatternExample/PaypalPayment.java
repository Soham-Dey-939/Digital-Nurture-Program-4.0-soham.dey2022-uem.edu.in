public class PaypalPayment implements PaymentStrategy{
    private String email;

    public PaypalPayment(String email){
        this.email = email;
    }

    @Override
    public void pay(double amount){
        System.out.println("Rs. " + amount + " paid using Paypal");
        System.out.println("Paypal Email -> " + email);
    }
}
