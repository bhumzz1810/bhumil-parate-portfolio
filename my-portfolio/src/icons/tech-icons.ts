// Logos
import IconLogosPhp from '~icons/logos/php'
import IconLogosLaravel from '~icons/logos/laravel'
import IconLogosNodejsIcon from '~icons/logos/nodejs-icon'
import IconLogosExpress from '~icons/logos/express'
import IconLogosPython from '~icons/logos/python'
import IconLogosJava from '~icons/logos/java'
import IconLogosJquery from '~icons/logos/jquery'
import IconLogosBootstrap from '~icons/logos/bootstrap'
import IconLogosTailwindcssIcon from '~icons/logos/tailwindcss-icon'
import IconLogosSass from '~icons/logos/sass'

import IconLogosMysql from '~icons/logos/mysql'
import IconLogosPostgresql from '~icons/logos/postgresql'
import IconLogosMongodbIcon from '~icons/logos/mongodb-icon'
import IconLogosSqlite from '~icons/logos/sqlite'
import IconLogosFirebase from '~icons/logos/firebase'

import IconLogosVue from '~icons/logos/vue'
import IconLogosReact from '~icons/logos/react'
import IconLogosRedux from '~icons/logos/redux'
import IconLogosTypescriptIcon from '~icons/logos/typescript-icon'
import IconLogosJavascript from '~icons/logos/javascript'
import IconLogosHtml5 from '~icons/logos/html-5'
import IconLogosCss3 from '~icons/logos/css-3'

import IconLogosAws from '~icons/logos/aws'
import IconLogosDockerIcon from '~icons/logos/docker-icon'
import IconLogosNginx from '~icons/logos/nginx'
import IconLogosGithubActions from '~icons/logos/github-actions'

import IconLogosGitIcon from '~icons/logos/git-icon'
import IconLogosGithubIcon from '~icons/logos/github-icon'
import IconLogosGitlab from '~icons/logos/gitlab'
import IconLogosBitbucket from '~icons/logos/bitbucket'

// Simple Icons (not in logos)
import IconSimpleIconsVercel from '~icons/simple-icons/vercel'
import IconSimpleIconsNetlify from '~icons/simple-icons/netlify'
import IconSimpleIconsRender from '~icons/simple-icons/render'
import IconSimpleIconsHeroku from '~icons/simple-icons/heroku'
import IconSimpleIconsCpanel from '~icons/simple-icons/cpanel'
import IconSimpleIconsHostinger from '~icons/simple-icons/hostinger'

// Export one map (tech name -> component)
export const TechIconMap = {
  'PHP': IconLogosPhp,
  'Laravel': IconLogosLaravel,
  'Node.js': IconLogosNodejsIcon,
  'Express.js': IconLogosExpress,
  'Python (Basic)': IconLogosPython,
  'Java (Basic)': IconLogosJava,
  'jQuery': IconLogosJquery,

  'Bootstrap': IconLogosBootstrap,
  'Tailwind': IconLogosTailwindcssIcon,
  'Sass': IconLogosSass,

  'MySQL': IconLogosMysql,
  'PostgreSQL': IconLogosPostgresql,
  'MongoDB': IconLogosMongodbIcon,
  'SQLite': IconLogosSqlite,
  'Firebase': IconLogosFirebase,

  'Vue': IconLogosVue,
  'React': IconLogosReact,
  'Redux': IconLogosRedux,
  'TypeScript': IconLogosTypescriptIcon,
  'JavaScript': IconLogosJavascript,
  'HTML': IconLogosHtml5,
  'CSS': IconLogosCss3,

  'AWS': IconLogosAws,
  'Docker': IconLogosDockerIcon,
  'Nginx': IconLogosNginx,
  'GitHub Actions': IconLogosGithubActions,

  'Git': IconLogosGitIcon,
  'GitHub': IconLogosGithubIcon,
  'GitLab': IconLogosGitlab,
  'Bitbucket': IconLogosBitbucket,

  'Vercel': IconSimpleIconsVercel,
  'Netlify': IconSimpleIconsNetlify,
  'Render': IconSimpleIconsRender,
  'Heroku': IconSimpleIconsHeroku,
  'cPanel Admin': IconSimpleIconsCpanel,
  'Hostinger': IconSimpleIconsHostinger,
} as const
