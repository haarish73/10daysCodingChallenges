public class TotalPairs {
    static void pairs(int arr[]){
        int n = arr.length;

        int tp = 0;

        // another approach to find total pairs is nC2 = n!/(n-2)!*2! = (n*(n-1))/2
        // int totalPairs = (n*(n-1))/2;
        // System.out.println("Total pairs are: "+totalPairs);
        for(int i=0;i<n;i++){
            int curr = arr[i];
            for(int j=i+1;j<n;j++){
                System.out.print(curr+" "+arr[j]);
                tp++;
            }
            System.err.println();
        }
        System.err.println("Total pairs are: "+tp);
    }
    public static void main(String[] args) {
        int arr[] = {1,2,3,4,5};
        pairs(arr);
    }
}
