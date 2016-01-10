define(function(require, exports, module) {
    var Engine = require('famous/core/Engine');
    var Utility = require('famous/utilities/Utility');
    var Surface = require('famous/core/Surface');
    var StateModifier = require('famous/modifiers/StateModifier');
    var AppView = require('views/AppView');
    //var SlideData = require('data/SlideData');

    var mainContext = Engine.createContext();
    mainContext.setPerspective(1000);

    //Utility.loadURL(SlideData.getUrl(), initApp);

    var data = [ "http://8bitnerds.com/wp-content/uploads/2013/09/wolverine-minion.jpg",
                "http://8bitnerds.com/wp-content/uploads/2013/09/albert-einstein-minion.jpg",
                "http://8bitnerds.com/wp-content/uploads/2013/09/harry-potter-minion.jpg",
                "http://8bitnerds.com/wp-content/uploads/2013/09/the-big-bang-theory-minion.jpg"];


    var appView = new AppView({ data : data });

    mainContext.add(appView);


    var text = new Surface({
        content: '<h3>"I Love Minions"</h3>',
        size: [200,500],
        properties: {
           textAlign: "center",
           color: "rgb(255,51,0)"
        }
    });

    var textModifier = new StateModifier({
        origin: [0.5, 0],
        align: [0.5, 0.85]
    });

    mainContext.add(textModifier).add(text);

    
});
