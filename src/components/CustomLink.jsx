const CustomLink = ({ url, linkTo }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {linkTo}
    </a>
  )
}

export default CustomLink
