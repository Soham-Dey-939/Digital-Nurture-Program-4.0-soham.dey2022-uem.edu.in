import java.util.*;
public class FinancialForecasting {
    private static Map<Integer, Double> memo = new HashMap<>();

    public static double calculateFutureValue(double principal, double rate, int years){
        if (memo.containsKey(years)){
            return memo.get(years);
        }

        if (years == 0){
            return principal;
        }

        double result = calculateFutureValue(principal * (1 + rate), rate, years - 1);
        memo.put(years, result);
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the initial amount -> ");
        double principal = sc.nextDouble();

        System.out.print("Enter the annual growth rate -> ");
        double rate = sc.nextDouble() / 100.0;

        System.out.print("Enter the number of years -> ");
        int yrs = sc.nextInt();

        double futureValue = calculateFutureValue(principal, rate, yrs);
        System.out.printf("Future Value -> %.2f%n", futureValue);

        sc.close();
    }
}
