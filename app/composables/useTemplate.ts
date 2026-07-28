import type { TemplateName } from '~/types/template'

export const useTemplate = () => {
  const currentTemplate = useState<TemplateName>('template', () => 'template-one')

  return {
    currentTemplate,
  }
}
