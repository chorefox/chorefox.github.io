# Sito di ChoreFox

Sito minimo per l'App Store: home, informativa sulla privacy e supporto, in inglese e italiano.

Ogni pagina si apre in inglese, o in italiano se il browser è in italiano; in alto si può cambiare lingua (la scelta resta per le altre pagine). Per aprire una pagina in una lingua precisa aggiungi `#en` o `#it` all'indirizzo. La scelta della lingua è in `lang.js`.

## Prima di pubblicare

L'email di contatto è `chorefoxapp@gmail.com`, in `privacy.html` e `support.html`: per cambiarla sostituiscila in entrambi i file.

## Pubblicarlo con GitHub Pages

1. Su GitHub crea un repository **pubblico**, per esempio `chorefox`.
2. *Add file → Upload files*: trascina tutti i file di questa cartella e conferma con *Commit changes*.
3. *Settings → Pages*: in *Source* scegli *Deploy from a branch*, poi il branch `main` e la cartella `/ (root)`, e premi *Save*.
4. Dopo un paio di minuti il sito è online su `https://TUO-UTENTE.github.io/chorefox/`.

## Cosa inserire in App Store Connect

| Campo | Indirizzo |
| --- | --- |
| URL della politica sulla privacy | `https://TUO-UTENTE.github.io/chorefox/privacy.html` |
| URL di supporto | `https://TUO-UTENTE.github.io/chorefox/support.html` |
| URL di marketing (facoltativo) | `https://TUO-UTENTE.github.io/chorefox/` |

Gli indirizzi senza `#` vanno bene per tutte le lingue. Se in App Store Connect aggiungi la scheda in italiano, puoi usare gli stessi indirizzi con `#it` alla fine.
