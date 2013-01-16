/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'lungojsicons\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-team' : '&#x74;',
			'icon-skill' : '&#x64;',
			'icon-settings' : '&#x73;',
			'icon-satisfaction' : '&#x68;',
			'icon-product' : '&#x70;',
			'icon-percent' : '&#x25;',
			'icon-money' : '&#x24;',
			'icon-left' : '&#x3c;',
			'icon-investors' : '&#x69;',
			'icon-delete' : '&#x78;'
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