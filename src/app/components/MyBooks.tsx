import { fetchMyBooks } from "../api"

export default async function MyBooks() {
    const myBooks = await fetchMyBooks()

    return (
     <div>
        {myBooks.map((book: any) => (
            <div key={book.id}>
                <h2>Title: {book.title}</h2>
                <p>Author: {book.author}</p>
            </div>
        ))}
     </div>
    )
}