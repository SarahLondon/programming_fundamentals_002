const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooks", () => {
    test("returns the number of books in the list", () => {
      expect(catalogueService.countBooks()).toBe(20);
    });
  });

  describe("catalogueService.checkBook", () => {
    test("returns true if the book exists in the list", () => {
      expect(catalogueService.checkBook("Dracula by Bram Stoker")).toBe(true);
    });
    test("returns false if the book exists in the list", () => {
      expect(catalogueService.checkBook("Moths by Pamela Mothman")).toBe(false);
    });
  });
  describe("catalogueService.countBooksByFirstLetter", () => {
    test("returns the number of books beginning with the given letter", () => {
      expect(catalogueService.countBooksByFirstLetter("W")).toBe(2);
    });
    test("returns 0 if no books begin with the given letter", () => {
      expect(catalogueService.countBooksByFirstLetter("X")).toBe(0);
    });
  });

  describe("catalogueService.countBooksByKeyword", () => {

    test("returns 3 if book title contains assassin", () => {
      expect(catalogueService.countBooksByKeyword ("assassin")).toBe(3);
    });
    test("returns 2 if book title contains normal", () => {
      expect(catalogueService.countBooksByKeyword ("Normal")).toBe(2);
    });
    test("returns 0 if book title contains pinapple", () => {
      expect(catalogueService.countBooksByKeyword ("pineapple")).toBe(0);
    });
  });

  describe("catalogueService.getBooksByAuthor", () => {
    test("returns a list of books by a given author", () => {
      expect(catalogueService.getBooksByAuthor("Charles Dickens")).toEqual([
        "A Tale of Two Cities by Charles Dickens",
        "Oliver Twist by Charles Dickens",
        "Great Expectations by Charles Dickens"
      ]);
    });
    test("returns an empty array if no books by the given author are found", () => {
      expect(catalogueService.getBooksByAuthor("Dante Alighieri")).toEqual([]);
    });
    test("returns a list of books by author name Charles", () => {
      expect(catalogueService.getBooksByAuthor("Charles")).toEqual([
        "A Tale of Two Cities by Charles Dickens",
        "Oliver Twist by Charles Dickens",
        "Great Expectations by Charles Dickens",
        "The Origin of Species by Charles Darwin"
      ]);
    });
  });
});