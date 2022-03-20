
console.log("my first javascript project");
class iBook {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}
class Display {
    add(iBook) {
        let tableBody = document.getElementById('tableBody');
        let trstring =
            `<tr>
                        <td>${iBook.name}</td>
                        <td>${iBook.author}</td>
                        <td>${iBook.type}</td>
                    </tr>`;
        tableBody.innerHTML += trstring;
    }

    clear() {
        let libraryform = document.getElementById('libraryForm');
        libraryform.reset();
    }
    validate(iBook) {
        if (iBook.name.length < 2 || iBook.author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }
    show(type, displaymessage) {
        let message = document.getElementById('message');
        let boldtext;
        if (type === 'success') {
            boldtext = 'Success';
        }
        else {
            boldtext = 'Error!';
        }
            message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                    <strong>${boldtext}:</strong> ${displaymessage}
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                    </button>
                                </div>`;
        setTimeout(function () {
            message.innerHTML = '';
        }, 5000);

    }

};
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let fiction = document.getElementById('fiction');
    let programing = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    let type;
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programing.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    let book = new iBook(name, author, type);

    let display = new Display();

    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', 'You have succesfully submitted your form');
    }
    else {
        display.show('danger', 'You have not succesfully submitted your form');
    }
    e.preventDefault();

}
// If user adds a note, add it to the localStorage

