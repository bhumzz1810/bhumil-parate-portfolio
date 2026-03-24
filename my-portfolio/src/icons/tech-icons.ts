// src/icons/tech-icons.ts
// Each value is a Vue component from unplugin-icons

import IconJava from '~icons/logos/java'
import IconJs from '~icons/logos/javascript'
import IconTs from '~icons/logos/typescript-icon'
import IconHtml from '~icons/logos/html-5'
import IconCss from '~icons/logos/css-3'

import IconSpring from '~icons/logos/spring-icon'
import IconKubernetes from '~icons/logos/kubernetes'
import IconDocker from '~icons/logos/docker-icon'
import IconKafka from '~icons/simple-icons/apachekafka'
import IconJenkins from '~icons/logos/jenkins'

import IconReact from '~icons/logos/react'
import IconRedux from '~icons/logos/redux'

import IconPostgres from '~icons/logos/postgresql'
import IconMysql from '~icons/logos/mysql'
import IconMongo from '~icons/logos/mongodb-icon'

import IconAws from '~icons/logos/aws'
import IconAzure from '~icons/logos/microsoft-azure'
import IconNginx from '~icons/logos/nginx'
import IconGhActions from '~icons/logos/github-actions'

import IconGit from '~icons/logos/git-icon'
import IconGithub from '~icons/logos/github-icon'
import IconPostman from '~icons/logos/postman-icon'
import IconJira from '~icons/logos/jira'

export const TechIconMap = {
  'Java': IconJava,
  'JavaScript': IconJs,
  'TypeScript': IconTs,
  'HTML': IconHtml,
  'CSS': IconCss,

  'Spring Boot': IconSpring,
  'Spring MVC': IconSpring,
  'Spring Cloud': IconSpring,
  'Kubernetes': IconKubernetes,
  'Docker': IconDocker,
  'Kafka': IconKafka,
  'Jenkins': IconJenkins,

  'React': IconReact,
  'Redux': IconRedux,

  'PostgreSQL': IconPostgres,
  'MySQL': IconMysql,
  'MongoDB': IconMongo,

  'AWS': IconAws,
  'Azure': IconAzure,
  'Nginx': IconNginx,
  'GitHub Actions': IconGhActions,

  'Git': IconGit,
  'GitHub': IconGithub,
  'Postman': IconPostman,
  'JIRA': IconJira,
} as const

export type TechName = keyof typeof TechIconMap
