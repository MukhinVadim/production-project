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
  plop.setGenerator('entity', {
    prompts: [],
    actions: [],
  });
}
