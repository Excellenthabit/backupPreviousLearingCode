import java.util.Scanner;
public class MaxThree{
	public static void main(String[] args){
		Scanner sc = new Scanner(System.in);
		System.out.println("Please input first number:");
		int a = sc.nextInt();
		System.out.println("Please input second number:");
		int b = sc.nextInt();	
		System.out.println("Please input third number:");
		int c = sc.nextInt();
		int maxVal;
		a = a>b?a:b;
		maxVal = a>c?a:c;
		System.out.println("The max value is:"+maxVal);
	}
}