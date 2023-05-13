export const metadata = {
    title: 'Products'
}

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="py-10 px-10">{children}</div>
  )
}

export default layout