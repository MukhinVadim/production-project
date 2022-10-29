// TODO: make an autocomplete for paths

export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setGenerator('component', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name',
      },
      {
        type: 'input',
        name: 'path',
        message: 'path relative to src',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{path}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: './templates/component/component.hbs',
      },
      {
        type: 'add',
        path: 'src/{{path}}/{{pascalCase name}}/{{pascalCase name}}.module.scss',
        templateFile: './templates/component/style.hbs',
      },
      {
        type: 'add',
        path: 'src/{{path}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: './templates/component/stories.hbs',
      },
      {
        type: 'add',
        path: 'src/{{path}}/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: './templates/component/test.hbs',
      },
      {
        type: 'add',
        path: 'src/{{path}}/{{pascalCase name}}/index.tsx',
        templateFile: './templates/component/index.hbs',
      },
    ],
  });
  plop.setGenerator('page', {
    prompts: [
      {
        type: 'page name',
        name: 'name',
        message: 'page name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/pages/{{kebabCase name}}-page/ui/{{pascalCase name}}Page.tsx',
        templateFile: './templates/page/page.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{kebabCase name}}-page/ui/{{pascalCase name}}PageAsync.tsx',
        templateFile: './templates/page/page-async.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{kebabCase name}}-page/ui/{{pascalCase name}}Page.stories.tsx',
        templateFile: './templates/page/stories.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{kebabCase name}}-page/ui/{{pascalCase name}}Page.module.scss',
        templateFile: './templates/page/style.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{kebabCase name}}-page/ui/{{pascalCase name}}Page.test.tsx',
        templateFile: './templates/page/test.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{kebabCase name}}-page/index.ts',
        templateFile: './templates/page/index.hbs',
      },
    ],
  });
}
