import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from './BlogPost.module.css';
import Header from '@/components/header';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      
      try {
        const response = await fetch(`http://localhost:5000/api/posts/${slug}`);
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
        router.push('/404'); // Redirect to 404 page if post not found
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug, router]);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (!post) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{post.title} | IMAJI COFFEE</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.featuredImage} />
      </Head>

      <article className={styles.article}>
        <div className={styles.heroImage}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className={styles.image}
          />
        </div>

        <div className={styles.container}>
          <header className={styles.header}>
            <div className={styles.meta}>
              <time className={styles.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </time>
              <span className={styles.category}>{post.category}</span>
            </div>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.excerpt}>{post.excerpt}</p>
          </header>

          <div 
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <footer className={styles.footer}>
            <div className={styles.tags}>
              {post.tags?.map((tag) => (
                <span key={tag} className={styles.tag}>
                  #{tag}
                </span>
              ))}
            </div>
          </footer>
        </div>
      </article>
    </>
  );
} 