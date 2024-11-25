
import Header from "@/components/header";
import BlogList from "@/components/list";
import { useEffect, useState } from "react";
import getPosts from "@/services/posts";
import Footer from "@/components/footer";


export default function Home() {
  const [posts,setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await getPosts();
      console.log("Post Data",postsData)
      setPosts(postsData);
    };
    fetchPosts();
  }, [])
  return (
   <div className="w-screen h-screen">
    <Header/>
    <section className="px-32 py-16 flex flex-col items-center gap-16 bg-[#FCF7EF]">
     <div className="text-center"> 
      <h1 className="font-bold text-7xl">Our Blog</h1>
     <p>Get the latest updates and deeper coffee experience from IMAJI Coffee</p></div>
     <div className="flex items-start gap-4 flex-col">
      <img src="/thumnail.png" alt="thumbnail"/>
      <div>
        <h4>Collaboration to Develop Coffee and Beverage Industry Expertise in Indonesia</h4>
        <p><span>4 Min.</span><span>August 19 2024</span></p>
      </div>
     </div>
    </section>
    <section className="py-12 px-16">
     
        <BlogList posts={posts}/>
      
    </section>
    <Footer/>
   </div>
  );
}
