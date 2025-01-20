export default {
    search: async function(query) {
        const response = await fetch(process.env.REACT_APP_BASE_URL + query + process.env.REACT_APP_API_KEY);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    },

    getBooks: async function(id) {
        const response = await fetch("/api/books");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    },

    getBook: async function(id) {
        const response = await fetch("/api/books/" + id);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    },

    deleteBook: async function(id) {
        const response = await fetch("/api/books/" + id, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    },

    saveBook: async function(bookData) {
        console.log("BookData0:", bookData)

        const response = await fetch("/api/books", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookData)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    }
};