import java.util.Scanner;
public class MaxTwo{
	public static void main(String[] args){
		Scanner sc = new Scanner(System.in);
		System.out.println("Please input first number:");
		int a = sc.nextInt();
		System.out.println("Please input second number:");
		int b = sc.nextInt();
		int maxVal;
		maxVal = a>b?a:b;
		System.out.println("The max value is:"+maxVal);
	}
}