// use another function with destructuring

const myLibrary = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        readingStatus: true,
        readingDate: '12.12.18'
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true,
        readingDate: '01.07.20'
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false,
        readingDate: null,
        countPage: 45
    }];

const renderBook = ({ title, author, readingStatus, readingDate, }) => {

    const readingInfo = readingStatus ? `was read ${readingDate}` : 'still not read';
    return `Book "${title}" of author ${author} ${readingInfo}`;
}


const renderLibrary = (library) => {
    for (const book of library) {
        const renderedBook = renderBook(book);
        console.log(renderBook(book));
    }
}


renderLibrary(myLibrary)