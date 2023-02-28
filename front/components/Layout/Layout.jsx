import { SeoMeta } from "../SeoMeta";

export const Layout = ({children, title, description}) => {

  return (
    <div>
      <SeoMeta title={title} description={description} />
      {children}
    </div>
  )
}