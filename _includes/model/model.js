// 构建文章数据
var aArticle = '['+
	{% for post in site.posts] %}
		{% if post != site.posts[0] %}','+{% endif %}
		'{'+
			'"url":"{{post.url}}",'+
			'"title":"{{post.title}}",'+
			'"content":"{{post.content | strip_newlines |escape}}",'+// 过滤换行符,将内容字符串化
			'"date":"{{post.date | date:"%Y/%m/%d"}}",'+
			'"img":"{{post.customer.img}}",'+
			'"tags":'+
			'['+
			{% for tag in post.tags %}
			{% if tag != post.tags[0] %}','+{% endif %}
			'"{{tag}}"'+
			{% endfor %}
			'],'+
			'"comment":""'+
		'}'+
	{% endfor %}
']';
aArticle=aArticle.replace(/\s*/g,'');// 过滤空白字符
aArticle = JSON.parse(aArticle);// 字符串格式化

// 构建标签数据
var aTags = '['+
	{% for tag in site.tags %}
		{% if tag[0] != site.tags.first[0] %}','+{% endif %}
		'"{{ tag[0] }}"'+
	{% endfor %}
']';
var aTags = JSON.parse(aTags);

// 博客的全部数据
var aData = {
	tags:aTags, // 标签
	article:aArticle // 文章
}

var Model = Backbone.Model.extend({
	defaults : {
		data : aData.article,
		tags : aData.tags
	}
});
