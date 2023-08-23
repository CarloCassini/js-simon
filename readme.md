# Traccia

Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!

## svolgimento

- calcolo la data di domani alle 9.30 del mattino e la salvo in una variabile. deadLine (ok)

- creo una timing function con setInterval (intervallo ogni 1000 secondi)

  - salvo il valore della data attuale in una variabile. timeNow

  - calcolo la differenza tra la data di domani e la data di oggi e la salvo in una variabile timeLeft

  -estrapolo il valore in giorni, ore, minuti e secondi da timeLeft

  - valorizzo tutti i campi del form con i risultati del punto sopra

  - **se** timeleft == 0
    - concludo il conto alla rovescia (clearInterval)
    - mostro un alert "tempo scaduto"
