import { AuthError } from "next-auth";
import SearchForm from "../../components/SearchForm";
import { title } from "process";
import StartupCard from "@/components/StartupCard";
import Image from 'next/image';

export default async function Home({searchParams}:{
  searchParams: Promise<{ query?: string}>
}) {
  const query=(await searchParams).query;
  const posts=[{
    _createdAt: new Date(),
    views: 100,
    author:{ _id:1, name: "John Doe"},
    description: "this is a description",
    image: "data:image/webp;base64,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",
    category: "Tech",
    title : "Harry Potter",
  }]
  return (
    <>
      <section className="pink_container">
            <Image src='/logo_bg.png' alt='logo' width={300} height={100} />

        <h1 className="heading">
          Share Knowledge, <br />  Change Lives!
        </h1>
        <p className="sub-heading !max-w-3xl">
        Platform where you can donate or receive books, helping make education accessible for everyone. 
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query? `Search results for "${query}"` : "Books Available"}
        </p>
        <ul className="mt-7 card-grid">
          {posts?.length>0?(
            posts.map((post: StartupCardType, index: number) =>(
              <StartupCard key={post?._id} post={post}/>
            ))
          ):(
            <p className="no-results">No Books</p>
          )}
        </ul>
      </section>
    </>
  );
}
