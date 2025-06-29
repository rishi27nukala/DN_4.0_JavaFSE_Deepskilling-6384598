package example;
import static org.junit.Assert.*;
import org.junit.*;

public class CalculatorTest {

    private Calculator calc;

    @Before
    public void setUp() {
        calc = new Calculator();
        System.out.println("Set up complete");
    }

    @After
    public void tearDown() {
        System.out.println("Test finished");
    }

    @Test
    public void testAddition() {
        int a = 4;
        int b = 6;
        int result = calc.add(a, b);
        assertEquals(10, result);
    }

    @Test
    public void testSubtraction() {
        int a = 9;
        int b = 3;
        int result = calc.subtract(a, b);
        assertEquals(6, result);
    }
}
