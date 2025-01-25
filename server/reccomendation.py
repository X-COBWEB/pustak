# recommendation.py
from sanity import Client

# Sanity Configuration
SANITY_PROJECT_ID = 'your_sanity_project_id'
SANITY_DATASET = 'production'  # or 'development'
SANITY_TOKEN = 'your_sanity_token'

sanity_client = Client({
    'projectId': SANITY_PROJECT_ID,
    'dataset': SANITY_DATASET,
    'token': SANITY_TOKEN
})

def search_books_in_sanity(query):
    """
    Search Sanity for books based on the user query (title, genre, summary).
    """
    query_string = f'*[_type == "book" && (title match "{query}" || genre match "{query}" || summary match "{query}")]{{title, author, genre, rating, summary, descriptionLink}}'
    results = sanity_client.fetch(query_string)
    return results

def get_book_recommendations(user_query):
    """
    Get book recommendations based on the user's query.
    The recommendations will be fetched from Sanity's database.
    """
    books = search_books_in_sanity(user_query)

    # If no books are found, return an empty list
    if not books:
        return {"error": "No books found matching your query"}

    book_recommendations = []
    for book in books:
        book_info = {
            'title': book['title'],
            'author': book['author'],
            'genre': book['genre'],
            'rating': book['rating'],
            'summary': book['summary']
        }
        book_recommendations.append(book_info)

    return book_recommendations
