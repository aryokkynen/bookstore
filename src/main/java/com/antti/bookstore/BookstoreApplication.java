package com.antti.bookstore;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.antti.bookstore.domain.Book;
import com.antti.bookstore.domain.BookRepository;

@SpringBootApplication
public class BookstoreApplication {

	private static final Logger log = LoggerFactory
			.getLogger(BookstoreApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(BookstoreApplication.class, args);
	}

	@Bean
	public CommandLineRunner demo(BookRepository repository) {
		return (args) -> {
			log.info("Commandline works`?");

			Book bk = new Book("James S. A Corey", "Leviathan Wakes",
					"1234567-1", 2011);
			Book bk2 = new Book("James S. A Corey", "Caliban's War",
					"1234567-2", 2012);
			Book bk3 = new Book("James S. A Corey", "Abaddon's Gate",
					"1234567-3", 2013);
			Book bk4 = new Book("James S. A Corey", "Cibola Burn", "1234567-4",
					2014);
			Book bk5 = new Book("James S. A Corey", "Nemesis Games",
					"1234567-5", 2015);
			Book bk6 = new Book("James S. A Corey", "Babylon's Ashes",
					"1234567-6", 2016);
			Book bk7 = new Book("James S. A Corey", "Persepolis Rising",
					"1234567-7", 2017);

			repository.save(bk);
			repository.save(bk2);
			repository.save(bk3);
			repository.save(bk4);
			repository.save(bk5);
			repository.save(bk6);
			repository.save(bk7);

			log.info("Books found with findAll():");
			log.info("-------------------------------");
			for (Book book : repository.findAll()) {
				log.info(book.toString());
			}
			log.info("");
		};

	}
}