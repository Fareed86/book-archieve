const buttonClicked = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    // clear data
    searchField.value = '';

    // load data
    const url = `http://openlibrary.org/search.json?q=${searchText}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayBooks(data.docs));

    const displayBooks = books => {
        const bookResult = document.getElementById('display-books');
        bookResult.textContent = '';
        const bookNumber = document.getElementById('total-result');
        bookNumber.textContent = '';
        const totalNumber = books.length;

        // show total number of result
        const h3 = document.createElement('h3');
        if (totalNumber === 0) {
            h3.innerText = `
            No result found
            `;
        }
        else {
            h3.innerText = `
            Results shown : ${totalNumber}
            `
        }

        bookNumber.appendChild(h3);

        // show books
        books.forEach(book => {
            const div = document.createElement('div');

            // books image url
            // const url = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
            // fetch(url)
            //     .then(res => res.json())
            //     .then(data => console.log(data));


            div.classList.add('col');
            div.classList.add('border');
            div.classList.add('border-2');
            div.classList.add('rounded');
            div.innerHTML = `
            <h3>Book Name: ${book.title}</h3>
            <h4>Author Name: ${book.author_name}</h4>
            <h5>First Published: ${book.first_publish_year}</h5>
            <h5>Publisher: ${book.publisher}</h5>
            `;

            bookResult.appendChild(div);
        })
    }
}