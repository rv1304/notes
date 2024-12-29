{
    "moduleTitle": "Classes and Objects",
    "introduction": "This module introduces classes and objects in Java, explaining class components, access specifiers, constructors, and wrapper classes. Practice problems are included to enhance understanding.",
    "sections": [
      {
        "title": "Defining Classes",
        "content": "A class is a blueprint for creating objects. It consists of fields, methods, and constructors.",
        "subsections": [
          {
            "subtitle": "Class Components",
            "content": "Classes can have the following components:",
            "points": [
              "Fields: Variables that define the properties of the object.",
              "Methods: Functions that define the behavior of the object.",
              "Constructors: Special methods to initialize objects."
            ],
            "examples": [
              {
                "type": "code",
                "language": "java",
                "data": "public class Person {\n    // Fields\n    String name;\n    int age;\n\n    // Method\n    public void displayInfo() {\n        System.out.println(\"Name: \" + name + \", Age: \" + age);\n    }\n}"
              }
            ]
          },
          {
            "subtitle": "Access Specifiers",
            "content": "Access specifiers control the visibility of class members.",
            "points": [
              "public: Accessible from any class.",
              "private: Accessible only within the same class.",
              "protected: Accessible within the same package and by subclasses."
            ],
            "examples": [
              {
                "type": "code",
                "language": "java",
                "data": "public class Example {\n    public int publicField;\n    private int privateField;\n    protected int protectedField;\n\n    public void showFields() {\n        System.out.println(\"Public: \" + publicField);\n        System.out.println(\"Private: \" + privateField);\n        System.out.println(\"Protected: \" + protectedField);\n    }\n}"
              }
            ]
          }
        ]
      },
      {
        "title": "Constructors",
        "content": "Constructors are special methods used to initialize objects. They have the same name as the class and no return type.",
        "subsections": [
          {
            "subtitle": "Default Constructor",
            "content": "A constructor provided by Java when no other constructors are defined.",
            "examples": [
              {
                "type": "code",
                "language": "java",
                "data": "public class Person {\n    String name;\n    int age;\n\n    // Default constructor\n    public Person() {\n        name = \"Unknown\";\n        age = 0;\n    }\n}"
              }
            ]
          },
          {
            "subtitle": "Parameterized Constructor",
            "content": "A constructor that takes arguments to initialize fields.",
            "examples": [
              {
                "type": "code",
                "language": "java",
                "data": "public class Person {\n    String name;\n    int age;\n\n    // Parameterized constructor\n    public Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n}"
              }
            ]
          },
          {
            "subtitle": "Copy Constructor",
            "content": "A constructor that creates a new object as a copy of an existing object.",
            "examples": [
              {
                "type": "code",
                "language": "java",
                "data": "public class Person {\n    String name;\n    int age;\n\n    // Copy constructor\n    public Person(Person original) {\n        this.name = original.name;\n        this.age = original.age;\n    }\n}"
              }
            ]
          }
        ]
      },
      {
        "title": "Wrapper Classes",
        "content": "Wrapper classes provide object representations for primitive data types. They support autoboxing and unboxing.",
        "subsections": [
          {
            "subtitle": "Autoboxing and Unboxing",
            "content": "Autoboxing is converting a primitive type to its wrapper class, while unboxing is converting a wrapper object to its primitive type.",
            "examples": [
              {
                "type": "code",
                "language": "java",
                "data": "// Autoboxing\nInteger num = 10;\n\n// Unboxing\nint value = num;"
              }
            ]
          }
        ]
      },
      {
        "title": "Practice Problems",
        "problems": [
          {
            "problem": "Create a Class for Bank Accounts",
            "description": "Define a BankAccount class with fields for account number, account holder, and balance. Implement methods for deposit and withdrawal.",
            "solution": {
              "type": "code",
              "language": "java",
              "data": "public class BankAccount {\n    private String accountNumber;\n    private String accountHolder;\n    private double balance;\n\n    // Constructor\n    public BankAccount(String accountNumber, String accountHolder, double initialBalance) {\n        this.accountNumber = accountNumber;\n        this.accountHolder = accountHolder;\n        this.balance = initialBalance;\n    }\n\n    // Deposit Method\n    public void deposit(double amount) {\n        if (amount > 0) {\n            balance += amount;\n            System.out.println(\"Deposited: \" + amount);\n        }\n    }\n\n    // Withdrawal Method\n    public void withdraw(double amount) {\n        if (amount > 0 && amount <= balance) {\n            balance -= amount;\n            System.out.println(\"Withdrew: \" + amount);\n        } else {\n            System.out.println(\"Insufficient balance\");\n        }\n    }\n\n    // Display Account Info\n    public void displayAccountInfo() {\n        System.out.println(\"Account Number: \" + accountNumber);\n        System.out.println(\"Account Holder: \" + accountHolder);\n        System.out.println(\"Balance: \" + balance);\n    }\n}"
            }
          },
          {
            "problem": "Implement Constructors for Initialization",
            "description": "Create a Student class with fields for name, roll number, and grade. Use constructors for initialization.",
            "solution": {
              "type": "code",
              "language": "java",
              "data": "public class Student {\n    private String name;\n    private int rollNumber;\n    private char grade;\n\n    // Default Constructor\n    public Student() {\n        this.name = \"Unknown\";\n        this.rollNumber = 0;\n        this.grade = 'N';\n    }\n\n    // Parameterized Constructor\n    public Student(String name, int rollNumber, char grade) {\n        this.name = name;\n        this.rollNumber = rollNumber;\n        this.grade = grade;\n    }\n\n    // Display Student Info\n    public void displayInfo() {\n        System.out.println(\"Name: \" + name);\n        System.out.println(\"Roll Number: \" + rollNumber);\n        System.out.println(\"Grade: \" + grade);\n    }\n}"
            }
          }
        ]
      }
    ]
  }
  