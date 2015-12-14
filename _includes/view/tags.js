var Tags = Backbone.View.extend({
	initialize:function () {
		var oData = this.model.toJSON();
		$('.tags-ul').html(this.template(oData));
	},
	template:_.template($('#tplTags').html()),
});