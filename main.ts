//creazione interfacce IMezzo, IUtente, ICitta

interface IMezzo {
    tipo: string;
    id: string;
    stato: 'disponibile' | 'in uso';
    assegnaUtente(utente: IUtente): void;
}

interface IUtente {
    nome: string;
    cognome: string;
    email: string;
    metodoPagamento: string;
    prenotaMezzo(mezzo: IMezzo): void;
}

interface ICitta {
    nome: string;
    mezziDisponibili: IMezzo[];
    aggiungiMezzo(mezzo: IMezzo): void;
}

//implementazione delle classi
class Mezzo implements IMezzo {
    tipo: string;
    id: string;
    stato: 'disponibile' | 'in uso';

    constructor (tipo: string, id: string) {
        this.tipo = tipo;
        this.id = id;
        this.stato = 'disponibile';
    }
    assegnaUtente(utente: IUtente):void {
        if (this.stato === 'disponibile') {
            this.stato = 'in uso';
            console.log(`${utente.nome} ${utente.cognome} ha preso ${this.tipo} con ID ${this.id}.`);
        } else {
            console.log(`${this.tipo} con ID ${this.id} è già in uso.`);
        }
    }
}

class Utente implements IUtente {
    nome: string;
    cognome: string;
    email: string;
    metodoPagamento: string;

    constructor(nome: string, cognome: string, email: string, metodoPagamento: string){
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamento = metodoPagamento;
    }
    prenotaMezzo(mezzo: IMezzo): void {
        if (mezzo.stato === 'disponibile') {
            mezzo.assegnaUtente(this);
        } else {
            console.log(`${mezzo.tipo} con ID ${mezzo.id} non è disponibile per la prenotazione.`);
        }
    }
}

class Citta implements ICitta {
    nome: string;
    mezziDisponibili: IMezzo[];

    constructor(nome: string){
        this.nome = nome;
        this.mezziDisponibili = [];
    }

    aggiungiMezzo(mezzo: IMezzo): void {
        this.mezziDisponibili.push(mezzo);
        console.log(`${mezzo.tipo} con ID ${mezzo.id} aggiunto alla città ${this.nome}.`);
    }
}

//istanze
//creazione mezzi
let bici001 = new Mezzo('bici', 'B001');
let bici002 = new Mezzo('bici', 'B002');
let bici003 = new Mezzo('bici', 'B003');
let scooter001 = new Mezzo('scooter', 'S001');
let scooter002 = new Mezzo('scooter', 'S002');
let scooter003 = new Mezzo('scooter', 'S003');
let monopattino001 = new Mezzo('monopattino', 'M001');
let monopattino002 = new Mezzo('monopattino', 'M002');
let monopattino003 = new Mezzo('monopattino', 'M003');

//creazione utenti
let utente1 = new Utente('Francesco', 'Fiorentino', 'francescofiorentino1996@gmail.com', 'carta di credito');
let utente2 = new Utente('Steve', 'Jobs', 'stevejobs@apple.com', 'apple pay');
let utente3 = new Utente('Elon', 'Musk', 'elonmusk@tesla.com', 'paypal');

//creazione città
let roma = new Citta('Roma');
let milano = new Citta('Milano');
let napoli = new Citta('Napoli');
let firenze = new Citta('Firenze');
let bologna = new Citta('Bologna');
let torino = new Citta('Torino');
let cagliari = new Citta('Cagliari');
let palermo = new Citta('Palermo');


//test
milano.aggiungiMezzo(bici001); 
milano.aggiungiMezzo(scooter001);
milano.aggiungiMezzo(monopattino001);

utente1.prenotaMezzo(bici001);
utente2.prenotaMezzo(bici001);


bici001.assegnaUtente(utente1);
monopattino001.assegnaUtente(utente1);

console.log(milano.mezziDisponibili) //mostra i mezzi disponibili o in uso a milano