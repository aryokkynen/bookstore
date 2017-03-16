class App extends React.Component {
	constructor(props) {
		super(props);
		this.deleteBook = this.deleteBook.bind(this);
		this.createBook = this.createBook.bind(this);
		this.state = { books: [] };
}
 
componentWillMount() {
	this.fetchBooks();
}
  
fetchBooks() {
		fetch('http://localhost:8080/api/books', { credentials: 'same-origin' }) 
		.then((response) => response.json()) 
		.then((responseData) => {
			this.setState({books: responseData._embedded.books}); 
		});     
}

deleteBook(book) {
		fetch(book._links.self.href, { method: 'DELETE', credentials: 'same-origin'})
		.then(res => this.fetchBooks())
		.catch( err => console.error(err))                
}  

createBook(book) {
		fetch('http://localhost:8080/api/books', { method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(book)})
		.then(res => this.fetchBooks())
		.catch( err => console.error(err))
}
 
	render() {
		return (
				
				<div>
					<Header />
					<BookTable deleteBook={this.deleteBook} books={this.state.books} /> 
					<AddNewBook createBook={this.createBook} />  
				</div>  
				);
			}
}

class Header extends React.Component {
	
	render() {
        return (
        	<div className="jumbotron">
    			<h1>Bookstore REST react demo</h1>
    		</div>
        );
    } 
	
}
    	
class BookTable extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
    var books = this.props.books.map(book =>
        <Book key={book._links.self.href} book={book} deleteBook={this.props.deleteBook}/>
    );

    return (
		<div>
			<table className="table table-striped">
			<thead>
				<tr><th>Author</th><th>Title</th><th>ISBN</th><th colspan="2">Year</th></tr>
			</thead>
				<tbody>{books}</tbody>
			</table>
		</div>);
		}
}
        
class Book extends React.Component {
    constructor(props) {
        super(props);
        this.deleteBook = this.deleteBook.bind(this);
    }

    deleteBook() {
        this.props.deleteBook(this.props.book);
    } 
 
    render() {
        return (
          <tr>
            <td>{this.props.book.author}</td>
            <td>{this.props.book.title}</td>
            <td>{this.props.book.isbn}</td>
            <td>{this.props.book.year}</td>
            <td>
            	<button className="btn btn-danger pull-right" onClick={this.deleteBook}>Delete</button>
            </td>
          </tr>
        );
    } 
}

class AddNewBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        		author: '', 
        		title: '',
        		isbn: '',
        		year: ''
        		};                
        this.handleSubmit = this.handleSubmit.bind(this);   
        this.handleChange = this.handleChange.bind(this);     
    	}

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }    
    
    handleSubmit(event) {
        event.preventDefault();
        var newBook = {
        		title: this.state.title, 
        		author: this.state.author,
        		isbn: this.state.isbn,
        		year: this.state.year
        		};        
        this.props.createBook(newBook);        
    }
    
    render() {
        return (
        		
                <form className="form-group">                
                <fieldset>
                <legend>Add new book</legend>               
	                <input type="text" placeholder="Author" className="form-control"  name="title" onChange={this.handleChange} />    
	                <input type="text" placeholder="Title" className="form-control" name="author" onChange={this.handleChange} />
	                <input type="text" placeholder="ISBN" className="form-control" name="isbn" onChange={this.handleChange} />
	                <input type="number" placeholder="Year" className="form-control" name="year" onChange={this.handleChange} />
	                <button className="btn btn-success pull-right" onClick={this.handleSubmit}>Save</button>                                      
                </fieldset>
                </form> 
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root') );