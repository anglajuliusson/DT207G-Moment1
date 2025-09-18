# Om webbplatsen
Detta projekt är en enkel webbaserad applikation för att hantera kurser. Den är byggd med Node.js, Express och MySQL, och innehåller både en mobilanpassad och desktopanpassad design med hjälp av CSS Grid och Flexbox.

## Funktioner

- **Lägg till kurser**: Skapa nya kurser med namn, kod, syllabus och progression.
- **Visa kurser**: Kurser som sparats i databasen kan visas i tabellformat.
- **Responsiv design**: Anpassar layouten för desktop, tablet och mobil.
- **Menyfunktionalitet**: Navigationsmeny och hamburger-meny för små skärmar.
- **Felhantering**: Enkla felmeddelanden visas vid ogiltig inmatning.

## Hur lösningen fungerar

1. **Server och routing**  
   - `server.js` hanterar alla HTTP-förfrågningar.  
   - Routes finns för att lägga till kurser (`POST`) och hämta kurser (`GET`).  
   - Servern ansluter till MySQL-databasen vid start och visar fel om anslutningen misslyckas.

2. **Databas**  
   - Databasen `dt207g_courses` innehåller en tabell `courses` med kolumner för `id`, `code`, `name`, `syllabus` och `progression`.  
   - Kurser sparas permanent, även om servern startas om.

3. **Frontend**  
   - Formulär i `main` låter användare lägga till kurser.  
   - Tabeller används för att visa alla sparade kurser.  
   - CSS Grid används på större skärmar för layout med header, main och footer.  
   - Flexbox används på mindre skärmar för att hålla footern längst ner även vid lite innehåll.  
   - Menyn är responsiv: horisontell meny för desktop och hamburger-meny för mobil.

4. **Felhantering och användarfeedback**  
   - Felmeddelanden visas tydligt om formulärdata saknas eller är felaktig.  
   - Backend kontrollerar att inga tomma värden sparas i databasen.

5. **Designprinciper**  
   - Modern CSS och responsiv design för användarvänlighet.  
   - Header ligger alltid högst upp, main tar resterande utrymme och footer ligger längst ner.
