import blockContent from './blockContent'
import category from './category'
import {postType} from './postType'  // 新しいpostTypeをインポート
import author from './author'

export const schemaTypes = [postType, author, category, blockContent]
//                          ↑ 既存のpostをpostTypeに置き換え