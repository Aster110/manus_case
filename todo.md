# Manus Case 展示网站开发计划

## 1. 页面结构和 SEO 优化
### 1.1 语义化结构
- [X] 基础页面框架
- [X] 主标题区域
- [X] SEO Meta 配置
- [X] 分类导航区
- [X] 案例卡片组件
- [ ] 案例列表展示
- [ ] 案例详情模态框
- [ ] FAQ 区域
- [ ] 侧边栏

### 1.2 关键词优化
- [X] 页面标题优化
- [X] Meta 信息配置
- [ ] 内容关键词分布
- [ ] 图片 Alt 文本优化

### 1.3 Meta 信息
```typescript
interface PageMeta {
  title: string;         // "Manus Case 案例展示 - 专业医疗案例分享平台"
  description: string;   // "探索丰富的 Manus Case 医疗案例库，包含各类专业医疗案例分析..."
  keywords: string[];    // ["manus case", "医疗案例", "案例分析", ...]
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}
```

## 2. 数据结构
### 2.1 案例数据
```typescript
interface Case {
  id: string;
  title: string;        // 包含 "Manus Case" 关键词
  thumbnail: string;
  thumbnailAlt: string; // 包含 "Manus Case" 关键词
  image: string;
  imageAlt: string;     // 包含 "Manus Case" 关键词
  description: string;  // 自然包含关键词
  link: string;
  category: string;
  createdAt: string;
}
```

### 2.2 FAQ 数据
```typescript
interface FAQ {
  id: string;
  question: string;
  answer: string;
  isExpanded: boolean;  // 控制折叠状态
}
```

## 3. 组件设计
### 3.1 卡片组件
- 语义化结构
- 适当的关键词密度
- 图片优化（加载性能）

### 3.2 FAQ 组件
- 使用 details/summary 标签
- 可折叠交互
- 确保可访问性（ARIA 属性）

## 4. 技术实现
- Next.js（SSR 有利于 SEO）
- TailwindCSS
- TypeScript
- next-seo 插件

## 5. 开发优先级
1. 语义化页面框架搭建
2. 案例展示功能
3. 分类系统
4. FAQ 模块
5. SEO 优化完善
6. 搜索功能

## 6. JSON 配置文件规划

### 6.1 网站基础配置 (site-config.json)
```typescript
interface SiteConfig {
  name: string;                // 网站名称
  domain: string;             // 网站域名
  logo: string;               // logo 路径
  contact: {
    email: string;
    github?: string;
    twitter?: string;
  };
  icp?: string;               // 备案信息
}
```

### 6.2 SEO 配置 (seo-config.json)
```typescript
interface SEOConfig {
  defaultTitle: string;
  defaultDescription: string;
  defaultKeywords: string[];
  ogImage: string;
  googleSiteVerification?: string;
  baiduSiteVerification?: string;
}
```

### 6.3 分类配置 (categories.json)
```typescript
interface Category {
  id: string;
  name: string;
  description: string;
  icon?: string;              // 分类图标
  order: number;              // 显示顺序
}
```

### 6.4 FAQ 配置 (faq.json)
```typescript
interface FAQSection {
  id: string;
  title: string;              // FAQ 分组标题
  order: number;              // 显示顺序
  questions: {
    id: string;
    question: string;
    answer: string;
    order: number;            // 显示顺序
  }[];
}
```

### 6.5 案例数据 (cases.json)
```typescript
interface Case {
  id: string;
  title: string;
  thumbnail: string;
  thumbnailAlt: string;
  image: string;
  imageAlt: string;
  description: string;
  link: string;
  category: string;
  createdAt: string;
  featured?: boolean;         // 是否为精选案例
  order?: number;             // 精选案例显示顺序
}
```

### 6.6 广告位配置 (ads-config.json)
```typescript
interface AdsConfig {
  sidebar: {
    enabled: boolean;
    items: {
      id: string;
      title: string;
      image: string;
      link: string;
      order: number;
    }[];
  };
  // 其他广告位置...
}
```

### 6.7 导航配置 (navigation.json)
```typescript
interface Navigation {
  header: {
    id: string;
    title: string;
    link: string;
    order: number;
  }[];
  footer: {
    columns: {
      title: string;
      links: {
        title: string;
        link: string;
      }[];
    }[];
  };
}
```

### 6.8 文案配置 (content.json)
```typescript
interface Content {
  home: {
    hero: {
      title: string;
      description: string;
      ctaText: string;
    };
    sections: {
      title: string;
      description: string;
    }[];
  };
  // 其他页面文案...
}
```

## 7. 文件结构
