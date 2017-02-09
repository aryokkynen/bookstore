package com.antti.bookstore.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.antti.bookstore.domain.Book;
import com.antti.bookstore.domain.BookRepository;

@Controller
public class BookController {

	@Autowired
	BookRepository repository;

	@RequestMapping(value = "/booklist", method = RequestMethod.GET)
	public String bookStoreFront(Model model) {

		model.addAttribute("book", new Book());
		model.addAttribute("books", repository.findAll());
		return "books";
	}

	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public String saveBook(@ModelAttribute Book book, BindingResult errors,
			Model model) {

		repository.save(book);
		return "redirect:booklist";
	}

	@RequestMapping(value = "/delete/{id}", method = RequestMethod.GET)
	public String deleteBook(@PathVariable("id") Long id, Model model) {

		repository.delete(id);
		return "redirect:../booklist";
	}

	// public @ResponseBody dasd(){...} jos ei RESTcontrolleria käytössä.
    @RequestMapping(value="/login")
	public String login() {
		return "login";
	} 
}
