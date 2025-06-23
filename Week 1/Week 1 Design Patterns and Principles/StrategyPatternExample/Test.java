public class Test {
    public static void main(String[] args) {
        PaymentContext paymentContext = new PaymentContext();

        PaymentStrategy creditCardPayment = new CreditCardPayment("5984-2345-6978-1286",
                "Soham Dey", "03/30");
        paymentContext.setPaymentStrategy(creditCardPayment);
        paymentContext.executePayment(8000.50);

        PaymentStrategy paypalPayment = new PaypalPayment("sohamdey@exaple.com");
        paymentContext.setPaymentStrategy(paypalPayment);
        paymentContext.executePayment(4500.50);
    }
}
