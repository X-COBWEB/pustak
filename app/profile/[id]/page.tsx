import Link from "next/link";
import Image from "next/image";

export default function ProfilePage() {
  const donatedBooks = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      recipient: "Jane Smith",
      date: "2023-05-15",
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      recipient: "John Brown",
      date: "2023-06-02",
    },
    {
      title: "1984",
      author: "George Orwell",
      recipient: "Alice Johnson",
      date: "2023-06-20",
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      recipient: "Emily Davis",
      date: "2023-07-05",
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      recipient: "Michael Wilson",
      date: "2023-07-18",
    },
  ];

  return (
    <div className="container mx-auto p-4 pb-20">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-3xl mx-auto mb-8">
        <div className="p-6">
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
              <Image
                src="https://manee.com.np/assets/profile-pic.jpg"
                alt="Profile photo"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h1 className="text-2xl font-bold">John Doe</h1>
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <h3 className="font-semibold">Email</h3>
              <p>johndoe@example.com</p>
            </div>
            <div>
              <h3 className="font-semibold">Address</h3>
              <p>123 Main St, Anytown, USA 12345</p>
            </div>
            <div>
              <h3 className="font-semibold">Badges</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Frequent Donor", "Book Lover", "Community Hero"].map(
                  (badge) => (
                    <span
                      key={badge}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {badge}
                    </span>
                  )
                )}
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Total Credit Points</h3>
              <p className="text-2xl font-bold text-green-600">500</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-3xl mx-auto">
        <h2 className="text-xl font-bold p-4 bg-gray-100">Books Pending</h2>
        <div className="max-h-80 overflow-y-auto">
          {donatedBooks.map((book, index) => (
            <div
              key={index}
              className="p-4 border-b last:border-b-0 flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold text-lg">{book.title}</h3>
                <p className="text-sm text-gray-600">by {book.author}</p>
              </div>
              <div className="ml-4">
                <Link href={`/qr/id=${index}`} passHref>
                  <img src="/qr-logo.svg" width={50} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-3xl mx-auto">
        <h2 className="text-xl font-bold p-4 bg-gray-100">Books Donated</h2>
        <div className="max-h-80 overflow-y-auto">
          {donatedBooks.map((book, index) => (
            <div key={index} className="p-4 border-b last:border-b-0">
              <h3 className="font-semibold text-lg">{book.title}</h3>
              <p className="text-sm text-gray-600">by {book.author}</p>
              <div className="mt-2 text-sm">
                <p>
                  <span className="font-medium">Recipient:</span>{" "}
                  {book.recipient}
                </p>
                <p>
                  <span className="font-medium">Date Donated:</span> {book.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="fixed bottom-0 right-0  bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded m-4">
        <Link href="/redeem" className="no-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </Link>
      </button>
    </div>
  );
}
