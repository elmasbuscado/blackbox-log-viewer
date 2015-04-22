"use strict";

function GraphLegend(targetElem, config) {
    
    function buildLegend() {
        var 
            graphs = config.getGraphs(),
            i, j;
        
        targetElem.empty();
        
        for (i = 0; i < graphs.length; i++) {
            var 
                graph = graphs[i],
                graphDiv = $('<div class="graph-legend"><h3></h3><ul class="list-unstyled graph-legend-field-list"></ul></div>'),
                graphTitle = $("h3", graphDiv),
                fieldList = $("ul", graphDiv);
            
            graphTitle.text(graph.label);
            
            for (j = 0; j < graph.fields.length; j++) {
                var 
                    field = graph.fields[j],
                    li = $('<li class="graph-legend-field"></li>');
                
                li.text(FlightlogFieldPresenter.fieldNameToFriendly(field.name));
                li.css('border-bottom', "2px solid " + field.color);
                
                fieldList.append(li);
            }
            
            targetElem.append(graphDiv);
            
            $('.log-close-legend-dialog').on('click', function() {
            	$('.log-graph-config').hide();
            	$('.log-open-legend-dialog').show();
            	updateCanvasSize();
            });
            
            $('.log-open-legend-dialog').on('click', function() {
            	$('.log-graph-config').show();
            	$('.log-open-legend-dialog').hide();
            	updateCanvasSize();
            });
        }
    }
    
    config.addListener(buildLegend);
    
    buildLegend();
}