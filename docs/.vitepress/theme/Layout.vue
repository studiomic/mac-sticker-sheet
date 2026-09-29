<!-- .vitepress/theme/Layout.vue -->
<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

const { Layout } = DefaultTheme
// フロントマターのデータを取得
const { frontmatter } = useData()
</script>

<template>
  <Layout>
    <!-- ナビゲーションバーの直後に独自のテキストを差し込むスロット -->
    <template #nav-bar-content-before>
      <div v-if="frontmatter.headerText" class="custom-header-text">
        {{ frontmatter.headerText }}
      </div>
    </template>
  </Layout>
</template>


