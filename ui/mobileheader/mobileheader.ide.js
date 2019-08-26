TW.IDE.Widgets.mobileheader = function () {
	
	this.widgetIconUrl = function() {
    	return  "../Common/extensions/MobileHeader_Widget/ui/mobileheader/mobileheader.ide.png";
	}

    this.widgetProperties = function () {
        return {
            'name': 'Mobile Header',
            'description': 'Appends the viewport tag at runtime.',
			'icon': 'mobileheader.ide.png',
            'category': ['Common'],
            'properties': {
                'Width': {
                    'defaultValue': 25
                },
                'Height': {
                    'defaultValue': 25
                },
				'WebAppCapable': {
					'baseType': 'BOOLEAN',
					'description': 'If enabled, this mash-up will tell iOS devices that it is web-app capable and can be displayed without the browser chrome.',
					'defaultValue': true
				},
				'WebAppTitle': {
					'baseType': 'STRING',
					'description': 'Must be used with WebAppCapable. This mash-up will tell iOS devices to use this title when added to the home screen.',
					'defaultValue': ''
				},
				'StatusBarStyle': {
					'baseType': 'STRING',
					'description': 'iOS only. Must be used with WebAppCapable. Determines the status bar style that iOS will use when showing this mash-up as a webapp.',
                    'defaultValue': 'black-translucent',
                    'selectOptions': [
                        { value: 'black-translucent', text: 'Transparent' },
                        { value: 'black', text: 'Black' },
                        { value: 'default', text: 'White' }
                    ]
				},
				'ContentWidth': {
					'baseType': 'STRING',
					'defaultValue': 'device-width',
					'description': 'Controls the width at which the page will be rendered.'
				},
				'UserScalable': {
					'baseType': 'BOOLEAN',
					'defaultValue': true,
					'description': 'If disabled, users will not be able to zoom in or out this mashup.'
				},
				'InitialScale': {
					'baseType': 'BOOLEAN',
					'defaultValue': false,
					'description': 'If enabled, the page will render at a scale of 1. Otherwise, the page will automatically zoom to fit all content.'
				},
				'MinimalUI': {
					'baseType': 'BOOLEAN',
					'defaultValue': false,
					'description': 'iPhone only. If enabled, the safari toolbars will minimize when this mashup is launched.'
				}
			}
        };
    };
	
	this.afterSetProperty = function (name, value) {
        var result = false;
		switch (name) {
			case 'Style':
			case 'Orientation':
			case 'Width':
			case 'Height':
			case 'Left':
			case 'Top':
			case 'Bottom':
			case 'Right':
				result = true;
                break;
            default:
                break;
        }
        return result;
    };
	
    this.renderHtml = function () {
        var html = '<div class="widget-content" style="background: #F00;"></div>';
        return html;
	};
	
};