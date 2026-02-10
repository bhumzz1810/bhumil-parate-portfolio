// src/icons/tech-icons.ts
// Each value is a Vue component from unplugin-icons

import IconPhp from '~icons/logos/php'
import IconLaravel from '~icons/logos/laravel'
import IconNode from '~icons/logos/nodejs-icon'
import IconExpress from '~icons/logos/express'
import IconPython from '~icons/logos/python'
import IconJava from '~icons/logos/java'
import IconJquery from '~icons/logos/jquery'
import IconBootstrap from '~icons/logos/bootstrap'
import IconTailwind from '~icons/logos/tailwindcss-icon'
import IconSass from '~icons/logos/sass'

import IconMysql from '~icons/logos/mysql'
import IconPostgres from '~icons/logos/postgresql'
import IconMongo from '~icons/logos/mongodb-icon'
import IconSqlite from '~icons/logos/sqlite'
import IconFirebase from '~icons/logos/firebase'

import IconVue from '~icons/logos/vue'
import IconReact from '~icons/logos/react'
import IconRedux from '~icons/logos/redux'
import IconTs from '~icons/logos/typescript-icon'
import IconJs from '~icons/logos/javascript'
import IconHtml from '~icons/logos/html-5'
import IconCss from '~icons/logos/css-3'

import IconAws from '~icons/logos/aws'
import IconDocker from '~icons/logos/docker-icon'
import IconNginx from '~icons/logos/nginx'
import IconGhActions from '~icons/logos/github-actions'

import IconGit from '~icons/logos/git-icon'
import IconGithub from '~icons/logos/github-icon'
import IconGitlab from '~icons/logos/gitlab'
import IconBitbucket from '~icons/logos/bitbucket'

import IconVercel from '~icons/simple-icons/vercel'
import IconNetlify from '~icons/simple-icons/netlify'
import IconRender from '~icons/simple-icons/render'
import IconHeroku from '~icons/simple-icons/heroku'
import IconCpanel from '~icons/simple-icons/cpanel'
import IconHostinger from '~icons/simple-icons/hostinger'

export const TechIconMap = {
  'PHP': IconPhp,
  'Laravel': IconLaravel,
  'Node.js': IconNode,
  'Express.js': IconExpress,
  'Python (Basic)': IconPython,
  'Java (Basic)': IconJava,
  'jQuery': IconJquery,

  'Bootstrap': IconBootstrap,
  'Tailwind': IconTailwind,
  'Sass': IconSass,

  'MySQL': IconMysql,
  'PostgreSQL': IconPostgres,
  'MongoDB': IconMongo,
  'SQLite': IconSqlite,
  'Firebase': IconFirebase,

  'Vue': IconVue,
  'React': IconReact,
  'Redux': IconRedux,
  'TypeScript': IconTs,
  'JavaScript': IconJs,
  'HTML': IconHtml,
  'CSS': IconCss,

  'AWS': IconAws,
  'Docker': IconDocker,
  'Nginx': IconNginx,
  'GitHub Actions': IconGhActions,

  'Git': IconGit,
  'GitHub': IconGithub,
  'GitLab': IconGitlab,
  'Bitbucket': IconBitbucket,

  'Vercel': IconVercel,
  'Netlify': IconNetlify,
  'Render': IconRender,
  'Heroku': IconHeroku,
  'cPanel Admin': IconCpanel,
  'Hostinger': IconHostinger,
} as const

export type TechName = keyof typeof TechIconMap
