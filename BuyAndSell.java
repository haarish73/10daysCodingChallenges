public class BuyAndSell {
    static int buyAndSell(int arr[]) {
        int buyPrice = Integer.MAX_VALUE;
        int maxProfit = 0;

        for (int i = 0; i < arr.length; i++) {
            if (arr[i] < buyPrice) {
                buyPrice = arr[i];   // update lowest price
            } else {
                int profit = arr[i] - buyPrice;
                maxProfit = Math.max(maxProfit, profit);
            }
        }
        return maxProfit;
    }

    public static void main(String[] args) {
        int arr[] = {7, 1, 5, 3, 6, 4};
        System.out.println(buyAndSell(arr)); // Output: 5
    }
}