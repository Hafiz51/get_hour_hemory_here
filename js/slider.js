

    window.jssor_1_slider_init = function() {

        var jssor_1_SlideoTransitions = [
        [{b:0,d:600,o:0.8}],
        [{b:300,d:600,o:0.8}],
        [{b:600,d:600,o:0.8}],
        [{b:-1,d:1,da:[0,700]},{b:500,d:3500,da:[623,700],e:{da:1}}],
        [{b:1000,d:500,o:1}],
        [{b:1000,d:500,o:1}],
        [{b:-1,d:1,y:30},{b:1000,d:500,y:0,o:1,e:{y:27}}],
        [{b:1700,d:500,o:1}],
        [{b:1700,d:500,o:1}],
        [{b:-1,d:1,y:30},{b:1700,d:500,y:0,o:1,e:{y:27}}],
        [{b:2300,d:500,o:1}],
        [{b:2300,d:500,o:1}],
        [{b:-1,d:1,y:30},{b:2300,d:500,y:0,o:1,e:{y:27}}],
        [{b:2900,d:500,o:1}],
        [{b:2900,d:500,o:1}],
        [{b:-1,d:1,y:30},{b:2900,d:500,y:0,o:1,e:{y:27}}],
        [{b:0,d:600,x:208,y:44,e:{x:27,y:27}}],
        [{b:300,d:600,x:145,y:22,e:{x:27,y:27}}],
        [{b:100,d:600,x:177,y:31,e:{x:27,y:27}}],
        [{b:200,d:600,x:177,y:31,e:{x:27,y:27}}],
        [{b:-1,d:1,x:-80,y:-370,r:-60,rY:30,sY:1.5,p:{x:{d:1,dO:68},y:{d:1,dO:68},r:{d:1,dO:68}}},{b:300,d:1500,x:0,y:0,o:1,r:0,kX:-15,e:{x:27,y:27,o:1,r:27,kX:27},p:{x:{dl:0.02,o:68},y:{dl:0.02,o:68},o:{dl:0.2,o:68},r:{dl:0.02,o:68},kX:{dl:0.02,o:68}}}],
        [{b:-1,d:1,x:-80,y:-370,r:-60,sY:1.5,p:{x:{d:1,dO:68},y:{d:1,dO:68},r:{d:1,dO:68}}},{b:300,d:1500,x:0,y:0,o:1,r:0,kX:-15,e:{x:27,y:27,o:1,r:27,kX:27},p:{x:{dl:0.02,o:68},y:{dl:0.02,o:68},o:{dl:0.2,o:68},r:{dl:0.02,o:68},kX:{dl:0.02,o:68}}}],
        [{b:-1,d:1,sX:1.2,kX:-15},{b:0,d:600,o:0.06}],
        [{b:-1,d:1,x:-30,sY:1.3,p:{x:{o:32,r:0.5}}},{b:600,d:600,x:0,o:1,e:{x:36,o:1},p:{x:{dl:0.1,o:32,rd:2},o:{dl:0.1,o:32,rd:2}}}],
        [{b:600,d:600,x:300,e:{x:7}}],
        [{b:-1,d:1,x:-30,sY:1.3,p:{x:{o:32,r:0.5}}},{b:900,d:600,x:0,o:1,e:{x:36,o:1},p:{x:{dl:0.1,o:32,rd:2},o:{dl:0.1,o:32,rd:2}}}],
        [{b:900,d:600,x:97,e:{x:7}}],
        [{b:-1,d:1,x:-30,sY:1.3,p:{x:{o:32,r:0.5}}},{b:1200,d:600,x:0,o:1,e:{x:36,o:1},p:{x:{dl:0.1,o:32,rd:2},o:{dl:0.1,o:32,rd:2}}}],
        [{b:1200,d:600,x:260,e:{x:7}}],
        [{b:-1,d:1,x:-30,sY:1.3,p:{x:{o:32,r:0.5}}},{b:1500,d:1000,x:0,o:1,e:{x:36,o:1},p:{x:{dl:0.1,o:32,rd:2},o:{dl:0.1,o:32,rd:2}}}],
        [{b:1500,d:1000,x:112,e:{x:7}}],
        [{b:-1,d:1,x:-30,sY:1.3,p:{x:{o:32,r:0.5}}},{b:2000,d:1000,x:0,o:1,e:{x:36,o:1},p:{x:{dl:0.1,o:32,rd:2},o:{dl:0.1,o:32,rd:2}}}],
        [{b:2000,d:1000,x:105,e:{x:7}}]
        ];

        var jssor_1_options = {
        $AutoPlay: 1,
        $CaptionSliderOptions: {
            $Class: $JssorCaptionSlideo$,
            $Transitions: jssor_1_SlideoTransitions
        },
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$
        },
        $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$,
            $SpacingX: 16,
            $SpacingY: 16
        }
        };

        var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

        /*#region responsive code begin*/

        var MAX_WIDTH = 980;

        function ScaleSlider() {
            var containerElement = jssor_1_slider.$Elmt.parentNode;
            var containerWidth = containerElement.clientWidth;

            if (containerWidth) {

                var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

                jssor_1_slider.$ScaleWidth(expectedWidth);
            }
            else {
                window.setTimeout(ScaleSlider, 30);
            }
        }

        ScaleSlider();

        $Jssor$.$AddEvent(window, "load", ScaleSlider);
        $Jssor$.$AddEvent(window, "resize", ScaleSlider);
        $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
        /*#endregion responsive code end*/
    };