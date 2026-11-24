import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY;
const [owner, repo] = repository?.split('/') ?? [];
const isProjectPage = Boolean(repo && repo !== `${owner}.github.io`);

export default defineConfig({
  site: owner ? `https://${owner}.github.io` : 'http://localhost:4321',
  base: isProjectPage ? `/${repo}` : '/',
  output: 'static',
});
