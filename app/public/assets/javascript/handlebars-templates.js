// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "Handlebars-templates is ready" );

    //Function to render the URLS table
    window.updateUrlsTable = function(){
        $.getJSON( "/api/getUrls", function( data ) {
            var dataset = data;
            var datasetobj = {
                urls: dataset
            };
            console.log("TESTING --- site name is: " + dataset[0].URL);
            console.log("datasetobj: " + datasetobj.urls[0].statusCode);

            //UPDATE URLS TABLE
            var urlstable = $("#urls-table").html();
            var source = $("#table-template").html();
            var template = Handlebars.compile(source);

            // Compile the template
            var tablecompiled = Handlebars.compile(source);

            // Pass our data to the template
            var tabledata = tablecompiled(datasetobj);

            $('.urltable').html(tabledata);


            //UPDATE SITENAME
            // Grab the template script
            var sitename = $("#sitename").html();

            // Compile the template
            var sitenamecompiled = Handlebars.compile(sitename);

            // Define our data object
            var context={
                "sitename": dataset[0].URL
            };

            // Pass our data to the template
            var sitenamedata = sitenamecompiled(context);

            // Add the compiled html to the page
            $('.currentname').html("<h2>Current sitemap: " + sitenamedata + "</h2><a href='/sitemap'>Download Sitemap</a><br/><br/>");



        //END the GET function
        });
    };

    updateUrlsTable();


/*
    //Function to render the SSL Table
    window.updateSslTable = function(){
        $.getJSON( "/api/checkSSL", function( data ) {
            var dataset = data;
            console.log("SHOWING SSL DATA: " + data);


            var ssltable = $("#ssl-table-template").html();

            var ssltablecompiled = Handlebars.compile(ssltable);

            var context={
                    //"serverIP": dataset.serverIP,
                    //"serverName": dataset.serverName,
                    //"statusMessage": dataset.statusMessage,
                    //"certHostname": dataset.certHostname
                };

            var tablewithdata = ssltablecompiled(context);

            $('.ssltable').html(tablewithdata);

        //END the GET function
        });
    };

    updateSslTable();

*/


    window.testfunc = function() {
        // Grab the template script
        var theTemplateScript = $("#ssl-table-template").html();

        // Compile the template
        var theTemplate = Handlebars.compile(theTemplateScript);

        // Define our data object
        var context={
            "serverIP": "London",
            "serverName": "Baker Street",
            "statusMessage": "221B"
        };

        // Pass our data to the template
        var theCompiledHtml = theTemplate(context);

        // Add the compiled html to the page
        $('.ssltable').html(theCompiledHtml);

        }

    testfunc();







//End doc ready function
});


 
