import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import BookList from "../components/BookList.vue";

describe("BookList", () => {
  it("renders properly", () => {
    const wrapper = mount(BookList, {
      props: {
        title: "List of Books",
        books: [
          { id: 1, title: "Book 1", author: "Author 1", published_year: 2020 },
          { id: 2, title: "Book 2", author: "Author 2", published_year: 2021 },
        ],
        editable: true,
      },
    });

    expect(wrapper.vm).toBeTruthy();

    expect(wrapper.find("h2").text()).toBe("List of Books");

    const books = wrapper.findAll("li");
    expect(books).toHaveLength(2);

    books.forEach((book, index) => {
      const editButton = book.find("button.text-blue-500");
      const deleteButton = book.find("button.text-red-500");

      expect(editButton.exists()).toBeTruthy();
      expect(deleteButton.exists()).toBeTruthy();

      editButton.trigger("click");
      deleteButton.trigger("click");

      expect(wrapper.emitted("edit-book")[index]).toEqual([
        {
          id: index + 1,
          title: `Book ${index + 1}`,
          author: `Author ${index + 1}`,
          published_year: 2020 + index,
        },
      ]);
      expect(wrapper.emitted("delete-book")[index]).toEqual([
        {
          id: index + 1,
          title: `Book ${index + 1}`,
          author: `Author ${index + 1}`,
          published_year: 2020 + index,
        },
      ]);
    });
  });
});
