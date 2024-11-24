const mongoose = require('mongoose');
const Post = require('../models/Post');
require('dotenv').config();

const posts = [
  {
    "slug": "coffee-roasting-techniques",
    "title": "Advanced Coffee Roasting Techniques for Perfect Beans",
    "image": "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe",
    "readTime": "5",
    "date": "2024-03-15",
    "excerpt": "Discover the art and science behind perfect coffee roasting, from light to dark roasts and everything in between."
  },
  {
    "slug": "indonesian-coffee-origins",
    "title": "Exploring Indonesian Coffee Origins: From Sumatra to Java",
    "image": "https://images.unsplash.com/photo-1499744937866-d7e566a20a61",
    "readTime": "4",
    "date": "2024-03-10",
    "excerpt": "Journey through Indonesia\'s diverse coffee regions and learn about their unique flavor profiles and cultivation methods."
  },
  {
    "slug": "sustainable-coffee-farming",
    "title": "Sustainable Coffee Farming Practices in Modern Agriculture",
    "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    "readTime": "6",
    "date": "2024-03-05",
    "excerpt": "How modern coffee farms are adapting sustainable practices to protect the environment while producing quality beans."
  },
  {
    "slug": "coffee-brewing-methods",
    "title": "A Complete Guide to Different Coffee Brewing Methods",
    "image": "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04",
    "readTime": "7",
    "date": "2024-02-28",
    "excerpt": "From pour-over to espresso, explore various coffee brewing methods and find your perfect cup."
  },
  {
    "slug": "coffee-tasting-guide",
    "title": "Professional Coffee Tasting: A Comprehensive Guide",
    "image": "https://images.unsplash.com/photo-1442550528053-c431ecb55509",
    "readTime": "5",
    "date": "2024-02-20",
    "excerpt": "Learn the professional techniques for coffee tasting and how to identify different flavor notes and characteristics."
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing posts
    await Post.deleteMany({});
    console.log('Cleared existing posts');

    // Insert new posts
    const createdPosts = await Post.insertMany(posts);
    console.log(`Successfully seeded ${createdPosts.length} posts`);

    await mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase(); 