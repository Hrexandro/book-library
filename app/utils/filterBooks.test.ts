import { test, expect } from "vitest";
import { filterBooks } from "./filterBooks";
import type { Book } from "../context/BooksContext";

const sampleBooks: Book[] = [
  {
    id: 1,
    title: "Hobbit",
    author: "J.R.R. Tolkien",
    description: ""
  },
  {
    id: 2,
    title: "Dune",
    author: "Frank Herbert",
    description: ""
  }
];

test("finds a book by title", () => {
  const result = filterBooks(sampleBooks, "hob");

  expect(result).toEqual([sampleBooks[0]]);
});


test("finds a book by author", () => {
  const result = filterBooks(sampleBooks, "Herbert");

  expect(result).toEqual([sampleBooks[1]]);
});

test("returns no results for a non-existing book", () => {
  const result = filterBooks(sampleBooks, "xyz123");

  expect(result).toEqual([]);
});

test("returns all books for an empty query", () => {
  const result = filterBooks(sampleBooks, "");

  expect(result).toEqual(sampleBooks);
});

test("search is case insensitive", () => {
  const result = filterBooks(sampleBooks, "hObBiT");

  expect(result).toEqual([sampleBooks[0]]);
});

test("ignores leading and trailing spaces", () => {
  const result = filterBooks(sampleBooks, "  Herbert  ");

  expect(result).toEqual([sampleBooks[1]]);
});

test("handles multiple spaces between words", () => {
  const result = filterBooks(sampleBooks, "Frank   Herbert");

  expect(result).toEqual([sampleBooks[1]]);
});