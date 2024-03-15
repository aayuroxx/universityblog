import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [
    {
      id: "23213",
      title: "Jecrc University Blog #1",
      category: "Hostel Rules",
      description:
        "What are the basic hostel rules All the students are expected to be in hostel before 9.00 pm (10.00 pm on Saturday and Sunday). Girls should come to the hostel before 7.00 pm. 14. The residents should not carry any weapons, poisonous things or drugs and they should not violate any law.",
    },
    {
      id: "12919",
      title: "Jecrc University Blog #2",
      category: "Mess Rules",
      description:
        "Why is it called mess in hostel..The term mess for a hostel dining area has its origins in military dining practices. The word mess originally referred to a group of people who ate together. Over time, it came to refer to the place where they ate as well",
    },
    {
      id: "12323",
      title: "Jecrc University Blog #3",
      category: "Playground Rule",
      description:
        "Never push or rough play while on slides, seesaws, swings, logrolls and other equipment. Slide feet-first and make sure there are no other kids in the way when jumping off the equipment or sliding down.",
    },
  ],
};

const blogSlice = createSlice({
  name: "blogSlice",
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.blogs.push(action.payload);
    },
    updateBlog: (state, action) => {
      const { id, title, category, description } = action.payload;
      const index = state.blogs.findIndex((blog) => blog.id === id);
      state.blogs[index].title = title;
      state.blogs[index].category = category;
      state.blogs[index].description = description;
    },
    deleteBlog: (state, action) => {
      const id = action.payload;
      state.blogs = state.blogs.filter((blog) => blog.id !== id);
    },
  },
});

export const selectBlogById = (state, blogID) => {
  return state.blogs.blogs.find((blog) => blog.id === blogID);
};

export const { addBlog, updateBlog, deleteBlog } = blogSlice.actions;
export default blogSlice.reducer;
