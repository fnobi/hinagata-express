hinagata-express
====

## 事前に用意するもの
- node.js (version 4.0.0以上)

## 環境構築

- `npm install`

## Viewについて

- ファイルは全て、`views`以下に配置されています。テンプレートエンジンには[Jade](http://jade-lang.com/)を採用しています。

## デプロイについて

- herokuでの運用を前提にした構成になっていますので、以下の手順でデプロイしてください。

```
heroku create your-app-name
git push heroku master
```
