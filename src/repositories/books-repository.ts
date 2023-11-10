import { Book, CreateBook } from "../protocols/book";
import { CreateReview } from "../protocols/review";
import prisma from "../database";

export async function getBooks() {
  // const query = `SELECT * FROM books`;

  return prisma.books.findMany();
}

export async function getBook(id: number) {
  // const query = `SELECT * FROM books WHERE id = $1`;

  return prisma.books.findUnique({
    where: { id },
  });
}

export async function createBook(book: CreateBook) {
  // const query = `INSERT INTO books (title, author, publisher, "purchaseDate")
  // VALUES ($1, $2, $3, $4)`;

  return prisma.books.create({
    data: book,
  });
}

export async function reviewBook(bookReview: CreateReview) {
  const { bookId, grade, review } = bookReview;
  // const query = `UPDATE books SET grade = $1, review = $2, read = true WHERE id = $3`;

  return prisma.books.update({
    data: { review, grade, read: true },
    where: { id: bookId },
  });
}
