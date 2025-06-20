package singletonexample;

public class TestLogger {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        logger1.log("first log message.");

        Logger logger2 = Logger.getInstance();
        logger2.log("second log message.");

        if (logger1 == logger2) {
            System.out.println("Both logger instances are the same. So,ingleton works!");
        } else {
            System.out.println("Logger instances are different. Singleton failed.");
        }
    }
}
