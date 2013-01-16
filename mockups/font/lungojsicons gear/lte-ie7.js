/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'lungojsicons\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-team' : '&#x74;&#x65;&#x61;&#x6d;',
			'icon-skill' : '&#x73;&#x6b;&#x69;&#x6c;&#x6c;',
			'icon-settings' : '&#x67;&#x65;&#x61;&#x72;',
			'icon-satisfaction' : '&#x73;&#x61;&#x74;',
			'icon-product' : '&#x70;&#x72;&#x6f;&#x64;&#x75;&#x63;&#x74;',
			'icon-percent' : '&#x70;&#x65;&#x72;&#x63;&#x65;&#x6e;&#x74;',
			'icon-money' : '&#x64;&#x6f;&#x6c;&#x6c;&#x61;&#x72;',
			'icon-left' : '&#x62;&#x61;&#x63;&#x6b;',
			'icon-investors' : '&#x69;&#x6e;&#x76;&#x65;&#x73;&#x74;&#x6f;&#x72;',
			'icon-delete' : '&#x64;&#x65;&#x6c;&#x65;&#x74;&#x65;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};