import java.util.*;
abstract class Doctor {
    int doc_ID;
    char doc_name[]=new char[30];
    float yrs_exp;
    char curr_shift[]=new char[2];
    public
    abstract void Read_data();
    abstract void Write_data();
}
class  Paediatric
{
    String patname;
    String patID;
    String appdate,apptime;
    public void Read_data() {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter Patent ID: ");
        patID=sc.nextLine();
        System.out.print("Enter patient name: ");
        patname=sc.nextLine();
        System.out.print("Enter Date of appointment: ");
        appdate=sc.nextLine();
        System.out.print("Enter Time of appointment: ");
        apptime=sc.nextLine();
    }
    void Write_data() {
        System.out.println("Department: Paediatric");
        System.out.println("Patient ID: "+patID);
        System.out.println("Patient Name: Mr."+patname);
        System.out.println("Date of appointment: "+appdate);
        System.out.println("Time of appointment: "+apptime);
    }
}
class ENT
{
    String patname;
    String patID;
    String appdate,apptime;
    public void Read_data() {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter Patent ID: ");
        patID=sc.nextLine();
        System.out.print("Enter patient name: ");
        patname=sc.nextLine();
        System.out.print("Enter Date of appointment: ");
        appdate=sc.nextLine();
        System.out.print("Enter Time of appointment: ");
        apptime=sc.nextLine();
    }
    void Write_data() {
        System.out.println("Department: ENT");
        System.out.println("Patient ID: "+patID);
        System.out.println("Patient Name: Mr."+patname);
        System.out.println("Date of appointment: "+appdate);
        System.out.println("Time of appointment: "+apptime);
    }
}
class Dermatology
{
    String patname;
    String patID;
    String appdate,apptime;
    public void Read_data() {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter Patent ID: ");
        patID=sc.nextLine();
        System.out.print("Enter patient name: ");
        patname=sc.nextLine();
        System.out.print("Enter Date of appointment: ");
        appdate=sc.nextLine();
        System.out.print("Enter Time of appointment: ");
        apptime=sc.nextLine();
    }
    void Write_data() {
        System.out.println("Department: Dermatology");
        System.out.println("Patient ID: "+patID);
        System.out.println("Patient Name: Mr."+patname);
        System.out.println("Date of appointment: "+appdate);
        System.out.println("Time of appointment: "+apptime);
    }
} 
class mainclass extends Doctor
{
    public void Read_data()
    {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter Docter ID: ");
        doc_ID=sc.nextInt();
        System.out.print("Enter Doctor name: ");
        doc_name=sc.next().toCharArray();
        System.out.print("Enter Years of expirience: ");
        yrs_exp=sc.nextFloat();
        System.out.print("Enter Current Shift (Dy/Nt): ");
        curr_shift=sc.next().toCharArray();
    }
    public void Write_data()
    {
        System.out.println("\nAppointment Details\n");
        System.out.println("Docter ID: "+doc_ID);
        System.out.println("Name: Dr."+String.valueOf(doc_name));
        System.out.println("Years of expirience: "+yrs_exp+" Years");
        System.out.println("Current Shift: "+String.valueOf(curr_shift));
    }
    public static void main(String[] args) {
        mainclass ped=new mainclass();
        mainclass ent=new mainclass();
        mainclass der=new mainclass();
        System.out.println("Enter the details of Paediatric doctor: ");
        ped.Read_data();
        System.out.println("Enter the details of ENT doctor: ");
        ent.Read_data();
        System.out.println("Enter the details of Dermatology doctor: ");
        der.Read_data();
        System.out.print("Enter number of slots available for patients: ");
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        for(int i=0;i<n;i++)
        {
            System.out.print("\nEnter\n1.To get appointment of Paediatritian\n2.To get appointment of ENT\n3.To get appointment of Dermatologist\nChoice:");
            int ch=sc.nextInt();
            switch(ch)
            {
                case 1:
                {
                    Paediatric obj=new Paediatric();
                    obj.Read_data();
                    ped.Write_data();
                    obj.Write_data();
                    break;
                }
                case 2:
                {
                    ENT obj=new ENT();
                    obj.Read_data();
                    ent.Write_data();
                    obj.Write_data();
                    break;
                }
                case 3:
                {
                    Dermatology obj=new Dermatology();
                    obj.Read_data();
                    der.Write_data();
                    obj.Write_data();
                    break;
                }
                default:System.out.println("Enter correct choice");
            }
        }
    }
}