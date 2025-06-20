package ecommerce;

import java.util.*;

public class SearchAlgorithms {

    public static Product linearSearch(Product[] products, String targetName) {
        for (Product p : products) {
            if (p.productName.equals(targetName)) {
                return p;
            }
        }
        return null;
    }


    public static Product binarySearch(Product[] products, String targetName) {
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));

        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            int cmp = products[mid].productName.compareTo(targetName);
            if (cmp == 0)
                return products[mid];
            else if (cmp < 0)
                left = mid + 1;
            else
                right = mid - 1;
        }
        return null;
    }
}

