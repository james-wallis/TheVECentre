// import markdownStyles from './markdown-styles.module.css'

interface IProps {
    html: string
}

const PrintMarkdown = ({ html }: IProps) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        // className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}

export default PrintMarkdown