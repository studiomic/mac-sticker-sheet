// デフォルトテーマ（標準のデザインとレイアウト）を読み込む
import DefaultTheme from 'vitepress/theme'
// さきほど作成したカスタムCSSファイルを読み込む
import './custom.css'

export default {
  // デフォルトテーマのすべての機能をベースとして継承する
  extends: DefaultTheme
}
