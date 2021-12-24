# Start2Impact project_JavaScript-Advanced 

#ENG

The application must consist of a simple text box (Google style) to allow the user to search for all books in a specific category.

Once the user clicks on a specific button, the application will have to contact the API of the external Open Library service: https://openlibrary.org/subjects/fantasy.json where fantasy is the category entered by the user. Once the list of books has been retrieved, the application will only be able to view the title and the list of authors.

When the user clicks on a specific book or button, the application must be able to view the description of the book. To make this functionality available, the application must contact another API of the Open Library service by passing the book key present in the response to the previously contacted service.

Example:

The user enters fantasy as a category, the application contacts the API https://openlibrary.org/subjects/fantasy.json, where the book is present
"key": "/ works / OL8193508W",
"title": "Alice's Adventures in Wonderland"

When the user clicks on the book title or on a special button and the application will contact the API where / works / OL8193508W corresponds to the book key in the previous answer, to obtain and view the complete description of the book.

"description": "One of the most popular and cited books in English, Alice's Adventures in Wonderland was the creation of Charles Lutwidge Dodgson (1832–1898), a distinguished scholar, mathematician and author who wrote under the pseudonym of Lewis Carroll. Written for readers who are young but equally appreciated by adults, the fantastic tale "



#IT

L’applicazione dovrà essere composta da un semplice textbox (Google style) per permettere all’utente di cercare tutti i libri di una specifica categoria.

Una volta che l’utente cliccherà su un apposito button, l’applicazione dovrà contattare le API del servizio esterno Open Library: https://openlibrary.org/subjects/fantasy.json dove fantasy è la categoria inserita dall’utente. L’applicazione una volta recuperata la lista dei libri dovrà visualizzare solamente il titolo e l’elenco degli autori.

Al click dell’utente su un libro o su un apposito button, l’applicazione deve poter visualizzare la descrizione del libro. Per rendere disponibile questa funzionalità l’applicazione deve contattare un’altra API del servizio Open Library passando la key del libro presente nella risposta al servizio contattato precedentemente.

Per esempio:

L’utente inserisce fantasy come categoria, l’applicazione contatta L’API https://openlibrary.org/subjects/fantasy.json, dove è presente il libro
"key": "/works/OL8193508W",
"title": "Alice's Adventures in Wonderland"

L’utente quando clicca sul titolo del libro oppure su un apposito button e l’applicazione contatterà l’API dove /works/OL8193508W corrisponde alla key del libro presente nella risposta precedente, in modo da ottenere e visualizzare la descrizione completa del libro. 

"description": "One of the most popular and most quoted books in English, Alice's Adventures in Wonderland was the creation of Charles Lutwidge Dodgson (1832–1898), a distinguished scholar, mathematician and author who wrote under the pseudonym of Lewis Carroll. Written for young readers but enjoyed equally by adults, the fantastic tale"

#Additional features:

ENG

- The "Recent searches" section has been added where it is possible to see up to a maximum of the last 3 searches. By clicking on these buttons you can search without typing.
- A simple change of theme. You can switch between light and dark themes by pressing the button on the top right.


ITA

- E' stata aggiunta la sezione "Ultime ricerche" dove è possibile vedere fino ad un massimo delle ultime 3 ricerche. Cliccando su questi pulsanti puoi cercare senza digitare.
- Un semplice cambio di tema. È possibile passare dal tema chiaro a quello scuro premendo il pulsante in alto a destra.


![schermata](https://user-images.githubusercontent.com/85701416/147369592-191c3357-1221-4b26-bc88-e50642a5dfce.png)

[Web page](https://wizardly-wiles-ab6378.netlify.app)

## Version

1.0
