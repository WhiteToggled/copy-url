browser.commands.onCommand.addListener(function(command) {
    
    if(command === "copy-url") {
        browser.tabs.query({active: true, currentWindow: true})
            .then(tabs => {
                let currentTabUrl = tabs[0].url;
                navigator.clipboard.writeText(currentTabUrl)
                    .then(() => {
                        console.log("URL copied successfuly!");
                    })
                    .catch(error => {
                        console.error("Error copying URL");
                    })
            })
        .catch(error => {
            console.error("Error retrieving URL");
        })
    }

})