(function(e){function t(t,n){this.settings=n;this.el={select:e(t),options:e("option",t)};this.size=this.el.options.length;this.settings&&this.size&&this.init()}e.extend(t.prototype,{init:function(){e.each(["container","decrement","increment","value"],e.proxy(function(t,n){this.el[n]=e(this.settings.template[n]);this.el[n].addClass(this.settings.cssClass+"-"+n);n!=="container"&&this.el.container.append(this.el[n])},this));this.widget=this.el.container;this.el.increment.on("click",e.proxy(this.increment,this));this.el.decrement.on("click",e.proxy(this.decrement,this));this.set(this.el.select.prop("selectedIndex"));this.el.select.hide().after(this.el.container)},set:function(e){if(e>=0&&e<this.size){this.el.select.prop("selectedIndex",e);this.el.decrement.toggleClass(this.settings.cssClass+"-disabled",e===0);this.el.increment.toggleClass(this.settings.cssClass+"-disabled",e===this.size-1);this.el.value.text(this.el.options.eq(e).text())}},increment:function(){this.set(this.el.select.prop("selectedIndex")+1)},decrement:function(){this.set(this.el.select.prop("selectedIndex")-1)}});e.fn.optionPicker=function(n){var r=e.extend({},e.fn.optionPicker.defaults,n);return this.each(function(){e.data(this,"sodaOptionPicker")||e.data(this,"sodaOptionPicker",new t(this,r))})};e.fn.optionPicker.defaults={cssClass:"option-picker",template:{container:"<div></div>",increment:"<div>+</div>",decrement:"<div>-</div>",value:"<div></div>"}}})(jQuery);