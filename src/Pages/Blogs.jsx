import React, { useState, useEffect } from "react";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Simulated API fetch
    setTimeout(() => {
      setBlogs([
        {
          id: 1,
          category: "Apartment",
          date: "March 19, 2024",
          title: "Housing Markets That Changed the Most This Week",
          image: "path_to_image1.jpg",
        },
        {
          id: 2,
          category: "Apartment",
          date: "March 19, 2024",
          title: "Read Unveils the Best Canadian Cities for Biking",
          image: "path_to_image2.jpg",
        },
        {
          id: 3,
          category: "Office",
          date: "March 19, 2024",
          title: "10 Walkable Cities Where You Can Live Affordably",
          image: "path_to_image3.jpg",
        },
        {
          id: 4,
          category: "Shop",
          date: "March 19, 2024",
          title: "New Apartment Nice in the Best Canadian Cities",
          image: "path_to_image4.jpg",
        },
      ]);
    }, 1000);
  }, []);

  return (
    <section className="py-20 px-4 text-center">
      <h2 className="text-3xl font-bold">Recent Articles & News</h2>
      <p className="text-gray-500 mt-2">
        Stay updated with the latest trends and insights.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-400">
                {blog.category} • {blog.date}
              </p>
              <h3 className="text-lg font-semibold mt-2">{blog.title}</h3>
              <a
                href="#"
                className="text-yellow-500 font-medium mt-4 inline-block"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
