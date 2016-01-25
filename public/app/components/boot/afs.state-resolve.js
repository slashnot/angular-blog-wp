function loadStates() {
    var url = $location.path(),
        log = [];
    //Check default
    if (url === "/" || url === "") {
        $state.go(appInfo.template.defaultState);
    }
    else {
        var stParams = $stateParams;
        var state = url.replace(/^\/|\/$/gi, '');
        var urlArray = state.split("/");
        var statesArray = [];
        var currentState = "";

        console.log($state.get());
        console.log($stateParams);

        //Store all the states as an array
        angular.forEach($state.get(), function (state) {
            statesArray.push(state.name);
        });
        $log.debug(statesArray);

        //Iterate and check State Parameters
        angular.forEach(urlArray, function (urlItem, index) {
            console.log(statesArray[index]);
            console.log(urlArray[index]);

            if (urlItem != '') {
                //check the state Array and match the url segment
                // if (statesArray.indexOf(urlItem) !== -1) {
                //First URL Item
                if (currentState === "") {
                    currentState = urlItem;
                }
                else {
                    //Check whether the state contains sub states
                    if (statesArray[index].match(/./)) {
                        console.log(statesArray[index]);
                    }
                    currentState = currentState + "." + urlItem;
                }
                // }
            }
        }, log);
        console.log(currentState);

        //var parentState = state.replace(/\/.*/, '');
        //$state.go(parentState).then(function () {
        //    state = state.replace(/\//g, ".");
        //    $state.go(state);
        //});
    }
}