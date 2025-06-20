package financialforecasting;

public class ForecastRecursive {
	public static double forecastRecursive(double current, double growth, int years) {
        if (years == 0) {
            return current;
        }
        return forecastRecursive(current, growth, years - 1) * (1 + growth);
	}
}
