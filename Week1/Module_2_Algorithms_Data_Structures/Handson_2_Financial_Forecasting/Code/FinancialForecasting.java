package financialforecasting;

public class FinancialForecasting {
	
    public static void main(String[] args) {
        double presentValue = 1000;
        double growth = 0.05; 
        int years = 5;

        double finalres1 = ForecastRecursive.forecastRecursive(presentValue, growth, years);
        System.out.printf("Future Value: " + finalres1 + "\n");
        
        double finalres2 = ForecastIterative.forecastIterative(presentValue, growth, years);
        System.out.printf("Future Value: " + finalres2);
    }
}
