---
layout: internal/latest_news_item
title: Latest News Item
permalink: /latest-news/latest-news-item/
---

<!--- This child document initializes the page in Jekyll. -->

{% assign article = site.data.articles[0].body %}

{{ article | markdownify }}