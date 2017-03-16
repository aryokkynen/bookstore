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
![Current status](/img/week2.png "Current status")
<hr>
Third week  
Part 1 - Securing the web application
  
1. Add Spring Security to your project by adding dependency  
2. Add Spring Security configuration class which will secure all URLs (requires authentication in all URLs) and add two in-memory users with roles USER and ADMIN  
3. Create the login page and add login method to controller  
4. Add logout functionality to your booklist page  
5. Show authenticated username in your booklist page  
6. Restrict Delete book functionality only to users with ADMIN role  

Part 2 - Securing the web application Part II 

1. Create user entity for your application endusers  
2. Attributes: username (unique), password, email, role  
3. Create crud repository for user entity  
4. Implement UserDetailService  
5. Add some users to your database and hash the passwords with BCrypt hashing algorithm  
6. Change Spring Security configuration to use user entites instead of in-memory users in authentication   

![Login](/img/week_3_login.png)  

![Bookstore](/img/week_3_bookstore.png)

Part 3 - REST

1. Create REST service that return all books (JSON)  
1  . Create a method to controller  
2  . Ignore one-to-many link from JSON  
2. Create REST service that return one book by id (JSON)  
1  . Create a method to controller  
2  . Use path variable to get book id  
3. Change REST api path to /api  
1  . Modify your application.properties

![REST Api](/img/week_3_rest_api.png)  

![Books](/img/week_3_rest_books.png)  

![Single book](/img/week_3_rest_single_book.png)  
Third release: https://github.com/aryokkynen/bookstore/archive/0.03-alpha.zip
<hr>

Week 6&7  
  
React front    
1. Add react.js to your Spring Boot project  
2. Print your bookstore database content in table form  
3. Add delete button which removes book from database  
4. Add form to create new book & refresh view once book is added  
5. Add authentication using Spring Security module  

![With React Front](https://github.com/aryokkynen/bookstore/blob/master/img/react_bookstore.png)  
Fourth release: https://github.com/aryokkynen/bookstore/archive/0.04-alpha.zip



