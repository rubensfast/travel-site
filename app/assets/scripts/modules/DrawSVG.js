import $ from 'jquery';
import Plugindrawsvg from '../../../../node_modules/drawsvg/public/jquery.drawsvg.min';

class DrawSVG {
    constructor(){
        this.createDraw();
    }
    
    // methods
    createDraw(){
        $(document).ready(function(){
            var $svg = $('svg').drawsvg();
            $svg.drawsvg('animate');
        });
    }
}

export default DrawSVG;