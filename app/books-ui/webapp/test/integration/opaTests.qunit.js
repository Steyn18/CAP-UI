sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'miyasuta/booksui/test/integration/FirstJourney',
		'miyasuta/booksui/test/integration/pages/BooksList',
		'miyasuta/booksui/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('miyasuta/booksui') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);