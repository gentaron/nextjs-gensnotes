import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',        // 内部で使用される名前
  title: 'Post',       // UI上で表示される名前
  type: 'document',    // ドキュメントタイプとして定義
  fields: [            // フィールドの定義
    // タイトルフィールド
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(), // 必須項目
    }),
    // スラッグフィールド（URL用）
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'}, // タイトルから自動生成
      validation: (rule) => rule.required(),
    }),
    // 公開日時フィールド
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(), // 現在時刻をデフォルト値
      validation: (rule) => rule.required(),
    }),
    // 画像フィールド
    defineField({
      name: 'image',
      type: 'image',
    }),
    // 本文フィールド（リッチテキスト）
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}], // ブロック形式のコンテンツ
    }),
  ],
})