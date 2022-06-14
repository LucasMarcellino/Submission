const books = [];
const RENDER_EVENT = 'render-books';
const SAVED_EVENT = 'saved-books';
const STORAGE_KEY = 'BOOKSHELF_APPS';

document.addEventListener('DOMContentLoaded', function () {
	const submitForm = document.getElementById('form');

	submitForm.addEventListener('submit', function (event) {
		event.preventDefault();
		addBook();
	});

	if (isStorageExist()) {
		loadDataFromStorage();
	}
});

function addBook() {
	const generatedID = generateId();
	const bookTittle = document.getElementById('title').value;
	const bookAuthor = document.getElementById('name').value;
	const timestamp = document.getElementById('year').value;
	const checkBook = document.getElementById('checkBook');

	if (checkBook.checked == true) {
		const bookObject = generateBookObject(generatedID, bookTittle, bookAuthor, timestamp, true);
		books.push(bookObject);
	} else {
		const bookObject = generateBookObject(generatedID, bookTittle, bookAuthor, timestamp, false);
		books.push(bookObject);
	}

	document.dispatchEvent(new Event(RENDER_EVENT));
	savedata();
}

function generateId() {
	return +new Date();
}

function generateBookObject(id, title, author, year, isCompleted) {
	return {
		id,
		title,
		author,
		year,
		isCompleted,
	};
}

document.addEventListener(RENDER_EVENT, function () {
	const uncompletedBOOKList = document.getElementById('books');
	uncompletedBOOKList.innerHTML = '';

	const completedBOOKList = document.getElementById('completed-books');
	completedBOOKList.innerHTML = '';

	for (bookItem of books) {
		const bookElement = makeBook(bookItem);

		if (bookItem.isCompleted == false) uncompletedBOOKList.append(bookElement);
		else completedBOOKList.append(bookElement);
	}
});

function makeBook(bookObject) {
	const textTitle = document.createElement('h2');
	textTitle.innerText = bookObject.title;

	const textAuthor = document.createElement('h3');
	textAuthor.innerText = bookObject.author;

	const textTimestamp = document.createElement('p');
	textTimestamp.innerText = bookObject.year;

	const textContainer = document.createElement('div');
	textContainer.classList.add('inner');
	textContainer.append(textTitle, textAuthor, textTimestamp);

	const container = document.createElement('div');
	container.classList.add('item', 'shadow');
	container.append(textContainer);
	container.setAttribute('id', `book-${bookObject.id}`);

	const trashButton = document.createElement('button');
	trashButton.classList.add('trash-button');

	if (bookObject.isCompleted) {
		const undoButton = document.createElement('button');
		undoButton.classList.add('undo-button');
		undoButton.addEventListener('click', function () {
			undoTaskFromCompleted(bookObject.id);
		});

		trashButton.addEventListener('click', function () {
			removeTaskFromCompleted(bookObject.id);
		});

		container.append(undoButton, trashButton);
	} else {
		const checkButton = document.createElement('button');
		checkButton.classList.add('check-button');
		checkButton.addEventListener('click', function () {
			addTaskToCompleted(bookObject.id);
		});

		trashButton.addEventListener('click', function () {
			removeTaskFromCompleted(bookObject.id);
		});

		container.append(checkButton, trashButton);
	}

	return container;
}

function addTaskToCompleted(bookId) {
	const bookTarget = findBook(bookId);
	if (bookTarget == null) return;

	bookTarget.isCompleted = true;
	document.dispatchEvent(new Event(RENDER_EVENT));
	savedata();
}

function findBook(bookId) {
	for (bookItem of books) {
		if (bookItem.id === bookId) {
			return bookItem;
		}
	}
	return null;
}

function removeTaskFromCompleted(bookId) {
	const bookTarget = findBookIndex(bookId);
	if (bookTarget === -1) return;
	books.splice(bookTarget, 1);

	document.dispatchEvent(new Event(RENDER_EVENT));
	savedata();
}

function undoTaskFromCompleted(bookId) {
	const bookTarget = findBook(bookId);
	if (bookTarget == null) return;

	bookTarget.isCompleted = false;
	document.dispatchEvent(new Event(RENDER_EVENT));
	savedata();
}

function findBookIndex(bookId) {
	for (index in books) {
		if (books[index].id === bookId) {
			return index;
		}
	}
	return -1;
}

function savedata() {
	if (isStorageExist()) {
		const parsed = JSON.stringify(books);
		localStorage.setItem(STORAGE_KEY, parsed);
		document.dispatchEvent(new Event(SAVED_EVENT));
	}
}

function isStorageExist() {
	if (typeof Storage === undefined) {
		alert('Browser mu tidak mendukung penyimpanan');
		return false;
	}
	return true;
}

document.addEventListener(SAVED_EVENT, function () {
	console.log(localStorage.getItem(STORAGE_KEY));
});

function loadDataFromStorage() {
	const serializedData = localStorage.getItem(STORAGE_KEY);

	let data = JSON.parse(serializedData);

	if (data !== null) {
		for (book of data) {
			books.push(book);
		}
	}

	document.dispatchEvent(new Event(RENDER_EVENT));
}
