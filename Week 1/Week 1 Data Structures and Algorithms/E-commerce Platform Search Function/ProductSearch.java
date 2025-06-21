public class ProductSearch{
    public static Product linearSearch(Product[] products, int productId) {
        for (Product p: products) {
            if (p.productId == productId) {
                return p;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, int productId) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;

            if (products[mid].productId == productId) {
                return products[mid];
            }

            if (products[mid].productId < productId) {
                left = mid + 1;
            }

            else {
                right = mid - 1;
            }
        }
        return null;
    }
}
