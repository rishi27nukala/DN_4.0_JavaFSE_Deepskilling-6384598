package ecommerce;

public class TestSearchFunction{
	
    public static void main(String[] args) {
    	
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(104, "Phone", "Electronics"),
            new Product(102, "Shoes", "Footwear"),
            new Product(105, "T-shirt", "Apparel"),
            new Product(103, "Watch", "Accessories")
        };

        Product res1 = SearchAlgorithms.linearSearch(products, "Watch");
        System.out.println("Linear Search Result: " + (res1 != null ? res1 : "Product not found"));

       
        Product res2 = SearchAlgorithms.binarySearch(products, "Watch");
        System.out.println("Binary Search Result: " + (res2 != null ? res2 : "Product not found"));
        
        Product res3 = SearchAlgorithms.linearSearch(products, "Iphone");
        System.out.println("Linear Search Result: " + (res3 != null ? res3 : "Product not found"));

       
        Product res4 = SearchAlgorithms.binarySearch(products, "Iphone");
        System.out.println("Binary Search Result: " + (res4 != null ? res4 : "Product not found"));
    }
}

