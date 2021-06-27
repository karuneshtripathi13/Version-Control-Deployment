import java.util.*;

interface test1
{
int square(int a);
}
class arithmetic implements test1
{
    public int square(int a) {
        return a * a;
    }
}

class bce0880{
public static void main(String args[])
    {
    arithmetic obj=new arithmetic();
    System.out.print("Enter the number: ");
    Scanner sc=new Scanner(System.in);
    System.out.println("Square is:"+obj.square(sc.nextInt()));
    }
}
