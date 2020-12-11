interface IProps {
    html: string
}

const PrintMarkdown = ({ html }: IProps) => {
  return (
    <div className="markdown max-w-2xl mx-auto">
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}

export default PrintMarkdown