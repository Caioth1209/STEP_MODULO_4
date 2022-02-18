$(document).ready(function() {

    let container = $('body');
    let element = $('#imagem');
    
    let pointerHTML = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 485.632 485.632" style="enable-background:new 0 0 485.632 485.632;" xml:space="preserve">
                    <g>
                        <g>
                            <g>
                                <path style="fill:#010002;" d="M242.816,0C148.699,0,72.396,76.303,72.396,170.419c0,7.205,0.578,14.227,1.459,21.188
                                    C88.417,324.727,231.75,478.153,231.75,478.153c2.554,2.858,5.016,4.621,7.387,5.897l0.122,0.061l4.773,1.52l4.773-1.52
                                    l0.122-0.061c2.371-1.277,4.834-3.131,7.387-5.897c0,0,141.266-153.7,155.493-286.849c0.851-6.87,1.429-13.832,1.429-20.915
                                    C413.205,76.303,336.933,0,242.816,0z M242.816,280.04c-60.434,0-109.62-49.186-109.62-109.62s49.186-109.62,109.62-109.62
                                    s109.59,49.186,109.59,109.62S303.25,280.04,242.816,280.04z"/>
                            </g>
                        </g>
                        
                        
                    </svg>`
  
    
    let cursor = $('<div />').addClass('cursor').html(pointerHTML).appendTo(container);

    $(document).on('mousemove', e => {
        cursor.toggle($(e.target).is(container));
        cursor.css({
            '--x': e.pageX + 'px',
            '--y': e.pageY + 'px',
            '--r': calculateRotate(cursor, element) + 180 + 'deg'
        });
    });
    
    container.on('mouseleave', e => {
       cursor.hide(); 
    });

    function calculateRotate(elem, to) {
        let offset = elem.offset(),
            toOffset = to.offset(),
            center = {
                x: offset.left + elem.outerWidth() / 2,
                y: offset.top + elem.outerHeight() / 2
            },
            toCenter = {
                x: toOffset.left + to.outerWidth() / 2,
                y: toOffset.top + to.outerHeight() / 2
            },
            radians = Math.atan2(toCenter.x - center.x, toCenter.y - center.y),
            degree = (radians * (180 / Math.PI) * -1) + 180;
        return degree;
    }

});