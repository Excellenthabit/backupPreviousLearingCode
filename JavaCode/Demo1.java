public class Demo1{
	public static void main(String[] arrgs){
		//字符串常量
		System.out.println("Hello World!");
		
		//整数常量
		System.out.println(100);
		System.out.println(-10010);
		
		//浮点数常量
		System.out.println(3.14);
		System.out.println(-1.38);
		
		//字符串常量使用双引号，中间可以有0-n个字符都行
		System.out.println("");//中间没有内容，但是为双引号字符串，所以也可以
		
		//字符常量
		System.out.println('A');
		System.out.println('b');
		System.out.println('*');
		System.out.println('勇');
		
		//错误示例
		//System.out.println(''); //中间什么都没有，错误写法
		//System.out.println('ab');//单引号中间有多个字符，错误写法
		
		//布尔常量
		System.out.println(true); //真，对
		System.out.println(false); //假，错
	}
}