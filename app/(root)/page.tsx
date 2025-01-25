import { AuthError } from "next-auth";
import SearchForm from "../../components/SearchForm";
import { title } from "process";
import StartupCard from "@/components/StartupCard";

export default async function Home({searchParams}:{
  searchParams: Promise<{ query?: string}>
}) {
  const query=(await searchParams).query;
  const posts=[{
    _createdAt: new Date(),
    views: 100,
    author:{ _id:1, name: "John Doe"},
    description: "this is a description",
    image: "https://via.placeholder.com/150",
    category: "Tech",
    title : "Startup 1",
  }]
  return (
    <>
      <section className="pink_container">
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
