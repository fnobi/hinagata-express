hinagata-express
====

## 事前に用意するもの
- node.js (version 4.0.0以上)

## 環境構築

- `npm install`

## Viewについて

- ファイルは全て、`views`以下に配置されています。テンプレートエンジンには[Jade](http://jade-lang.com/)を採用しています。

## Modelについて

- [Sequelize][http://docs.sequelizejs.com/]を採用しています。またDBは基本的にPostgreSQLを想定しています。

### 開発開始時

- PostgreSQLをインストールの上、あらかじめデータベースの作成までは行うようにしてください。

```
# development
create database hinagata_express_development;

# production
create database hinagata_express_production;
```

### テーブルの初期化

- migrationファイルを作成して、テーブルの初期化・更新を行うようになっていますので、こちらを利用してください。
- `npm run migrate`でマイグレーションが行われます。また`npm prestart`でも同様の処理が行われるようになっていますので、start時には注意してください。

### モデルの追加
- 先述の通り、テーブルの更新はまずmigrationファイルを作成するフローになっていますので、以下のサンプルを参考に、コマンドラインから行ってください。

```
npm run create-model -- --name User --attributes first_name:string,last_name:string,bio:text
```

- 実行後、migrationファイルとモデルのスクリプトが追加されているはずですので、重ねてマイグレーションを実行すれば、データベースに反映され、プログラムからも使えるようになっているはずです。

## デプロイについて

- herokuでの運用を前提にした構成になっていますので、以下の手順でデプロイしてください。

```
heroku create your-app-name
git push heroku master
```
