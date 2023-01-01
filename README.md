# google_sheet_word_counter
Count words in a google doc from a given link in sheets.

How to use:
1) Open google sheets, click on Extensions -> Apps script.
2) Replace the default contents of the app with the word_counter.gs contents (and rename the file if you want).
3) Go back to Google sheets and click Extensions -> Macros -> Import macro -> Add Function (on populateWordCountPerDoc).
4) In your google sheets, you'll need the links in a column and an empty column next to them, select both columns for the rows you want counting to happen on (for example A1:B8 or G3:H72).
5) Once you have both columns selected, click Extensions -> Macros -> populateWordCountPerDoc.

Please note that it determines if something is a link by checking if the left column item starts with 'http' and you
will need to change that check/how it imports the text if you're using embedded links or have text before the link. 
I hope this will be able to help someone else too, the functionality wasn't built into sheets at the time.
