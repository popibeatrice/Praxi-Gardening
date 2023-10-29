import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cms';
import tailwind from '@astrojs/tailwind';
import compress from "astro-compress";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), NetlifyCMS({
    config: {
      backend: {
        name: 'git-gateway',
        branch: 'master'
      },
      adminPath: 'admin',
      collections: [{
        name: 'posts',
        label: 'Blog Posts',
        folder: 'src/pages/posts',
        create: true,
        delete: true,
        fields: [{
          name: 'title',
          widget: 'string',
          label: 'Post Title'
        }, {
          name: 'body',
          widget: 'markdown',
          label: 'Post Body'
        }]
      }]
    }
  }), compress(), react()],
  output: 'server'
});