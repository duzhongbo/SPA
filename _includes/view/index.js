var vIndex = Backbone.View.extend({
	initialize : function () {
		this.renderArticleList();
	},
	renderArticleList:function (model) {
		$('.index-article-ul').html(this.template(this.model.toJSON()));
	},
	template:_.template($('#template').html()),
	el:$('.index'),
	events:{
		'click .index-article-a':'showDetail',
		'click .index-title':'changeBg'
	},
	showDetail:function (e) {
		var target = e.target || e.srcElement;
		var url = $(target).attr('href');
		location.hash='article'+url;
		return false;
	},
	aBg:['bg0','bg1','bg2'],
	changeBg:function () {
		var aBg = this.aBg;
		var sOld  = aBg[0];
		var first= aBg.shift();
		aBg.push(first);
		$('.wrap').addClass(aBg[0]).removeClass(sOld);
	}
});
