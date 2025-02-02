type PageContainerProps = {
    children: React.ReactNode
    className?: string
    title?: string
}        

export const PageContainer: React.FC<PageContainerProps> = ({
    children,
    className,
}) => {
    return (
        <main className={`${className}`}>{children}</main>
    )
}