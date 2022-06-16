from rest_framework import serializers
from django.contrib.auth import get_user_model
from articles.models import Article


class ProfileSerializer(serializers.ModelSerializer):
    class ArticleListSerializer(serializers.ModelSerializer):
        class Meta:
            model = Article
            fields = ('pk', 'title', 'content',)

    articles = ArticleListSerializer(many=True)
    like_articles = ArticleListSerializer(many=True)

    class Meta:
        model = get_user_model()
        fields = ('username', 'articles', 'like_articles',)
        read_only_fields = ('username', 'articles', 'like_articles',)
