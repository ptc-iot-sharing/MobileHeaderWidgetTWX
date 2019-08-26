TW.Runtime.Widgets.mobileheader = function () {

    this.renderHtml = function () {
		
		$('head').append('<meta name="viewport" content="width=' + 
						 this.getProperty('ContentWidth') + ', ' + 
						 (this.getProperty('InitialScale') ? 'initial-scale=1.0, ' : '') + 
						 'maximum-scale=1.0, user-scalable=' + (this.getProperty('UserScalable') ? 'yes' : 'no') + 
						 (this.getProperty('MinimalUI') ? ', minimal-ui' : '' ) + 
						 '">');
		if (this.getProperty('WebAppCapable')) {
			$('head').append('<meta name="apple-mobile-web-app-capable" content="yes">');
			$("head").append('<meta name="apple-mobile-web-app-status-bar-style" content="' + this.getProperty('StatusBarStyle') + '">');
			
			if (this.getProperty('WebAppTitle')) {
				$('head').append('<meta name="apple-mobile-web-app-title" content="' + this.getProperty('WebAppTitle') + '">');
			}
		}
		
        var html = '<div class="widget-content" style="display: none;"></div>';
        return html;
    };
	
	this.afterRender = function() {
		this.boundingBox.css({display: 'none'})	;
	}
	
};