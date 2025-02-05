<a name="readme-top"></a>

# <h1>Moove</h1>

<p>Moove è un servizio innovativo di micromobilità condivisa che si focalizza sulle interazioni tra utenti, mezzi di trasporto e le città servite.
Attraverso la definizione di interfacce e classi che rappresentano i vari componenti del sistema (IMezzo, IUtente, ICitta), il progetto mostra come la tecnologia possa supportare l'efficienza operativa e l'espansione del servizio di micromobilità, offrendo una piattaforma scalabile per l'innovazione nel settore del trasporto urbano. <br>
Puoi accedere all'app <a href="https://codepen.io/frafiore96/pen/qBzEGQG">qui</a>.</p>

## La struttura 
<p> Ho definito 3 interfacce (IMezzo, IUtente, ICitta) per rappresentare rispettivamente mezzi di trasporto, utenti che utilizzano il servizio e le città in cui Moove opera. In esse troviamo le proprietà e i metodi, garantendo che le implementazioni le rispettino. <br>
Le classi Mezzo, Utente e Citta implementano le interfacce di riferimento: la classe Mezzo implementa la logica per gestire i mezzi di trasporto dove il constructor inizializza il mezzo di trasporto con id univoco e stato iniziale “disponibile”, assegnaUtente(utente: IUtente) assegna il mezzo all'utente solo se è disponibile, cambiando lo stato a "in uso"; <br>
La classe Utente implementa la logica per gestire le operazioni degli utenti dove il constructor inizializza un nuovo utente con nome, cognome, email e metodo di pagamento, prenotaMezzo(mezzo: IMezzo) permette all'utente di prenotare un mezzo solo se è disponibile; <br>
La classe Citta implementa la logica per gestire le città e i mezzi disponibili dove il constructor inizializza una nuova città con il nome e un array vuoto di mezzi disponibili., prenotaMezzo(mezzo: IMezzo) permette all'utente di prenotare un mezzo solo se è disponibile. <br>
Ogni entità è separata per gestire al meglio le proprie responsabilità, facilitando la manutenzione e l'estendibilità del codice. L'uso di interfacce e classi rende il codice leggibile e chiaro, facilitando la comprensione di come funziona il sistema di micromobilità condivisa. </p>

<a name="readme-top"></a>

### Configurazione ambiente di sviluppo

Installa node.js <a href="https://nodejs.org/en/download/">qui</a>

Nel terminale di VSCode digita:

npm install -g typescript

### Interpretazione del codice

In main.ts apri il terminale e digita tsc main.ts per creare file main.js dove ci sarà codice da far interpretare a node.js <br>

Oppure testa il codice direttamente da node.js, sarà sufficiente, dal terminale, digitare il seguente comando: node main.js

