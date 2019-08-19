// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel7")
                .setDock("none")
                .setLeft("11.666666666666666em")
                .setTop("8.333333333333334em")
                .setWidth("32.5em")
                .setHeight("28.333333333333332em")
                .setCaption("Colmeia-App")
            );
            
            host.xui_ui_panel7.append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel8")
                .setDock("none")
                .setLeft("-0.5em")
                .setTop("-0.3333333333333333em")
                .setWidth("20em")
                .setHeight("13.333333333333334em")
                .setCaption("")
            );
            
            host.xui_ui_panel8.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton3")
                .setLeft("-0.4166666666666667em")
                .setTop("-0.25em")
                .setWidth("8.25em")
                .setHeight("2.6666666666666665em")
                .setCaption("Salário")
            );
            
            host.xui_ui_panel8.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton4")
                .setLeft("-0.4166666666666667em")
                .setTop("2.25em")
                .setWidth("6.583333333333333em")
                .setHeight("2.6666666666666665em")
                .setCaption("Desconto")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});