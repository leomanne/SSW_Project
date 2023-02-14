# Progetto TEATRO sviluppo di sistemi web

Il progetto consiste in una pagina web in grado di gestire (grazie anche ad un database) prenotazioni e creazioni di spettacoli da parte degli utenti.

Inoltre il progetto si trova suddiviso in varie component:
- component padre "app" che richiama i metodi e scambia informazioni con le altre component
- get-reservation-name: in questa parte viene gestito il salvataggio del nominativo utente e la scelta della tipologia di prenotazione [rapida/non rapida],                         questi dati vengono poi inviati ad "app"
- open-reservation: Mostra le matrici dei posti [platea/palco] e controlla che non siano occupate(se sono occupate mostra il posto grigio)
- create-theater: questa component si occupa della creazione del teatro (si puo modificare le dimensioni a piacimento con dei limiti dei posti)

Esiste anche un servizio aggiuntivo "threater.service" che sfrutta dei metodi di chiamata al KVaaS come da specifica del progetto.
i metodi :
- new: crea una nuova coppia chiave-valore, restituendone la chiave. IL valore associato è la stringa vuota
- get: ottiene il valore in corrispondenza ad una chiave data
- set: imposta un valore in corrispondenza ad una chiave data

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-ivy-jocadz)
