import java.io.*;
import java.lang.String;
    class student
{
    String regno;
    String password;
    String name;
    String email;
    String address;
    String fathername;
    int age;
    int mobile;
    int fathermobile;
    int roomno;
    char block;
    String log;
    student left;
    student right;
}
class DSA_PROJECT
{

public void login(student root)throws IOException
{
    student troot=new student();
    troot=root;
    int flag=0;
    System.out.println("ENTER YOUR REGISTRATION NUMBER : ");
    String rno;String pass;
    BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
    rno=br.readLine();
    System.out.println("ENTER PASSWORD : ");
    pass=br.readLine();
    while(troot!=null)
    {
        if(rno.compareTo(troot.regno)<0)
            troot=troot.left;
        else if((rno.compareTo(troot.regno)==0)&&(pass.compareTo(troot.password)==0))
            {
                flag=1;
                break;
            }
        else
            troot=troot.right;
    }
if(flag==1)
{
    System.out.println(troot.password);
}
else
{
    System.out.println("ENTER CORRECT REGISTRATION NUMBER OR PASSWORD");
}
}
 student create()throws IOException
{
    student temp=new student();
    System.out.println("ENTER REGISTERATION NUMBER: ");
    BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
    temp.regno=br.readLine();
   // printf("ENTER STUDENT'S NAME: ");
  //  scanf("%[^\n]s",temp->name);
  //  getchar();
 //   printf("ENTER STUDENT'S AGE: ");
 //   scanf("%d",&(temp->age));
  //  getchar();
    System.out.println("ENTER PASSWORD THAT STUDENT WANT TO SET: ");
    temp.password=br.readLine();
    /*printf("ENTER STUDENT'S EMAIL ID: ");
    scanf("%[^\n]s",temp->email);
    getchar();
    printf("ENTER STUDENT'S ADDRESS: ");
    scanf("%[^\n]s",temp->address);
    getchar();
    printf("ENTER STUDENT'S MOBILE NUMBER: ");
    scanf("%d",&(temp->mobile));
    getchar();
    printf("ENTER STUDENT'S FATHER'S NAME: ");
    scanf("%[^\n]s",temp->fathername);
    getchar();
    printf("ENTER STUDENT'S FATHER'S MOBILE NUMBER: ");
    scanf("%d",&(temp->fathermobile));
    printf("ENTER BLOCK ALLOTED THE STUDENT: ");
    scanf("%s",&(temp->block));
    printf("ENTER ROOM NUMBER ALLOTED TO STUDENT: ");
    scanf("%d",&(temp->roomno));*/
    temp.left=temp.right=null;
   // system("cls");
    return(temp);
}
student insert(student root,student temp)
{
    student p=root;
    if(root==null)
    {
        System.out.println("correct");
        root=temp;
        System.out.println(root.regno);
        return root;
    }
    else
    {
        System.out.println((root.regno).compareTo(temp.regno));
        if((root.regno).compareTo(temp.regno)<0)
        {
            if(root.right!=null)
            {
             insert(root.right,temp);
            }
            else
            {
            root.right=temp;
            }
        }
        else
        {
            if(root.left!=null)
            {
                insert(root.left,temp);
            }
            else
            {
                root.left=temp;
            }
        }
        return p;
    }
}
student findmax(student l)
{
   student r=new student();
   r=null;
    String m="00aaa0000";
    while(l!=null)
    {
        if((l.regno).compareTo(m)>0)
        {
            r=l;
            m=l.regno;
            l=l.right;
        }
    }
    return r;
}
student removest(student troot)throws IOException
{
    String rn;
    int pos=0;
    System.out.println("ENTER THE REGISTRATION NUMBER OF THE STUDENT TO BE REMOVED : ");
    BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
    rn=br.readLine();
    student t=troot;
    //troot=root;
    student prev=new student();
    prev=troot;
    while(troot!=null)
    {
     if(rn.compareTo(troot.regno)==0)
     {
         System.out.println("present");
        if(troot.left==null&&troot.right==null)
            troot=null;
        else if(troot.left==null||troot.right==null)
        {
            if(troot.left==null&&pos==1)
            {
                prev.right=troot.right;
            }
            else if(troot.right==null&&pos==1)
            {
                prev.right=troot.left;
            }
            else if(troot.left==null&&pos==2)
            {
                prev.left=troot.right;
            }
            else if(troot.right==null&&pos==2)
            {
                prev.left=troot.left;
            }
        troot=null;
        }
        else
        {
            if(pos==1)
            {
            prev.right=troot.left;
            student p=findmax(troot.left);
            p.right=troot.right;
            troot=null;
            }
            if(pos==2)
            {
            prev.left=troot.left;
            student p=findmax(troot.left);
            p.right=troot.right;
            troot=null;
            }
        }
     }
     else if(rn.compareTo(troot.regno)>0)
        {prev=troot;troot=troot.right;pos=1;}
     else
        {prev=troot;troot=troot.left;pos=2;}
    }
System.out.println("\nSTUDENT SUCCESSFULLY REMOVED\n");
return t;
}
public static void main(String[] args)throws IOException
{
    int ch=0;
    DSA_PROJECT ob=new DSA_PROJECT();
    student root;
    root=null;
    do
    {
        for(int i=0;i<10;i++)
            System.out.println("------------------------------------------");
        System.out.println("\t\t\t\t\t\t\t\t\t\t     VIT HOSTEL MANAGEMENT SYSTEM\n");
        for(int i=0;i<10;i++)
            System.out.println("------------------------------------------");
    System.out.println("\n\t\t\t\t\t\t\t\t\t\t\tENTER: \n\t\t\t\t\t\t\t\t\t\t\t1. TO LOGIN\n\t\t\t\t\t\t\t\t\t\t\t2.TO ADD A NEW STUDENT\n\t\t\t\t\t\t\t\t\t\t\t3. TO REMOVE A STUDENT\n\t\t\t\t\t\t\t\t\t\t\t4.TO SHUT DOWN THE HOSTEL\n\t\t\t\t\t\t\t\t\t\t\tCHOICE: ");
    BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
    ch=Integer.parseInt(br.readLine());
    switch(ch)
    {
        case 1:
            {
                ob.login(root);
                break;
            }
        case 2:
            {
                student temp=null;
                temp=ob.create();
                root=ob.insert(root,temp);
                System.out.println(root.password);
                break;
            }
        case 3:
            {
                student temp;
                temp=root;
                ob.removest(root);
                root=temp;
                break;
            }
        case 4:
            {
                System.exit(0);
            }
        default:System.out.println("\nENTER CORRECT CHOICE");
    }
    }while(5>1);
}
}