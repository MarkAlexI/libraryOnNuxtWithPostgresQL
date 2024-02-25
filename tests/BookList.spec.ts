import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import BookList from "../components/BookList.vue";

describe("BookList", () => {
  it("is a Vue instance", () => {
    const wrapper = mount(BookList);
    expect(wrapper.vm).toBeTruthy();
  });
});
