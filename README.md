# bookstore
SWD4TN023 - Bookstore assigment  

Start new training project. This exercise will run trough course and will be updated periodically to Github  
   
First week  
1. Create project called Bookstore using Spring Initializer (Add web, test dependencies)  
1. Add new controller named BookController, mapped at /index  
3. Add new model-class Book, has following attributes: title, author, year, isbn, price  
4. Add your project to Github from commandline    
5. Use suggested Spring Boot project hierarchy

First release: https://github.com/aryokkynen/bookstore/archive/0.01-alpha.zip  
<hr>  
Second week  
1. Bookstore: Add JPA and database  
   -Add JPA support and H2 database to your bookstore project (in GitHub) by modifying pom.xml file  
2. Create an entity from your Book class  
3. Add command line runner to insert few example data to your database  
4. Modify properties to show sql statements  
5. Create a template called booklist.html which shows all books from the database in html table.   
   -To show the books you have to add new method to controller that handle GET request from endpoint like /booklist  
6. Add Create and Delete functionalities to your Bookstore application  
  -~~For create functionality add new thymeleaft emplate called addstudent.html~~ Used form on booklist page  
  -For deletion use @PathVariable annotation  
7. A Little bit Front-end (Extra)  
  -Add Bootstrap to your bookstore application. Download bootstrap.min.css from the bootstrapsite.  
  -Copy it to your projects resources\static\css folder.  
  -Add link to your booklist template file.  
 
Second release: https://github.com/aryokkynen/bookstore/archive/0.02-alpha.zip
![Current status](http://myy.haaga-helia.fi/~a1503069/SWD4TN023/week2.png "Current status")
<hr>
  
