export interface PublicFile {
  title: string;
  description: string;
  filename: string;
  format: string;
  size: string;
  updated: string;
}

export const publicFiles: PublicFile[] = [
  {
    title: '博客写作模板',
    description: '从选题、提纲到发布检查，帮助你把零散想法整理成一篇文章。',
    filename: 'blog-writing-template.md',
    format: 'MD',
    size: '< 1 KB',
    updated: '2026.11.24',
  },
  {
    title: '个人网站内容清单',
    description: '搭建个人网站前可以使用的内容准备清单，包含简介、文章与文件检查项。',
    filename: 'website-content-checklist.txt',
    format: 'TXT',
    size: '< 1 KB',
    updated: '2026.11.24',
  },
  {
    title: '阅读记录模板',
    description: '简洁的 CSV 阅读记录表，可导入 Excel、Numbers 或其他表格工具。',
    filename: 'reading-list-template.csv',
    format: 'CSV',
    size: '< 1 KB',
    updated: '2026.11.24',
  },
];
