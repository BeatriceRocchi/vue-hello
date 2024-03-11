Vue Hello
===
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.

## Svolgimento
1. Esercizio base: 
    - destrutturare l'oggetto Vue per recuperare il metodo createApp
    - innestare con "mount" il metodo createApp nel div in html con id="app"
    - in createApp, fornire come return del metodo data() il messaggio da mostrare in pagina

2. Esercizio bonus:
    - aggiungere nel return del metodo data() anche image con l'url dell'immagine da mostrare in pagina
    - in html, inserire image nel src del tag img

3. Reattività aggiunte:
    - Orologio
    - Countdown con colori diversi a seconda di numeri pari o dispari
    - Cambi di classi ai testi in base a valori di input
    - Array di immagini con cambio dinamico