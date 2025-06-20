package financialforecasting;

public class ForecastIterative {
	public static double forecastIterative(double current, double growth, int years) {
        for (int i = 0; i < years; i++) {
            current *= (1 + growth);
        }
        return current;
    }
}
