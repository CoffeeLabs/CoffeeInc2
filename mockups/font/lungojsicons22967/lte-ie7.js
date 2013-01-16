/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'lungojsicons\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-team' : '&#x33;&#x34;&#x74;&#x2a;&#x2a;',
			'icon-skill' : '&#x66;&#x48;&#x24;&#x25;',
			'icon-settings' : '&#x64;&#x33;&#x3a;&#x3a;&#x34;&#x35;',
			'icon-satisfaction' : '&#x2c;&#x2c;&#x73;&#x64;&#x67;',
			'icon-product' : '&#x3b;&#x73;&#x33;&#x66;&#x32;',
			'icon-percent' : '&#x34;&#x36;&#x33;&#x25;&#x25;',
			'icon-money' : '&#x24;&#x24;&#x24;&#x32;&#x67;&#x3b;',
			'icon-left' : '&#x33;&#x2a;&#x2b;&#x32;',
			'icon-investors' : '&#x69;&#x7e;&#x32;&#x33;&#x74;',
			'icon-delete' : '&#x35;&#x26;&#x2f;&#x34;&#x33;'
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